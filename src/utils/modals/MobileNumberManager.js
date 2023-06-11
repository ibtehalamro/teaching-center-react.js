import * as Yup from 'yup';
class MobileNumberManager {
    constructor(number1) {
        this.number1 = number1;
    }

    setNumber1(number) {
        this.number1 = number;
    }

    getNumber1() {
        return this.number1;
    }

    static getValidationSchema() {
        return Yup.object().shape({
            mobileNumber: Yup.object().shape({
                number1: Yup.string()
                    .min(10, 'Mobile number must be 10 digits')
                    .required('Mobile number is required')
            })
        });
    }
}
export default MobileNumberManager;