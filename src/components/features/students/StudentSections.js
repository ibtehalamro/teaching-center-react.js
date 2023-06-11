import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { STUDENT_API_ENDPOINTS } from "../../../router/students/StudentUrls";
import useModal from "./../../../CustomHooks/useModal";
import { getStudentAssignedSectionsPromise, getStudentDataByIdPromise} from "../../../promises/students/StudentPromises";
import Loader from "../../Layout/Components/Loader";
import NewPaymentForm from "../payments/NewPaymentForm";
import ViewStudentSectionPayments from "../payments/ViewStudentSectionPayments";
import viewPayment from "../../../assets/viewPayment.png";
import addPayment from "../../../assets/addPayments.png";
import SingleSectionAssignmentToStudentForm from "./SingleSectionAssignmentToStudentForm";
export default function StudentSections() {
  const { studentId } = useParams();
  const { data: studentSections, isLoading } = useQuery(
    STUDENT_API_ENDPOINTS.GET_STUDENT_ASSIGNED_SECTIONS.key,
    () => getStudentAssignedSectionsPromise(studentId)
  );
  const [Modal, openModal, closeModal] = useModal();
  const { data: student } = useQuery(
    [STUDENT_API_ENDPOINTS.API_GET_STUDENT_BY_ID.key, studentId],
    () => getStudentDataByIdPromise(studentId)
  );

  if (isLoading) {
    return <Loader />;
  }

  const { firstName, parentName, grandParentName, familyName } =
    student?.data?.name || {};

  return (
    <div className="studentSections page">
      <h1 className="page-title">Student assigned sections</h1>

      <div className="studentInfo">
        <p>
          <strong style={{fontSize: '.9rem'}}> Student name:</strong> {firstName} {parentName}{" "}
          {grandParentName} {familyName}
        </p>
        <button
          className="actionButton"
          onClick={() =>
            openModal(<SingleSectionAssignmentToStudentForm studentId={studentId} closeModal={closeModal} />)
          }
        >
          Assign to section
        </button>
      </div>

      <section className="studentSections__list">
        <div className="sectionCard">
          <div className="data">
            <strong>Section Name </strong>
            <strong>Teacher Name </strong>
          </div>
          <div className="buttons">
            <strong> Add payment </strong>
            <strong> View payments </strong>

          </div>
        </div>
        {studentSections?.data.map((section) => (
          <div key={section.id} className="sectionCard">
           <div className="data">
          <div>  {section.sectionName || "-"}
            </div>
           <div>{section.firstName || "-"}
            </div> 
            </div> 
            <div className="buttons">
               <button className="card-icon" onClick={() => {
              openModal(
                <NewPaymentForm
                  studentId={section.studentId}
                  sectionId={section.sectionId}
                />
              );
            }}
            >   <img src={addPayment} alt="Add Payment"  />
            </button>
            <button className="card-icon" onClick={() => {
              openModal(
                <ViewStudentSectionPayments
                  studentId={section.studentId}
                  sectionId={section.sectionId}
                />
              );
            }}>  <img src={viewPayment} alt="View Payment"  /> </button>  </div>
      
          </div>
        ))}
      </section>

      {Modal()}
    </div>
  );
}
