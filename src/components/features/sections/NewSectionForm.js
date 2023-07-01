import React, { useState } from "react";
import { useMutation, useQuery } from "react-query";
import FormWithValidation from "../../../HigherOrderComponents/FormWithValidation";
import { Section } from './../../../models/sections/Section';
import Select from "../../Form/Select";
import Input from "../../Form/Input";
import { saveNewSectionDataPromise } from "../../../promises/sections/SectionPromises";
import { API_TEACHER_URLS } from "../../../router/teachers/TeacherUrls";
import { getTeachersListPromise } from "../../../promises/teachers/TeacherPromises";
import { useTranslation } from "react-i18next";



const NewSectionForm = ({ methods, courseId }) => {
  const { handleSubmit, control, reset } = methods;
  const [teachersList, setTeachersList] = useState([]);
  const { t } = useTranslation();

  const teachersListQuery = useQuery([API_TEACHER_URLS.API_GET_TEACHERS_LIST.key],
    getTeachersListPromise,
    {
      onSuccess: (data) => {
        const teachers = data.data.map(teacher => {
          return { value: teacher.id, label: teacher.name.firstName + " " + teacher.name.parentName + " " + teacher.name.grandParentName + " " + teacher.name.familyName }
        })
        setTeachersList(teachers)
      }
    }
  );

  const { mutate, isLoading, isError, error, data } = useMutation(saveNewSectionDataPromise, {
    onSuccess: (data) => {
      handleSubmitResponse(data);
    },
    onError: (error) => {
      alert("Error submitting section" + error);
    }
  });

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const handleSubmitResponse = (response) => {
    if (response.status === "ERROR") {
      alert("Section with same name exists.");
    }
    if (response.status === "SUCCESS") {
      alert("Section info saved successfully.");
      reset();
    }
  };

  const submitSectionForm = (section) => {
    section.courseId = courseId;
    console.log('section', section)
    mutate(section);
  }



  return (
    <div className={"section__form form_container"}>
      <h1 className={"form_container_title"}>Create New Section</h1>
      <form className={"form"} onSubmit={handleSubmit(submitSectionForm)}>
      <Input name="sectionName" label="Section Name" control={control} type="text" />

        <div className='form-group-row '>
          <Input name="time.startTime" label="Start Time" control={control} type="time" />
          <Input name="time.endTime" label="End Time" control={control} type="time" />
        </div>
        <div className='form-group-row '>
          <Input name="date.startDate" label="Start Date" control={control} type="date" />
          <Input name="date.endDate" label="End Date" control={control} type="date" />
        </div>

        {teachersList && <Select
          label="Teacher"
          name="teacherId"
          control={control}
          options={teachersList}
        />}
        <Input name="feeTotal" label="Fee total" control={control} type="number" />

        <input type="submit" value={"Enter"} />
      </form>
    </div>
  );
};
export default FormWithValidation(Section.getValidationSchema())(NewSectionForm);
