import i18next from 'i18next';
import * as Yup from 'yup';

export class Payment{



    static getValidationSchema() {
        return Yup.object().shape({
            amount: Yup.number().positive(i18next.t("greaterThanZero")).required().typeError('Please enter a valid number'),
        });
    }
}