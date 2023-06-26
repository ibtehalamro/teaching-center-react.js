import React, { useState } from "react";
import { useMutation, useQuery } from 'react-query';
import { getTeachersListPromise, softDeleteTeacherByTeacherIdPromise } from "../../../promises/teachers/TeacherPromises";
import useModal from "../../../CustomHooks/useModal";
import Loader from "../../Layout/Components/Loader";
import { API_TEACHER_URLS } from "../../../router/teachers/TeacherUrls";
import TableWithPagination from "../../commonComponents/TableWithPagination";
import sectionsImage from '../../../assets/sections.png'
import editImage from '../../../assets/edit.jpg'
import deleteImage from '../../../assets/delete.jpg'
import TeacherSections from "./TeacherSections";
import UpdateTeacherForm from "./UpdateTeacherForm";
import ConfirmAlert from "../../commonComponents/ConfirmAlert";
import { useTranslation } from "react-i18next";
const TeachersList = () => {
  const { t } = useTranslation();

  const { mutate, isLoading } = useMutation(softDeleteTeacherByTeacherIdPromise, {
    onSuccess: (data) => {
      refetch();
      closeModal();
    },
    onError: (error) => {
      alert("Error deleting teacher" + error);
    }
  });

  const { data: teachersList, isLoading: isTeachersLoaded, error: errorLoadingTeachersList, refetch } =
    useQuery(API_TEACHER_URLS.API_GET_TEACHERS_LIST.key, getTeachersListPromise);
  const [Modal, openModal, closeModal] = useModal();
  if (isTeachersLoaded) {
    return <Loader />;
  }

  if (errorLoadingTeachersList) {
    return <div>Error: {errorLoadingTeachersList.message}</div>;
  }

  if (teachersList?.data.length === 0) {
    return <div>No Teachers</div>
  }
  const headers = [t('First_Name'),
  t('Parent_Name'),
  t('Grandparent_Name'),
  t('Family_Name'),
  t('Sections'),
  t('Modify'),
  t('Delete')];

  const rowMethod = (teacher) => {
    const { firstName, parentName, grandParentName, familyName } = teacher?.name;
    return (
      <tr key={teacher.id}>
        <td>{firstName}</td>
        <td>{parentName}</td>
        <td>{grandParentName}</td>
        <td>{familyName}</td>
        <td>
          <button
            className="card-icon"
            onClick={() =>
              openModal(
                <TeacherSections
                  teacherId={teacher.id}
                  teacherName={`${firstName} ${parentName} ${grandParentName} ${familyName}`}
                />
              )
            }
          >
            <img src={sectionsImage} alt="Sections" />
          </button>
        </td>
        <td>
          <button
            className="card-icon"
            onClick={() =>
              openModal(<UpdateTeacherForm teacherId={teacher.id} closeModal={closeModal} />)
            }
          >
            <img src={editImage} alt="Edit" />
          </button>
        </td>
        <td>
          <button
            className="card-icon"
            onClick={() =>
              openModal(
                <ConfirmAlert
                  message="Are you sure you want to delete teacher?"
                  onConfirm={() => mutate(teacher.id)}
                  onCancel={closeModal}
                />
              )
            }
          >
            <img src={deleteImage} alt="Delete" />
          </button>
        </td>
      </tr>

    );
  };

  return (

    <div className="teachersList">
      <TableWithPagination id={"teachersTable"} data={teachersList.data} itemsPerPage={5} rowMethod={rowMethod} headers={headers} />
      {Modal()}

    </div>
  );

};
export default TeachersList;
