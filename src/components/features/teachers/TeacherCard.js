import React from "react";
import { Link, useResolvedPath } from "react-router-dom";
import { MAIN_APP_URLS } from "../../../Constants/URLConstants/MainAppUrls";
import sectionsImage from '../../../assets/sections.png'
import editImage from '../../../assets/edit.jpg'
import deleteImage from '../../../assets/delete.jpg'
import TeacherForm from "./TeacherForm";
import TeacherSections from "./TeacherSections";
const TeacherCard = ({ teacher, openModal, closeModal }) => {
    const { firstName, parentName, grandParentName, familyName } = teacher?.name;

    return (
        <div className={`teacherList__card slide-top`}>
            <p className="name">
                {firstName} {parentName} {grandParentName} {familyName}
            </p>
            <div className="links">

                <button className="card-icon" onClick={() => openModal(
                    <TeacherSections teacherId={teacher.id} teacherName={ firstName+' '+parentName+' '+grandParentName+' '+familyName} />)}>
                    <img src={sectionsImage} alt="Sections" />
                </button>
                <button className="card-icon" onClick={() => openModal(<TeacherForm teacherId={teacher.id} closeModal={closeModal} />)}>
                    <img src={editImage} alt="Edit" />
                </button>
                <button className="card-icon" onClick={() => openModal(<TeacherForm teacherId={teacher.id} closeModal={closeModal} />)}>
                    <img src={deleteImage} alt="Edit" />

                </button>
            </div>
        </div>
    );
};
export default TeacherCard;


