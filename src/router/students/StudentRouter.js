import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { studentUrls } from "./StudentUrls";
import ErrorBoundary from "../../components/Exceptions/ErrorBoundary";
import StudentForm from "../../components/features/students/StudentForm";
import StudentHome from "../../components/features/students/StudentHome";
import StudentsList from "../../components/features/students/StudentsList";
import StudentSections from "../../components/features/students/StudentSections";
import { useTranslation } from "react-i18next";

export default function StudentRouter() {
  const { t } = useTranslation();
  return (

    <div className="student-wrapper">
      <div className="buttons-container">
        <NavLink end className="cross-fade-button" to={`${studentUrls.HOME}`}>
          {t('navBarLinks.home')}
        </NavLink>
        <NavLink end className="cross-fade-button" to={`${studentUrls.NEW_STUDENT_FORM}`}>
          {t('navBarLinks.addStudent')}
        </NavLink>
        <NavLink end className="cross-fade-button" to={`${studentUrls.STUDENTS_LIST}`}>
          {t('navBarLinks.studentsList')}
        </NavLink>
      </div>
      <ErrorBoundary>
        <Routes>

          <Route index element={<StudentHome />} />
          <Route path={`${studentUrls.NEW_STUDENT_FORM}`} element={<StudentForm />} />
          <Route path={`${studentUrls.STUDENTS_LIST}`} element={<StudentsList />} />
          <Route path={`${studentUrls.STUDENT_ASSIGNED_SECTIONS}`} element={<StudentSections />} />
        </Routes>
      </ErrorBoundary>
    </div>

  );
}
