import i18next from 'i18next';
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
                    .required(i18next.t("REQUIRED"))

                    .min(10, i18next.t("MOBILE_VALIDATION"))
            })
        });
    }
}
export default MobileNumberManager;