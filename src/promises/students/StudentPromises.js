import axios from "axios";
import { STUDENT_API_ENDPOINTS } from "../../router/students/StudentUrls";
 
export const saveNewStudentDataPromise = async (student) => {
    const response = await axios.post(STUDENT_API_ENDPOINTS.API_POST_STUDENT_FORM, student);
    return response.data;
};

export const updateStudentDataPromise = async ( student) => {
    const response = await axios.put(STUDENT_API_ENDPOINTS.API_UPDATE_STUDENT_BY_ID(student.id), student);
    return response;
};

export const getStudentDataByIdPromise = async ( studentId) => {
    const response = await axios.get(STUDENT_API_ENDPOINTS.API_GET_STUDENT_BY_ID.url(studentId));
    return response.data;
};

export const getStudentsListPromise = async () => {
    const response = await axios.get(STUDENT_API_ENDPOINTS.STUDENTS_LIST.url);
    return response.data;
};

export const getStudentAssignedSectionsPromise = async (studentId) => {
    const response = await axios.get(STUDENT_API_ENDPOINTS.GET_STUDENT_ASSIGNED_SECTIONS.url(studentId));
    return response.data;
};


export const getAllSectionsWithStudentStatusPromise = async (studentId) => {
    const response = await axios.get(STUDENT_API_ENDPOINTS.GET_ALL_SECTIONS_WITH_STUDENT_STATUS.url(studentId));
    return response.data;
};

export const singleSectionAssignmentToStudentPromise = async (data) => {
    const response = await axios.post(STUDENT_API_ENDPOINTS.POST_MULTIPLE_SECTIONS_TO_STUDENT.url(data.studentId),data);
    return response.data;
};