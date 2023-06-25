import React from 'react';
import { useQuery } from 'react-query';
import { Link, useResolvedPath } from 'react-router-dom';
import { API_COURSE_URLS } from '../../../router/courses/CourseUrls';
import { getCoursesListPromise } from '../../../promises/course/CoursePromises';
import { MAIN_APP_URLS } from '../../../Constants/URLConstants/MainAppUrls';
import Loader from '../../Layout/Components/Loader';
import sectionsImage from '../../../assets/sections.png'
import TableWithPagination from '../../commonComponents/TableWithPagination';


const CoursesList = () => {
  const getCoursesQuery = useQuery(API_COURSE_URLS.API_GET_COURSES_LIST.key, getCoursesListPromise);
  const pathname = useResolvedPath(`${MAIN_APP_URLS.ADMIN_DASHBOARD}/course`, true).pathname;

  const { data: courses, isLoading: isCoursesLoading } = getCoursesQuery;
  if (isCoursesLoading) {
    return <Loader />
  }


  const headers = ["Course Name", "Type", "# of Sections", "Sections"];

  const rowMethod = (course) => {
    return (
      <tr key={course.id}>

        <td>{course.name}</td>
        <td>{course.type}</td>
        <td>{course.sections}</td>
        <td>
          <Link className="card-icon" to={`${pathname}/${course.id}/sections`}>
            <img src={sectionsImage} alt="Sections" />
          </Link>
        </td>

      </tr>

    );
  };

  return (
    <div className="courses">
      <TableWithPagination id={"coursesTable"} data={courses.data} itemsPerPage={5} rowMethod={rowMethod} headers={headers} />
    </div>
  );
};

export default CoursesList;