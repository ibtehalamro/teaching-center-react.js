import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { CourseUrls } from "./CourseUrls";
import CourseForm from "../../components/features/courses/CourseForm";
import CourseHome from "../../components/features/courses/CourseHome";
import CoursesList from "../../components/features/courses/CoursesList";
import CourseSections from "../../components/features/courses/CourseSections";
import { useTranslation } from "react-i18next";
 


const CourseRouter = () => {
  const { t } = useTranslation();
   return (
    <div className="course-wrapper">
      <div className="buttons-container">
      <NavLink end className="cross-fade-button" to={`${CourseUrls.HOME}`}>
        {t('navBarLinks.home')}
      </NavLink>
      <NavLink end className="cross-fade-button" to={`${CourseUrls.NEW_COURSE_FORM}`}>
        {t('navBarLinks.newCourse')}
      </NavLink>
      <NavLink end className="cross-fade-button" to={`${CourseUrls.COURSE_LIST}`}>
        {t('navBarLinks.coursesList')}
      </NavLink>
      </div>

      <Routes>
        <Route index element={<CourseHome />} />
        <Route exact path={`${CourseUrls.NEW_COURSE_FORM}`} element={<CourseForm />} />
        <Route exact path={`${CourseUrls.COURSE_LIST}`} element={<CoursesList />} />
        <Route exact path={`${CourseUrls.COURSE_SECTIONS}`} element={<CourseSections />} />
      </Routes>
    </div>
  );
}

export default CourseRouter;