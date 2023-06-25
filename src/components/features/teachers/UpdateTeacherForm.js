import React from 'react';
import { useMutation, useQuery } from 'react-query';
import { getTeacherDataByTeacherIdPromise, updateTeacherFormDataPromise } from '../../../promises/teachers/TeacherPromises';
import Select from '../../Form/Select';
import Input from '../../Form/Input';
import FormWithValidation from '../../../HigherOrderComponents/FormWithValidation';
import Teacher from '../../../models/teachers/Teacher';
import { API_TEACHER_URLS } from '../../../router/teachers/TeacherUrls';


const UpdateTeacherForm = ({ methods, teacherId }) => {
  const { handleSubmit, control, reset } = methods;

  const { mutate, isLoading, isError, error, data } = useMutation(updateTeacherFormDataPromise, {
    onSuccess: (data) => {
      handleSubmitResponse(data);
    },
    onError: (error) => {
      alert("Error submitting student" + error);
    }
  });

  const teacherQuery = useQuery([API_TEACHER_URLS.API_GET_TEACHER_BY_ID.key, teacherId],
    () => getTeacherDataByTeacherIdPromise(teacherId),
    {
      onSuccess: (data) => {
        console.log('data', data.data)
        reset(data.data[0]);
      }
    });

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const handleSubmitResponse = (response) => {
    if (response.status === "ERROR") {
      alert(response.message);
    }
    if (response.status === "SUCCESS") {
      alert("Teacher info saved successfully.");
      reset();
    }
  };

  const submitTeacherForm = (teacher) => {
    teacher.id = teacherId;
    mutate(teacher);
  }

  return (
    <div className='teacher form_container'>
      <h1 className={"form_container_title"}>Update Teacher</h1>
      <form id="addTeacherForm" className={"form"} onSubmit={handleSubmit(submitTeacherForm)}>
        <div className='form-group-row '>
          <Input name="name.firstName" label="First Name" control={control} />
          <Input name="name.parentName" label="Parent Name" control={control} />
          <Input name="name.grandParentName" label="Grand parent Name" control={control} />
          <Input name="name.familyName" label="Family Name" control={control} />
        </div>
        <Input name="address.city" label="City Name" control={control} />
        <Input name="mobileNumber.number1" label="Mobile Number" control={control} />

        <Select
          label="Gender"
          name="gender"
          control={control}
          options={[
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' },
          ]}
        />

        <input type="submit" value={isLoading ? "Saving..." : "Save"} className={isLoading ? "submitting" : ""}
          disabled={isLoading} />
      </form>
    </div>
  )
}
export default FormWithValidation(Teacher.getValidationSchema())(UpdateTeacherForm)