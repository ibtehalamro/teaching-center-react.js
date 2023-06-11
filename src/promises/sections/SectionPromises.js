import axios from "axios";
import { API_SECTIONS_URL } from "../../router/sections/SectionUrls";
 
export const saveNewSectionDataPromise = async (section) => {
    const response = await axios.post(API_SECTIONS_URL.API_POST_SECTION_FORM_DATA.url, section);
    return response.data;
};

export const getSectionFormDataPromise = async () => {
    const response = await axios.get(API_SECTIONS_URL.API_GET_SECTION_FORM_DATA);
    return response.data;
};

export const getAllStudentsBySectionIdPromise = async (sectionId) => {
    const response = await axios.get(API_SECTIONS_URL.API_GET_ALL_STUDENTS_BY_SECTION_ID.url(sectionId));     
    return response.data;
};

export const singleStudentAssignmentToSectionPromise = async (data) => {
    const response = await axios.post(API_SECTIONS_URL.API_ASSIGN_STUDENTS_TO_SECTION_BY_SECTION_ID.url(data.sectionId), data);
    return response.data;
};

export const getSectionStudentsPromise = async (sectionId) => {
    const response = await axios.get(API_SECTIONS_URL.API_GET_SECTION_STUDENTS_BY_SECTION_ID.url(sectionId));
    return response.data;
};
