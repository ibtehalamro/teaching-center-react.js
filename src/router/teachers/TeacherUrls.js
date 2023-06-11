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
    }

}
