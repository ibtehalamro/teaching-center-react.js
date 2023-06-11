import axios from "axios";
import { API_COURSE_URLS } from "../../router/courses/CourseUrls";
 
export const getCourseTypesPromise = async ( ) => {
    const response = await axios.get(API_COURSE_URLS.API_GET_COURSES_TYPES.url);
    return response.data;
};

export const getCoursesListPromise = async ( ) => {
    const response = await axios.get(API_COURSE_URLS.API_GET_COURSES_LIST.url);
    return response.data;
};

export const saveNewCoursePromise = async (course) => {
    const response = await axios.post(API_COURSE_URLS.API_POST_NEW_COURSE_DATA.url,course);
    return response.data;
};

export const getCourseSectionsListPromise = async (courseId ) => {
    const response = await axios.get(API_COURSE_URLS.API_GET_COURSE_SECTIONS_LIST.url.replace('#courseId#',courseId));
    return response.data;
};