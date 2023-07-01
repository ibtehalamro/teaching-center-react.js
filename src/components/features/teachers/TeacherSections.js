import React from 'react';
import { useQuery } from 'react-query';
import useModal from '../../../CustomHooks/useModal';
import Loader from '../../Layout/Components/Loader';
import { getDateFromTimeStamp } from '../../../utils/DateUtils';
import { API_TEACHER_URLS } from '../../../router/teachers/TeacherUrls';
import { getTeacherSectionsPromise } from '../../../promises/teachers/TeacherPromises';
import { useTranslation } from 'react-i18next';
import TableWithPagination from '../../commonComponents/TableWithPagination';

const TeacherSections = ({ teacherId, teacherName }) => {

    const getTeacherSectionsQuery = useQuery([API_TEACHER_URLS.API_GET_TEACHER_SECTIONS_LIST.key, teacherId], () => getTeacherSectionsPromise(teacherId))
    const { t } = useTranslation( );

    const [Modal, openModal, closeModal] = useModal();

    const { data: teacherSections, isLoading: isSectionsLoading } = getTeacherSectionsQuery;
    if (isSectionsLoading) {
        return <Loader />;
    }
    const headers = [
      t('teacherSections.tableHeaders.sectionName'),
      t('teacherSections.tableHeaders.endDate'),
      t('teacherSections.tableHeaders.startDate'),
      t('teacherSections.tableHeaders.endTime'),
      t('teacherSections.tableHeaders.startTime')
    ];
    const rowMethod = (item) => {
      return (
        <tr className="section"  >
        <td>{item.sectionName}</td>
        <td>{getDateFromTimeStamp(item.endDate)}</td>
        <td>{getDateFromTimeStamp(item.startDate)}</td>
        <td>{item.endTime}</td>
        <td>{item.startTime}</td>
      </tr>
  
      );
    };
  
    return (
        <div className="teacher__sections">
      <div className="title">
        <p className="page-title">{t('teacherSections.title', { teacherName })}</p>
      </div>

      <div className="teacher__sections-list">
      <TableWithPagination id={"coursesTable"} data={teacherSections.data} itemsPerPage={5} rowMethod={rowMethod} headers={headers} />
 
      </div>
      {Modal()}
    </div>
    );
};

export default TeacherSections;
