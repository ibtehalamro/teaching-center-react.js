import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from "react-router-dom";
import useModal from '../../../CustomHooks/useModal';
import { getCourseSectionsListPromise } from '../../../promises/course/CoursePromises';
import { API_COURSE_URLS } from '../../../router/courses/CourseUrls';
import Loader from '../../Layout/Components/Loader';
import NewSectionForm from '../sections/NewSectionForm';
import { getDateFromTimeStamp } from '../../../utils/DateUtils';
import SingleStudentAssignmentToSectionForm from '../students/SingleStudentAssignmentToSectionForm';
import students from '../../../assets/student.svg';
import SectionStudents from '../sections/SectionStudents';
import attendanceImg from '../../../assets/attendance.png'
import AttendanceTracker from '../students/AttendanceTracker';
import { useTranslation } from 'react-i18next';
const CourseSections = () => {
  const { courseId } = useParams();
  const getCourseSectionsQuery = useQuery([API_COURSE_URLS.API_GET_COURSE_SECTIONS_LIST.key, courseId], () => getCourseSectionsListPromise(courseId));
  const { t } = useTranslation();

  const [Modal, openModal, closeModal] = useModal();


  const { data: courseSections, isLoading: isSectionsLoading } = getCourseSectionsQuery;
  if (isSectionsLoading) {
    return <Loader />
  }
  return (

    <div className="courses__sections-container">
      <div className='title'>
        <p className='page-title'>{t('courseHeaders.courseName')}: {courseSections?.data[0]?.courseName}</p>
        <button className='actionButton' onClick={() => openModal(<NewSectionForm courseId={courseId} />)}>{t('section.newSection')}</button>
      </div>

      <div className='list'>
        <table>
          <thead>
          <tr>
          <th>{t('sectionTableHeaders.sectionName')}</th>
          <th>{t('sectionTableHeaders.teacherName')}</th>
          <th>{t('sectionTableHeaders.endDate')}</th>
          <th>{t('sectionTableHeaders.startDate')}</th>
          <th>{t('sectionTableHeaders.endTime')}</th>
          <th>{t('sectionTableHeaders.startTime')}</th>
          <th>{t('sectionTableHeaders.courseName')}</th>
          <th>{t('sectionTableHeaders.students')}</th>
          <th>{t('sectionTableHeaders.actions')}</th>
        </tr>
          </thead>
          <tbody>
            {courseSections?.data.map((item, index) => (
              <tr className="section" key={index}>
                <td>{item.sectionName}</td>
                <td>{item.teacherName}</td>

                <td>{getDateFromTimeStamp(item.endDate)}</td>
                <td>{getDateFromTimeStamp(item.startDate)}</td>
                <td>{item.endTime}</td>
                <td>{item.startTime}</td>

                <td>{item.courseName}</td>
                <td>
                  <button className='card-icon' onClick={() => openModal(<SectionStudents sectionId={item.sectionId} />)}> <img src={students} alt="Students" /> </button>
                </td>
                <td>
                  <button className='actionButton2' onClick={() => openModal(<SingleStudentAssignmentToSectionForm sectionId={item.sectionId} feeTotal={item.feeTotal} closeModal={closeModal} />)}>{t('student.addStudent')}</button>
                </td>
                  {/* <td>
                    <button className='card-icon actionButton2' 
                    onClick={() => openModal(<AttendanceTracker closeModal={closeModal} sectionId={item.sectionId} />)}>
                      <img src={attendanceImg} alt='Attendance' />
                    </button>
                  </td> */}
              </tr>
            ))}
          </tbody>
        </table>

      </div>   {Modal()}
    </div>


  );
}

export default CourseSections;