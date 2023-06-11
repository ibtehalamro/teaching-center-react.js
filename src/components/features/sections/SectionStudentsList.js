import Link from 'next/link';
import React, { useEffect, useState } from "react";
import { sectionLinks } from '../../Constants/Links/Links';

export const SectionStudentsList = ({sectionId}) => {
 
  const [students, setStudents] = useState(null);
  useEffect(() => {
    let fetched = true;
    const getStudentsList = async () => {
      const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };
      const response = await fetch(
        sectionLinks.studentsRelatedToSection+sectionId,
        requestOptions
      );
      const json = await response.json();

      if (fetched) {
        setStudents(json.data.students);
      }
    };

    getStudentsList();
    return () => (fetched = false);
  }, [students]);


  return  (
    <>
       {students!=null&& students.length==0 && <h3>0 students</h3>}
      {students!=null&& students.map((element) => {
        return (
          <h6 key={element.stu_id}>
            {element.stu_id} -- {element.firstName}  -- {element.lastName}   <Link href={"/payments/new/"+element.ss_id}>Add payment</Link>
          </h6>
        );
      })}
    </>
  );
}
