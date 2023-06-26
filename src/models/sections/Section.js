import * as Yup from 'yup';
import { ENGLISH_ARABIC_ONLY_LETTERS_REGEX } from '../../Constants/URLConstants/RegexConstants';
import i18next from 'i18next';

export class Section {



    static getValidationSchema() {
        return Yup.object().shape({
            sectionName: Yup.string()
            .required(i18next.t("REQUIRED"))
            .matches(ENGLISH_ARABIC_ONLY_LETTERS_REGEX, i18next.t("STRING_VALUE")).typeError(i18next.t("STRING_VALUE")),
            teacherId: Yup.string()
                .required(i18next.t("REQUIRED")),
            date: Yup.object().shape({
                startDate: Yup.date().typeError("must be date").required(i18next.t("REQUIRED")),
                endDate: Yup.date().typeError("must be date").required(i18next.t("REQUIRED")),
            }),
            time: Yup.object().shape({
                startTime: Yup.string().required(i18next.t("REQUIRED")),
                endTime: Yup.string().required(i18next.t("REQUIRED")),
            })
        });
    }
}                               