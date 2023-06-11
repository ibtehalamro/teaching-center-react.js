import React, { useState } from "react";
import { useQuery } from 'react-query';
import { STUDENT_API_ENDPOINTS } from "../../../router/students/StudentUrls";
import StudentCard from "./StudentCard";
import { getStudentsListPromise } from "../../../promises/students/StudentPromises";
import useModal from './../../../CustomHooks/useModal';
import Loader from "../../Layout/Components/Loader";


const StudentsList = () => {
  const [updatedItemId, setUpdatedItemId] = useState(null);

  const { data: studentsList, isLoading: isStudentsLoaded, error: errorLoadingStudentsList } =
    useQuery(STUDENT_API_ENDPOINTS.STUDENTS_LIST.key, getStudentsListPromise,
      {
        onSettled: (newData, error, variables, previousData) => {
          if (previousData && newData) {
            const updatedItem = newData.find((item, index) => {
              return JSON.stringify(item) !== JSON.stringify(previousData[index]);
            });
            if (updatedItem) {
              setUpdatedItemId(updatedItem.id); // set the ID of the updated item
            }
          }
        }
      });
  const [Modal, openModal, closeModal] = useModal();
  if (isStudentsLoaded) {
    return <Loader />;
  }

  if (errorLoadingStudentsList) {
    return <div>Error: {errorLoadingStudentsList.message}</div>;
  }
  return (
    <div className="studentsList">
      <div className={`studentCardTitle `}>
        <p className="name">
          Student Name
        </p>
        <div className="links">
          <span>Sections</span>
          <span>Modify </span>
        </div>
      </div>

      {studentsList && studentsList?.data.length > 0 ? (
        studentsList.data.map((student) => (
          <StudentCard key={student.id} student={student} openModal={openModal} closeModal={closeModal} />
        ))
      ) : (
        <div>No students</div>
      )}

      {Modal()}
    </div>

  );

};
export default StudentsList;
