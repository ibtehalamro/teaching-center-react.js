import React from 'react';
import { useQuery } from 'react-query';
import useModal from '../../../CustomHooks/useModal';
import Loader from '../../Layout/Components/Loader';
import { getDateFromTimeStamp } from '../../../utils/DateUtils';
import { API_TEACHER_URLS } from '../../../router/teachers/TeacherUrls';
import { getTeacherSectionsPromise } from '../../../promises/teachers/TeacherPromises';

const TeacherSections = ({ teacherId, teacherName }) => {

    const getTeacherSectionsQuery = useQuery([API_TEACHER_URLS.API_GET_TEACHER_SECTIONS_LIST.key, teacherId], () => getTeacherSectionsPromise(teacherId))

    const [Modal, openModal, closeModal] = useModal();

    const { data: teacherSections, isLoading: isSectionsLoading } = getTeacherSectionsQuery;
    if (isSectionsLoading) {
        return <Loader />;
    }
    return (
        <div className="teacher__sections">
            <div className="title">
                <p className="page-title">Teacher Name: {teacherName}</p>
            </div>

            <div className="teacher__sections-list">
                <div className='table-head'>
                    <table>
                        <thead>
                            <tr>
                                <th>Section Name</th>
                                <th>End Date</th>
                                <th>Start Date</th>
                                <th>End Time</th>
                                <th>Start Time</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div className='table-body'>
                    <table>
                        <tbody>
                            {teacherSections?.data.map((item, index) => (
                                <tr className="section" key={index}>
                                    <td>{item.sectionName}</td>
                                    <td>{getDateFromTimeStamp(item.endDate)}</td>
                                    <td>{getDateFromTimeStamp(item.startDate)}</td>
                                    <td>{item.endTime}</td>
                                    <td>{item.startTime}</td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {Modal()}
        </div>
    );
};

export default TeacherSections;
