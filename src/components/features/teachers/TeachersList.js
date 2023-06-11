import React, { useState } from "react";
import { useQuery } from 'react-query';
import { getTeachersListPromise } from "../../../promises/teachers/TeacherPromises";
import useModal from "../../../CustomHooks/useModal";
import Loader from "../../Layout/Components/Loader";
import TeacherCard from './TeacherCard';
import { API_TEACHER_URLS } from "../../../router/teachers/TeacherUrls";


const TeachersList = () => {
  const [updatedItemId, setUpdatedItemId] = useState(null);

  const { data: teachersList, isLoading: isTeachersLoaded, error: errorLoadingTeachersList } =
    useQuery(API_TEACHER_URLS.API_GET_TEACHERS_LIST.key, getTeachersListPromise,
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
  if (isTeachersLoaded) {
    return <Loader />;
  }

  if (errorLoadingTeachersList) {
    return <div>Error: {errorLoadingTeachersList.message}</div>;
  }

  if(teachersList?.data.length === 0){
    return <div>No Teachers</div>
  }
  return (

    <div className="teachersList">
      <div className={`teacherCardTitle `}>
        <p className="name">
          Teacher Name
        </p>
        <div className="links">
          <span>Sections</span>
          <span>Modify </span>
        </div>
      </div>

      { teachersList?.data.length > 0 ? (
        teachersList.data.map((teacher) => (
          <TeacherCard key={teacher.id} teacher={teacher} openModal={openModal} closeModal={closeModal} />
        ))
      ) : (
        <div>No teachers</div>
      )}

      {Modal()}
    </div>
  );

};
export default TeachersList;
