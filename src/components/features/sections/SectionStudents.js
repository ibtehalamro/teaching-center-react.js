import React from 'react'
import { API_SECTIONS_URL } from '../../../router/sections/SectionUrls';
import { useQuery } from 'react-query';
import { getSectionStudentsPromise } from '../../../promises/sections/SectionPromises';
import Loader from '../../Layout/Components/Loader';
import { getDateFromTimeStamp } from '../../../utils/DateUtils';
import TableWithPagination from '../../commonComponents/TableWithPagination';
import { useTranslation } from 'react-i18next';

export default function SectionStudents({ sectionId }) {
    const { data: students, isLoading } = useQuery([API_SECTIONS_URL.API_GET_SECTION_STUDENTS_BY_SECTION_ID.key, sectionId], () => getSectionStudentsPromise(sectionId));
    const { t } = useTranslation();

    const rowMethod = (student) => {
        return <tr>
            <td>{`${student.firstName} ${student.parentName} ${student.grandParentName} ${student.familyName}`}</td>
            <td>{student.city}</td>
            <td>{student.mobileNumber}</td>
            <td>{getDateFromTimeStamp(student.createdAt)}</td>
            <td>{getDateFromTimeStamp(student.updatedAt)}</td>
        </tr>
    }
    const headers = [
        t('sectionHeaders.fullName'),
        t('sectionHeaders.city'),
        t('sectionHeaders.mobileNumber'),
        t('sectionHeaders.createdAt'),
        t('sectionHeaders.updatedAt')
      ];
    if (isLoading) {
        return <Loader />;
    }
    return (
        <div className='sections'>
            <div className='title'>
                <span className='page-title'>Section Students</span>
            </div>
            <div className='section__studentsList'>
                <TableWithPagination data={students.data} itemsPerPage={5} rowMethod={rowMethod} headers={headers} />
            </div>
        </div>
    )
}
