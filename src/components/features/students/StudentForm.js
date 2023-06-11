import React, { useState } from 'react';
import { saveNewStudentDataPromise } from '../../../promises/students/StudentPromises';
import { useMutation } from 'react-query';
import Input from '../../Form/Input';
import Select from '../../Form/Select';
import FormWithValidation from '../../../HigherOrderComponents/FormWithValidation';
import Student from './../../../models/students/Student';
 
const StudentForm = ({ methods })=> {
  const { handleSubmit, control, reset } = methods;

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
      <h1 className={"form_container_title"}>Create New Student</h1>
      <form id="addStudentForm" className={"form"} onSubmit={handleSubmit(submitStudentForm)}>
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
export default FormWithValidation(Student.getValidationSchema())(StudentForm)