import React from "react";


const EditSectionForm = ({ courseId, courseName }) => {
  const submit = async (event, router) => {
    event.preventDefault();
    const { startDate, endDate, startTime, endTime, teacherId } = event.target;
    const section = {
      courseId: courseId,
      startDate: startDate.value,
      endDate: endDate.value,
      startTime: startTime.value,
      endTime: endTime.value,
      teacherId: teacherId.value
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(section),
    };
    const response = await fetch("http://localhost:8081/section/", requestOptions);
    const data = await response.json();
    //  router.push(`/sections/`);
  };
  return (
    <div className={"form_container"}>
      <h1 className={"form_container_title"}>Create New Section for {courseName} Course</h1>
      <form className={"form"} onSubmit={(event) => "submit(event, router)"}>
        <input
          className={"textInput"}
          type="number"
          name="teacherId"
          placeholder="teacher Id"
        />
        <input type="submit" value={"Enter"} />
      </form>
    </div>
  );
};
export default EditSectionForm;