import React, { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import FormWithValidation from '../../../HigherOrderComponents/FormWithValidation';
import Student from '../../../models/students/Student';
import { API_SECTIONS_URL } from '../../../router/sections/SectionUrls';
import Input from '../../Form/Input';
import { singleStudentAssignmentToSectionPromise, getAllStudentsBySectionIdPromise } from '../../../promises/sections/SectionPromises';
import RadioButton from '../../Form/RadioButton';
import { useTranslation } from 'react-i18next';

function SingleStudentAssignmentToSectionForm({ sectionId, feeTotal, methods, closeModal }) {
  const [inputValue, setInputValue] = useState(0);
  const { t, i18n } = useTranslation();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const { handleSubmit, reset, control, watch } = methods;
  const { mutate, isLoading, data: updatedStudent } = useMutation(singleStudentAssignmentToSectionPromise, {
    onSuccess: (data) => {
      closeModal();
    },
    onError: (error) => {
      alert("Error submitting student" + error);
    }
  });

  const studentsQuery =
    useQuery([API_SECTIONS_URL.API_GET_ALL_STUDENTS_BY_SECTION_ID.key, sectionId], () => getAllStudentsBySectionIdPromise(sectionId), {
      onSuccess: (data) => {
      }
    });

  const { data: queryAllStudents } = studentsQuery;


  const submitAssignStudentToSectionForm = (student) => {

    mutate({ sectionId, discount: parseInt(inputValue), ...student });
  };

  return (
    <div style={{ background: 'white', padding: '1rem' }}>
      <h3>{t('assignStudentToSection')}</h3>

      <div>
        <form id="addStudentForm" className="form" onSubmit={handleSubmit(submitAssignStudentToSectionForm)}>
          <div style={{ maxHeight: '30vh', overflowY: 'auto' }}>
            {queryAllStudents?.data?.map((student) => (
              <RadioButton
                key={student.id}
                label={`${student.firstName} ${student.parentName} ${student.grandParentName} ${student.familyName}`}
                name="selectedStudent"
                control={control}
                value={student.id}
                disabled={student.assigned ? true : false}
              />
            ))}
          </div>
          {t('feeTotal')} {feeTotal - feeTotal * (inputValue / 100)}
          <Input name="discount" label={t('discount')} control={control} type="number" onChange={handleInputChange} value={inputValue} min={0} max={100} />

          <input type="submit" value={t('submit')} />
        </form>
      </div>
    </div>
  )
}
export default FormWithValidation(Student.getAssignMultipleStudentsToSectionValidation())(SingleStudentAssignmentToSectionForm)

