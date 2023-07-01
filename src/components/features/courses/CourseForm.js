import React, { useState } from 'react'
import Course from '../../../models/courses/Course';
import FormWithValidation from '../../../HigherOrderComponents/FormWithValidation';
import Input from '../../Form/Input';
import Select from '../../Form/Select';
import { useMutation, useQuery } from 'react-query';
import { getCourseTypesPromise, saveNewCoursePromise } from '../../../promises/course/CoursePromises';
import Loader from '../../Layout/Components/Loader';
import { API_COURSE_URLS } from '../../../router/courses/CourseUrls';
import { useTranslation } from 'react-i18next';

const CourseForm = ({ methods }) => {
  const { handleSubmit, control, reset } = methods;
  const { t } = useTranslation();

  const { data: courseTypes, isLoading } =
    useQuery(API_COURSE_URLS.API_GET_COURSES_TYPES.key, getCourseTypesPromise, {
      onSuccess: (res) => {
        // reset(data.data);
      }
    });

  const { mutate, isLoading: isSavingNewCourse, data: saveNewCourseData } = useMutation(saveNewCoursePromise, {
    onSuccess: (data) => {
      handleSubmitResponse(data);
    },
    onError: (error) => {
      alert("Error submitting student" + error);
    }
  });

  if (isLoading) {
    return <Loader />;
  }
  const handleSubmitResponse = (response) => {
    console.log('response', response)
    if (response.status === "ERROR") {
      alert("Course with same name exists.");
      return;
    }
    if (response.status === "SUCCESS") {
      alert("Course info saved successfully.");
    }
  };
  const submitNewCourseFormHandler = (course) => {
    mutate(course);
  }


  return (
    <div className={"course form_Container "}>
    <h1 className={"form_container_title"}>{t('createNewCourse')}</h1>
    <form className={"form"} onSubmit={handleSubmit(submitNewCourseFormHandler)}>
      <Input name="name" label={t('courseName')} control={control} />
      {courseTypes && (
        <Select
          label={t('type')}
          name="type"
          control={control}
          options={courseTypes.data}
        />
      )}
  
      <input className={"form__submit"} type="submit" value={t('enter')} />
    </form>
  </div>
  
  )
};

export default FormWithValidation(Course.getValidationSchema())(CourseForm);