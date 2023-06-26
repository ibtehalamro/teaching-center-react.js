import React from 'react';
import { useMutation, useQuery } from 'react-query';
import { getStudentDataByIdPromise, updateStudentDataPromise } from '../../../promises/students/StudentPromises';
import { STUDENT_API_ENDPOINTS } from '../../../router/students/StudentUrls';
import Loader from '../../Layout/Components/Loader';
import Input from '../../Form/Input';
import Select from '../../Form/Select';
import FormWithValidation from '../../../HigherOrderComponents/FormWithValidation';
import Student from '../../../models/students/Student';
import { useTranslation } from 'react-i18next';


function ModifyStudentForm({ methods, studentId, closeModal }) {
  const { handleSubmit, reset, control } = methods;
  const { t } = useTranslation();

  const { mutate, isLoading, data: updatedStudent } = useMutation(updateStudentDataPromise, {
    onSuccess: (data) => {
      handleSubmitResponse(data.data);
    },
    onError: (error) => {
      alert("Error submitting student" + error);
    }
  });
  const studentQuery =
    useQuery([STUDENT_API_ENDPOINTS.API_GET_STUDENT_BY_ID.key, studentId], () => getStudentDataByIdPromise(studentId), {
      onSuccess: (data) => {
        console.log('data', data)
        reset(data.data);
      }
    });

  const submitUpdatedStudentData = (student) => {
    student.id = studentId;
    mutate(student);
  };

  const handleSubmitResponse = (response) => {
    if (response.status === "ERROR") {
      alert("Student with same name exists.");
      return;
    }
    if (response.status === "SUCCESS") {
       closeModal();
    }
  };

  if(studentQuery.isLoading){
    return <Loader/>
  }

  return (
    <div className='student__form form_container'>
      <h1 className={"form_container_title"}>تعديل معلومات طالب</h1>
      <form id="addStudentForm" className={"form"} onSubmit={handleSubmit(submitUpdatedStudentData)}>
       <div className='form-group-row'>
        <Input name='name.firstName' label={t("First_Name")} control={control} />
        <Input name='name.parentName' label={t('Parent_Name')} control={control} />
        <Input name='name.grandParentName' label={t('Grandparent_Name')} control={control} />
        <Input name='name.familyName' label={t('Family_Name')} control={control} />
      </div>
      <Input name='address.city' label={t('cityName')} control={control} />
      <Input name='mobileNumber.number1' label={t('mobileNumber')} control={control} />

      <Select
        label={t('gender')}
        name='gender'
        control={control}
        options={[
          { value: 'male', label: t('male') },
          { value: 'female', label: t('female') },
        ]}
      />

      <input
        type='submit'
        value={isLoading ? t('saving') : t('save')}
        className={isLoading ? 'submitting' : ''}
        disabled={isLoading}
      />
    </form>
    </div>
  )
}
export default FormWithValidation(Student.getValidationSchema())(ModifyStudentForm)