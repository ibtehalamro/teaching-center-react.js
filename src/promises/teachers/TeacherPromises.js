import axios from "axios";
import { API_TEACHER_URLS } from "../../router/teachers/TeacherUrls";
  
export const saveNewTeacherDataPromise = async (teacher) => {
    const response = await axios.post(API_TEACHER_URLS.API_POST_TEACHER_FORM.url, teacher);
    return response.data;
};

export const updateTeacherFormDataPromise = async (teacher) => {
    const response = await axios.put(API_TEACHER_URLS.API_PUT_UPDATE_TEACHER_FORM_DATA.url(teacher.id), teacher);
    return response.data;
};
export const getTeachersListPromise = async () => {
    const response = await axios.get(API_TEACHER_URLS.API_GET_TEACHERS_LIST.url);
    return response.data;
};

export const getTeacherSectionsPromise = async (teacherId) => {
    const response = await axios.get(API_TEACHER_URLS.API_GET_TEACHER_SECTIONS_LIST.url(teacherId));
    return response.data;
};

export const getTeacherDataByTeacherIdPromise = async (teacherId) => {
    const response = await axios.get(API_TEACHER_URLS.API_GET_TEACHER_BY_ID.url(teacherId));
    return response.data;
};

export const softDeleteTeacherByTeacherIdPromise = async (teacherId) => {
    const response = await axios.delete(API_TEACHER_URLS.API_SOFT_DELETE_TEACHER.url(teacherId));
    return response.data;
};