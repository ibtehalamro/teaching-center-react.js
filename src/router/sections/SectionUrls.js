import { API_BASE_URL } from "../../Constants/URLConstants/MainAppUrls";

 
export const SectionUrls = {
    ROUTER: "section",
    HOME: "/home",
    NEW_SECTION_FORM: "/new",
    SECTION_LIST: "/list",
};

export const API_SECTIONS_URL = {
    API_SECTIONS_LIST: {
        key: "GET_SECTIONS_LIST",
        url: `${API_BASE_URL}/section/list`
    },
    API_POST_SECTION_FORM_DATA: {
        key: "POST_SECTION_FORM_DATA",
        url: `${API_BASE_URL}/section/`
    },
    API_GET_SECTION_FORM_DATA: {
        key: "GET_SECTION_FORM_DATA",
        url: `${API_BASE_URL}/section/form-data`
        },
    API_GET_ALL_STUDENTS_BY_SECTION_ID: {
        key: "GET_STUDENTS_BY_SECTION_ID",
        url:(sectionId)=> `${API_BASE_URL}/section/${sectionId}/all-students`
    },
    API_ASSIGN_STUDENTS_TO_SECTION_BY_SECTION_ID: {
        key: "ASSIGN_STUDENTS_TO_SECTION_BY_SECTION_ID",
        url:(sectionId)=> `${API_BASE_URL}/section/${sectionId}/assign-students`
    },
    API_GET_SECTION_STUDENTS_BY_SECTION_ID: {
        key: "GET_SECTION_STUDENTS_BY_SECTION_ID",
        url:(sectionId)=> `${API_BASE_URL}/section/${sectionId}/section-students`
    },
}