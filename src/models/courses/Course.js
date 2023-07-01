import i18next from 'i18next';
import * as Yup from 'yup';
import { ENGLISH_ARABIC_ONLY_LETTERS_REGEX } from '../../Constants/URLConstants/RegexConstants';

class Course {
    id = 0;
    name;
    type;
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    setId(id) { this.id = id; }
    setName(name) { this.name = name; }
    setType(type) { this.type = type; }

    getId() { return this.id; }
    getName() { return this.name; }
    getType() { return this.type; }


    static getValidationSchema() {
        return Yup.object().shape({
            name: Yup.string()
                .required(i18next.t("REQUIRED"))
                .matches(ENGLISH_ARABIC_ONLY_LETTERS_REGEX,i18next.t("STRING_VALUE"))
                .matches(/^\S+(?: \S+)*$/, i18next.t("ACCEPT_SPACE"))
                .typeError('Course name must be a string'),
            type: Yup.string()
                .required(i18next.t("REQUIRED"))
                .matches(ENGLISH_ARABIC_ONLY_LETTERS_REGEX,i18next.t("STRING_VALUE"))
                .typeError('Major name must be a string'),
        });
    }
}
export default Course;
