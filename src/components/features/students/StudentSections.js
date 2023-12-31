import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { STUDENT_API_ENDPOINTS } from "../../../router/students/StudentUrls";
import useModal from "./../../../CustomHooks/useModal";
import { getStudentAssignedSectionsPromise, getStudentDataByIdPromise } from "../../../promises/students/StudentPromises";
import Loader from "../../Layout/Components/Loader";
import NewPaymentForm from "../payments/NewPaymentForm";
import ViewStudentSectionPayments from "../payments/ViewStudentSectionPayments";
import viewPayment from "../../../assets/viewPayment.png";
import addPayment from "../../../assets/addPayments.png";
import SingleSectionAssignmentToStudentForm from "./SingleSectionAssignmentToStudentForm";
import { useTranslation } from "react-i18next";
export default function StudentSections() {
  const { t } = useTranslation();

  const { studentId } = useParams();
  const { data: studentSections, isLoading } = useQuery(
    [STUDENT_API_ENDPOINTS.GET_STUDENT_ASSIGNED_SECTIONS.key, studentId],
    () => getStudentAssignedSectionsPromise(studentId)
  );

  const handleQueryInvalidate = () => {
    refetch()
  };
  const [Modal, openModal, closeModal] = useModal();
  const { data: student, refetch } = useQuery(
    [STUDENT_API_ENDPOINTS.API_GET_STUDENT_BY_ID.key, studentId],
    () => getStudentDataByIdPromise(studentId), { onInvalidate: handleQueryInvalidate, }
  );



  if (isLoading) {
    return <Loader />;
  }

  const { firstName, parentName, grandParentName, familyName } =
    student?.data?.name || {};

  return (
    <div className="studentSections page">
      <h1 className="page-title">{t("StudentAssignedSections")}</h1>

      <div className="studentInfo">
        <p>
          <strong style={{ fontSize: '.9rem' }}>{t('StudentName')}:</strong> {firstName} {parentName}{" "}
          {grandParentName} {familyName}
        </p>
        <button className="actionButton"
          onClick={() => openModal(<SingleSectionAssignmentToStudentForm studentId={studentId} closeModal={closeModal} />)}        >
           {t('assignToSection')}
        </button>
      </div>

      <section className="studentSections__list">
        <div className="sectionCard">
          <div className="data">
            <strong>{t('sectionName')}</strong>
            <strong>{t('teacherName')}</strong>
          </div>
          <div className="buttons">
            <strong>{t('addPayment')}</strong>
            <strong>{t('viewPayments')}</strong>

          </div>
        </div>
        {studentSections?.data.map((section) => (
          <div key={section.id} className={"sectionCard" + (section.sum < section.feeTotal ? " not-payed-total" : "")}>
            <div className="data">
              <div>  {section.sectionName || "-"}
              </div>
              <div>{(section.firstName + " " + section.parentName + " " + section.grandParentName + " " + section.familyName) || "-"}
              </div>
            </div>
            <div className="buttons">
              <button className="card-icon" onClick={() => {
                openModal(
                  <NewPaymentForm
                    studentId={section.studentId}
                    sectionId={section.sectionId}
                    closeModal={closeModal}
                    refetch={refetch}
                  />
                );
              }}
              >   <img src={addPayment} alt="Add Payment" />
              </button>
              <button className="card-icon" onClick={() => {
                openModal(
                  <ViewStudentSectionPayments
                    feeTotal={section.feeTotal}
                    paymentsSum={section.sum}
                    studentId={section.studentId}
                    sectionId={section.sectionId}
                  />
                );
              }}>  <img src={viewPayment} alt="View Payment" /> </button>  </div>

          </div>
        ))}
      </section>

      {Modal()}
    </div>
  );
}
