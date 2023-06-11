import * as Yup from 'yup';
import { ENGLISH_ARABIC_ONLY_LETTERS_REGEX } from '../../Constants/URLConstants/RegexConstants';

export class Section {



    static getValidationSchema() {
        return Yup.object().shape({
            sectionName: Yup.string()
            .required('Please select a section name to proceed')
            .matches(ENGLISH_ARABIC_ONLY_LETTERS_REGEX, 'Section name must contain only letters.').typeError("must be string"),
            teacherId: Yup.string()
                .required('Please select a teacher to proceed'),
            date: Yup.object().shape({
                startDate: Yup.date().typeError("must be date").required('Start Date is required'),
                endDate: Yup.date().typeError("must be date").required('End Date is required'),
            }),
            time: Yup.object().shape({
                startTime: Yup.string().required('Start time is required'),
                endTime: Yup.string().required('End time is required'),
            })
        });
    }
}                               