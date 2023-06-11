import { API_BASE_URL } from "../../Constants/URLConstants/MainAppUrls"

 
export const CourseUrls={
    ROUTER:"course",
    HOME: "",
    NEW_COURSE_FORM: "new",
    COURSE_LIST: "courses-list",
    COURSE_SECTIONS:':courseId/sections'
}

export const API_COURSE_URLS = {
    API_GET_COURSES_TYPES : {url:`${API_BASE_URL}/course/courseTypes`, key:"getCoursesTypes"},
    API_GET_COURSES_LIST : {url:`${API_BASE_URL}/course/list`, key:"getCoursesList"},
    API_POST_NEW_COURSE_DATA:{url:`${API_BASE_URL}/course/`, key:"postNewCourse"},
    API_GET_COURSE_SECTIONS_LIST: {
          url: `${API_BASE_URL}/course/#courseId#/sections`,
          key: "getCourseSectionsList"
    
      },
      }

