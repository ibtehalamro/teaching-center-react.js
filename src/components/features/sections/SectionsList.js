 import React from 'react'
 import {  Link, useParams } from "react-router-dom";

  const SectionsList = () => {
    


  return  ( 
    <>
    sections list  
      {/* {s.map((element) => {
        return (
          <h6>
            {element.id} -- {element.courseId}  <Link href={"/sections/studentsList/"+element.id}>Students</Link>
          </h6>
        );
      })} */}
    </>
  );
}

export default SectionsList;