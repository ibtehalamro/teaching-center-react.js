import React from 'react';
import { useMutation, useQuery } from 'react-query';
import { getStudentDataByIdPromise, updateStudentDataPromise } from '../../../promises/students/StudentPromises';
import { STUDENT_API_ENDPOINTS } from '../../../router/students/StudentUrls';
import Loader from '../../Layout/Components/Loader';
import Input from '../../Form/Input';
import Select from '../../Form/Select';
import FormWithValidation from '../../../HigherOrderComponents/FormWithValidation';
import Student from '../../../models/students/Student';


function ModifyStudentForm({ methods, studentId, closeModal }) {
  const { handleSubmit, reset, control } = methods;
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
      <h1 className={"form_container_title"}>Create New Student</h1>
      <form id="addStudentForm" className={"form"} onSubmit={handleSubmit(submitUpdatedStudentData)}>
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
export default FormWithValidation(Student.getValidationSchema())(ModifyStudentForm)