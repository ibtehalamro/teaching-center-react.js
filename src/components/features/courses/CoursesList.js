import React from 'react';
import { useQuery } from 'react-query';
import { Link, useResolvedPath } from 'react-router-dom';
import { API_COURSE_URLS } from '../../../router/courses/CourseUrls';
import { getCoursesListPromise } from '../../../promises/course/CoursePromises';
import { MAIN_APP_URLS } from '../../../Constants/URLConstants/MainAppUrls';
import Loader from '../../Layout/Components/Loader';


const CoursesList = () => {

  const getCoursesQuery = useQuery(API_COURSE_URLS.API_GET_COURSES_LIST.key, getCoursesListPromise);
  const pathname = useResolvedPath(`${MAIN_APP_URLS.ADMIN_DASHBOARD}/course`, true).pathname;

  const { data: courses, isLoading: isCoursesLoading } = getCoursesQuery;
  if (isCoursesLoading) {
    return <Loader />
  }

  return (
    <div className="courses">
      <h2 className="page-title">Courses</h2>
      <ul className="courses-list">
        {courses.data?.map((course) => (
          <Link to={`${pathname}/${course.id}/sections`}> <li key={course.id} className="courses-list__card">
            <div className="details">
              <span className="title">{course.name}</span>
              <span className="type">{course.type}</span>
            </div>
            <span>Sections: {course.sections}</span>
          </li></Link>
        ))}
      </ul>
    </div>
  );
};

export default CoursesList;