import { API_BASE_URL } from "../../Constants/URLConstants/MainAppUrls";


export const TeacherUrls = {
    ROUTER: "teacher",
    HOME: "/home",
    NEW_TEACHER_FORM: "/new",
    TEACHER_LIST: "/list",
};



export const API_TEACHER_URLS = {
    API_POST_TEACHER_FORM: {
        key: "POST_TEACHER_FORM_DATA",
        url: `${API_BASE_URL}/teacher/`
    },
    API_GET_TEACHERS_LIST: {
        key: "GET_TEACHERS_LIST",
        url: `${API_BASE_URL}/teacher/list`
    },
    API_GET_TEACHER_SECTIONS_LIST: {
        key: "GET_TEACHER_SECTIONS",
        url: (teacherId) => `${API_BASE_URL}/teacher/${teacherId}/sections`
    },
    API_PUT_UPDATE_TEACHER_FORM_DATA: {
        key: "PUT_UPDATE_TEACHER_FORM_DATA",
        url: (teacherId) => `${API_BASE_URL}/teacher/${teacherId}`
    },
    API_GET_TEACHER_BY_ID:{
        key: "GET_TEACHER_DATA_BY_ID",
        url: (teacherId) => `${API_BASE_URL}/teacher/${teacherId}`
    },
    API_SOFT_DELETE_TEACHER:{
        key: "SOFT_DELETE_TEACHER",
        url: (teacherId) => `${API_BASE_URL}/teacher/${teacherId}`
    }

}
