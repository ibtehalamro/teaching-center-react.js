import React, { useState } from 'react'
import Course from '../../../models/courses/Course';
import FormWithValidation from '../../../HigherOrderComponents/FormWithValidation';
import Input from '../../Form/Input';
import Select from '../../Form/Select';
import { useMutation, useQuery } from 'react-query';
import { getCourseTypesPromise, saveNewCoursePromise } from '../../../promises/course/CoursePromises';
import Loader from '../../Layout/Components/Loader';
import { API_COURSE_URLS } from '../../../router/courses/CourseUrls';

const CourseForm = ({ methods }) => {
  const { handleSubmit, control, reset } = methods;

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
      //TODO: check bellow commented if needed
      // queryCache.setQueryData(apiStudentUrls.API_STUDENTS_LIST.key, (prevList) => {
      //   return prevList.map((student) =>
      //     student.id === updatedStudent.id ? updatedStudent : student
      //   );
      // });

    }
  };
  const submitNewCourseFormHandler = (course) => {
    mutate(course);
  }


  return (
    <div className={"course form_Container "}>
      <h1 className={"form_container_title"}>Create New Course</h1>
      <form className={"form"} onSubmit={handleSubmit(submitNewCourseFormHandler)}>
        <Input name="name" label="Course Name" control={control} />
        {courseTypes && <Select
          label="Type"
          name="type"
          control={control}
          options={courseTypes.data}
        />}

        <input className={"form__submit"} type="submit" value={"Enter"} />
      </form>
    </div>
  )
};

export default FormWithValidation(Course.getValidationSchema())(CourseForm);