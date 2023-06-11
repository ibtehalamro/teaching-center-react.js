import React from "react";
import ModifyStudentForm from "./ModifyStudentForm";
import { Link, useResolvedPath } from "react-router-dom";
import { MAIN_APP_URLS } from "../../../Constants/URLConstants/MainAppUrls";
import sectionsImage from '../../../assets/sections.png'
import editImage from '../../../assets/edit.jpg'
import deleteImage from '../../../assets/delete.jpg'
const StudentCard = ({ student, openModal, closeModal }) => {
    const { firstName, parentName, grandParentName, familyName } = student?.name;
    const pathname = useResolvedPath(`${MAIN_APP_URLS.ADMIN_DASHBOARD}/student`, true).pathname;

    return (
        <div className={`studentList__card slide-top`}>
            <p className="name">
                {firstName} {parentName} {grandParentName} {familyName}
            </p>
            <div className="links">
                <Link className="card-icon" to={`${pathname}/${student.id}/sections`}>
                    <img src={sectionsImage} alt="Sections" />
                </Link>
                <button className="card-icon" onClick={() => openModal(<ModifyStudentForm studentId={student.id} closeModal={closeModal} />)}>
                    <img src={editImage} alt="Edit" />
                </button>
                <button className="card-icon" onClick={() => openModal(<ModifyStudentForm studentId={student.id} closeModal={closeModal} />)}>
                    <img src={deleteImage} alt="Edit" />

                </button>
            </div>
        </div>
    );
};
export default StudentCard;
