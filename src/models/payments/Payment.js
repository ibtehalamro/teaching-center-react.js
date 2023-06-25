import * as Yup from 'yup';

export class Payment{



    static getValidationSchema() {
        return Yup.object().shape({
            amount: Yup.number().positive("Number must be greater than zero").required().typeError('Please enter a valid number'),
        });
    }
}