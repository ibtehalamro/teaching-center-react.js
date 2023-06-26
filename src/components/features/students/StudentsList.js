import React, { useState } from "react";
import { useMutation, useQuery } from 'react-query';
import { STUDENT_API_ENDPOINTS } from "../../../router/students/StudentUrls";
import ModifyStudentForm from "./ModifyStudentForm";
import { getStudentsListPromise, softDeleteStudentByStudentIdPromise } from "../../../promises/students/StudentPromises";
import useModal from './../../../CustomHooks/useModal';
import Loader from "../../Layout/Components/Loader";
import FullNameManager from "../../../utils/modals/FullNameManager";
import sectionsImage from '../../../assets/sections.png'
import editImage from '../../../assets/edit.jpg'
import deleteImage from '../../../assets/delete.jpg'
import { Link, useResolvedPath } from "react-router-dom";
import { MAIN_APP_URLS } from "../../../Constants/URLConstants/MainAppUrls";
import TableWithPagination from "../../commonComponents/TableWithPagination";
import ConfirmAlert from "../../commonComponents/ConfirmAlert";
import { useTranslation } from "react-i18next";
const StudentsList = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = useResolvedPath(`${MAIN_APP_URLS.ADMIN_DASHBOARD}/student`, true).pathname;
  const { mutate, isLoading } = useMutation(softDeleteStudentByStudentIdPromise, {
    onSuccess: (data) => {
      refetch();
      closeModal();
    },
    onError: (error) => {
      alert("Error deleting teacher" + error);
    }
  });
  const { data: studentsList, isLoading: isStudentsLoaded, error: errorLoadingStudentsList,refetch } =
    useQuery(STUDENT_API_ENDPOINTS.STUDENTS_LIST.key, getStudentsListPromise);

  const [Modal, openModal, closeModal] = useModal();

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  if (isStudentsLoaded) {
    return <Loader />;
  }

  if (errorLoadingStudentsList) {
    return <div>Error: {errorLoadingStudentsList.message}</div>;
  }

  const filteredStudents = studentsList?.data.filter((student) => {
    return FullNameManager.getFullNameFromName(student.name).toLowerCase().includes(searchQuery.toLowerCase())
  }
  );



  const headers = [t('First_Name'),
  t('Parent_Name'),
  t('Grandparent_Name'),
  t('Family_Name'),
  t('Sections'),
  t('Modify'),
  t('Delete')];

  const rowMethod = (student) => {
    const { firstName, parentName, grandParentName, familyName } = student?.name;
    return (
      <tr key={student.id}>
        <td>{firstName}</td>
        <td>{parentName}</td>
        <td>{grandParentName}</td>
        <td>{familyName}</td>
        <td>
        <Link className="card-icon" to={`${pathname}/${student.id}/sections`}>
                    <img src={sectionsImage} alt="Sections" />
                </Link>
        </td>
        <td>
        <button className="card-icon" onClick={() => openModal(<ModifyStudentForm studentId={student.id} closeModal={closeModal} />)}>
                    <img src={editImage} alt="Edit" />
                </button>
        </td>
        <td>
        <button
            className="card-icon"
            onClick={() =>
              openModal(
                <ConfirmAlert
                  message="Are you sure you want to delete student?"
                  onConfirm={() => mutate(student.id)}
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
    <div className="studentsList">
      <div className="search-box">
        <input
          className="search-box__input"
          type="text"
          placeholder="Search student..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button className="search-box__button" onClick={() => setSearchQuery("")}>
          Reset
        </button>
      </div>

      <TableWithPagination id={"studentsTable"} data={filteredStudents} itemsPerPage={5} rowMethod={rowMethod} headers={headers} />
      {Modal()}
    </div>
  );
};

export default StudentsList;
