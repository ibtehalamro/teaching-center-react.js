import React from 'react';
import { useMutation } from 'react-query';
import { saveNewTeacherDataPromise } from '../../../promises/teachers/TeacherPromises';
import Select from '../../Form/Select';
import Input from '../../Form/Input';
import FormWithValidation from '../../../HigherOrderComponents/FormWithValidation';
import Teacher from './../../../models/teachers/Teacher';
import { useTranslation } from 'react-i18next';


const TeacherForm = ({ methods })=> {
  const { handleSubmit, control, reset } = methods;
  const { t } = useTranslation();

  const { mutate, isLoading, isError, error, data } = useMutation(saveNewTeacherDataPromise, {
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
      alert("Teacher with same name exists.");
    }
    if (response.status === "SUCCESS") {
      alert("Teacher info saved successfully.");
      reset();
    }
  };

  const submitTeacherForm = (student) => {
    mutate(student);
  }

  return (
    <div className='teacher form_container'>
    <h1 className={"form_container_title"}>{t('createNewTeacher')}</h1>
    <form id="addTeacherForm" className={"form"} onSubmit={handleSubmit(submitTeacherForm)}>
      <div className='form-group-row '>
        <Input name="name.firstName" label={t('First_Name')} control={control} />
        <Input name="name.parentName" label={t('Parent_Name')} control={control} />
        <Input name="name.grandParentName" label={t('Grandparent_Name')} control={control} />
        <Input name="name.familyName" label={t('Family_Name')} control={control} />
      </div>
      <Input name="address.city" label={t('cityName')} control={control} />
      <Input name="mobileNumber.number1" label={t('mobileNumber')} control={control} />
  
      <Select
        label={t('gender')}
        name="gender"
        control={control}
        options={[
          { value: 'male', label: t('male') },
          { value: 'female', label: t('female') },
        ]}
      />
  
      <input type="submit" value={isLoading ? t('saving') : t('save')} className={isLoading ? "submitting" : ""}
        disabled={isLoading} />
    </form>
  </div>
  
   )
}
export default FormWithValidation(Teacher.getValidationSchema())(TeacherForm)