import { API_BASE_URL } from "../../Constants/URLConstants/MainAppUrls"

export const studentUrls = {
    ROUTER: "student",
    HOME: "",
    NEW_STUDENT_FORM: "new",
    STUDENTS_LIST: "stu-list",
    STUDENT_ASSIGNED_SECTIONS:":studentId/sections"
}


export const STUDENT_API_ENDPOINTS = {
    STUDENTS_LIST: {
        key: "GET_STUDENTS_LIST",
        url: `${API_BASE_URL}/student/list`
    },
    API_POST_STUDENT_FORM: `${API_BASE_URL}/student/`,
    API_GET_STUDENT_BY_ID: {
        key: "GET_STUDENT_DATA_BY_ID",
        url:  (studentId) => `${API_BASE_URL}/student/${studentId}`
    },
    API_UPDATE_STUDENT_BY_ID: (studentId) => `${API_BASE_URL}/student/${studentId}`,
    GET_STUDENT_ASSIGNED_SECTIONS:{key:"GET_STUDENT_ASSIGNED_SECTIONS",   
         url:  (studentId) => `${API_BASE_URL}/student/${studentId}/sections`
        
} ,
GET_ALL_SECTIONS_WITH_STUDENT_STATUS:{
            key:'GET_ALL_SECTIONS_WITH_STUDENT_STATUS',
            url:(studentId) => `${API_BASE_URL}/student/${studentId}/all-sections-with-status`,
},
POST_MULTIPLE_SECTIONS_TO_STUDENT:{
    key:'POST_MULTIPLE_SECTIONS_TO_STUDENT',
    url:(studentId) => `${API_BASE_URL}/student/${studentId}/assign-sections-to-student`,
}
}

