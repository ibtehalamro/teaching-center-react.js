
import * as Yup from 'yup';
import FullNameManager from '../../utils/modals/FullNameManager';
import AddressManager from '../../utils/modals/AddressManager';
import MobileNumberManager from '../../utils/modals/MobileNumberManager';
import i18next from 'i18next';

class Student {
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


   static getStudentValidation(){
        return Yup.object().shape({
            gender: Yup.string()
             .required(i18next.t("REQUIRED"))
        });
    }

    static getValidationSchema() {
        return FullNameManager.getValidationSchema()
        .concat(AddressManager.getValidationSchema())
        .concat(MobileNumberManager.getValidationSchema())
        .concat(Student.getStudentValidation());
    }

  
    static getAssignMultipleStudentsToSectionValidation(){
        return Yup.object().shape({
        }); 
    }

    static getAssignStudentToMultipleSectionsValidation(){
        return Yup.object().shape({
        }); 
    }
}

export default Student;