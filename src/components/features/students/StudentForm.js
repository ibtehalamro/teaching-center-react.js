import React, { useState } from 'react';
import { saveNewStudentDataPromise } from '../../../promises/students/StudentPromises';
import { useMutation } from 'react-query';
import Input from '../../Form/Input';
import Select from '../../Form/Select';
import FormWithValidation from '../../../HigherOrderComponents/FormWithValidation';
import Student from './../../../models/students/Student';
import { useTranslation } from 'react-i18next';
 
const StudentForm = ({ methods })=> {
  const { handleSubmit, control, reset } = methods;
  const { t } = useTranslation();

  const { mutate, isLoading, isError, error, data } = useMutation(saveNewStudentDataPromise, {
    onSuccess: (data) => {
      handleSubmitResponse(data);
    },
    onError: (error) => {
      alert("Error submitting student" + error);
    }
  });

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const handleSubmitResponse = (response) => {
    if (response.status === "ERROR") {
      alert("Student with same name exists.");
    }
    if (response.status === "SUCCESS") {
      alert("Student info saved successfully.");
      reset();
    }
  };

  const submitStudentForm = (student) => {
    mutate(student);
  }

  return (
    <div className='student__form form_container'>
    <h1 className='form_container_title'>{t('createNewStudent')}</h1>
    <form id='addStudentForm' className='form' onSubmit={handleSubmit(submitStudentForm)}>
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
export default FormWithValidation(Student.getValidationSchema())(StudentForm)