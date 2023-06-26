import * as Yup from 'yup';
import { ENGLISH_ARABIC_ONLY_LETTERS_REGEX } from './../../Constants/URLConstants/RegexConstants';
import i18next from 'i18next';

class FullNameManager {
  constructor(firstName, parentName, grandParentName, familyName) {
    this.firstName = firstName;
    this.parentName = parentName;
    this.grandParentName = grandParentName;
    this.familyName = familyName;
  }

  setFirstName(firstName) {
    this.firstName = firstName;
  }

  setParentName(parentName) {
    this.parentName = parentName;
  }

  setGrandParentName(grandParentName) {
    this.grandParentName = grandParentName;
  }

  setFamilyName(familyName) {
    this.familyName = familyName;
  }

  getFirstName() {
    return this.firstName;
  }

  getParentName() {
    return this.parentName;
  }

  getGrandParentName() {
    return this.grandParentName;
  }

  getFamilyName() {
    return this.familyName;
  }

  getFullName() {
    return `${this.firstName} ${this.parentName} ${this.grandParentName} ${this.familyName}`;
  }

  static getFullNameFromName(name) {
    return `${name.firstName} ${name.parentName} ${name.grandParentName} ${name.familyName}`;
  }

  static getValidationSchema() {
    return Yup.object().shape({
      name: Yup.object().shape({
        firstName: Yup.string()
        .required(i18next.t("REQUIRED"))
        .matches(ENGLISH_ARABIC_ONLY_LETTERS_REGEX,i18next.t("STRING_VALUE"))
        .matches(/^\S+(?: \S+)*$/, i18next.t("ACCEPT_SPACE"))
          .typeError('First name must be a string'),
        parentName: Yup.string()
        .required(i18next.t("REQUIRED"))
        .matches(ENGLISH_ARABIC_ONLY_LETTERS_REGEX,i18next.t("STRING_VALUE"))
        .matches(/^\S+(?: \S+)*$/, i18next.t("ACCEPT_SPACE"))
          .typeError('Parent name must be a string'),
        grandParentName: Yup.string()
          .required(i18next.t("REQUIRED"))
          .matches(ENGLISH_ARABIC_ONLY_LETTERS_REGEX, i18next.t("STRING_VALUE"))
        .matches(/^\S+(?: \S+)*$/, i18next.t("ACCEPT_SPACE"))
          .typeError(i18next.t("STRING_VALUE")),
        familyName: Yup.string()
        .required(i18next.t("REQUIRED"))
        .matches(ENGLISH_ARABIC_ONLY_LETTERS_REGEX, i18next.t("STRING_VALUE"))
        .matches(/^\S+(?: \S+)*$/,i18next.t("ACCEPT_SPACE"))
          .typeError('Family name must be a string')
      })
    });
  }
}
export default FullNameManager;