import * as Yup from 'yup';
import FullNameManager from '../../utils/modals/FullNameManager';
import AddressManager from '../../utils/modals/AddressManager';
import MobileNumberManager from '../../utils/modals/MobileNumberManager';
class Teacher {
    constructor(id, fullNameManager, addressManager, mobileNumberManager) {
        this.id = id;
        this.fullNameManager = fullNameManager;
        this.addressManager = addressManager;
        this.mobileNumberManager = mobileNumberManager;
    }

    setId(id) {
        this.id = id;
    }

    setFullNameManager(fullNameManager) {
        this.fullNameManager = fullNameManager;
    }

    setAddressManager(addressManager) {
        this.addressManager = addressManager;
    }

    setMobileNumberManager(mobileNumberManager) {
        this.mobileNumberManager = mobileNumberManager;
    }

    getId() {
        return this.id;
    }

    getFullNameManager() {
        return this.fullNameManager;
    }

    getAddressManager() {
        return this.addressManager;
    }

    getMobileNumberManager() {
        return this.mobileNumberManager;
    }

    static getInitialState() {
        return {
            id: null,
            fullNameManager: "",
            addressManager: "",
            mobileNumberManager: ""
        };
    }


    static getTeacherValidation(){
        return Yup.object().shape({
            gender: Yup.string()
             .required('Gender is required')
        });
    }

    static getValidationSchema() {
        return FullNameManager.getValidationSchema()
        .concat(AddressManager.getValidationSchema())
        .concat(MobileNumberManager.getValidationSchema())
        .concat(Teacher.getTeacherValidation());
    }
}

export default Teacher;