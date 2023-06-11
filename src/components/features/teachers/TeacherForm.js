import React from 'react';
import { useMutation } from 'react-query';
import { saveNewTeacherDataPromise } from '../../../promises/teachers/TeacherPromises';
import Select from '../../Form/Select';
import Input from '../../Form/Input';
import FormWithValidation from '../../../HigherOrderComponents/FormWithValidation';
import Teacher from './../../../models/teachers/Teacher';


const TeacherForm = ({ methods })=> {
  const { handleSubmit, control, reset } = methods;

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
    alert("WILL SUBMIT")
    mutate(student);
  }

  return (
  <div className='teacher form_container'>
      <h1 className={"form_container_title"}>Create New Teacher</h1>
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
export default FormWithValidation(Teacher.getValidationSchema())(TeacherForm)