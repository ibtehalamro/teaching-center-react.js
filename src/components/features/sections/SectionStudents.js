import React from 'react'
import { API_SECTIONS_URL } from '../../../router/sections/SectionUrls';
import { useQuery } from 'react-query';
import { getSectionStudentsPromise } from '../../../promises/sections/SectionPromises';
import Loader from '../../Layout/Components/Loader';
import { getDateFromTimeStamp } from '../../../utils/DateUtils';

export default function SectionStudents({ sectionId }) {
    const { data: students, isLoading } = useQuery([API_SECTIONS_URL.API_GET_SECTION_STUDENTS_BY_SECTION_ID.key, sectionId], () => getSectionStudentsPromise(sectionId));

    if (isLoading) {
        return <Loader />;
    }
    return (
        <div className='sections'>

            <div className='title'>
                <span className='page-title'>Section Students</span>
            </div>
            <div className='section__studentsList'>
                <div className='table-head'>
                <table >
                    <thead>
                        <tr>
                            <th>Full Name</th>
                            <th>City</th>
                            <th>Mobile Number</th>
                            <th>Created At</th>
                            <th>Updated At</th>
                        </tr>
                    </thead>
                </table>
                </div>
                <div className='table-body'>
                    <table >
                        <tbody>
                            {students?.data.map((data) => <tr>
                                <td>{`${data.firstName} ${data.parentName} ${data.grandParentName} ${data.familyName}`}</td>
                                <td>{data.city}</td>
                                <td>{data.mobileNumber}</td>
                                <td>{getDateFromTimeStamp(data.created_at)}</td>
                                <td>{getDateFromTimeStamp(data.updated_at)}</td>

                            </tr>)} 

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
