import * as Yup from 'yup';
import { ENGLISH_ARABIC_ONLY_LETTERS_REGEX } from './../../Constants/URLConstants/RegexConstants';

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
          .required('First name is required')
          .matches(ENGLISH_ARABIC_ONLY_LETTERS_REGEX, 'First name must contain only letters.')
        .matches(/^\S+(?: \S+)*$/, 'Name must not contain leading or trailing spaces, and can include spaces between parts.')
          .typeError('First name must be a string'),
        parentName: Yup.string()
          .required('Parent name is required')
          .matches(ENGLISH_ARABIC_ONLY_LETTERS_REGEX, 'Parent name must contain only letters.')
        .matches(/^\S+(?: \S+)*$/, 'Name must not contain leading or trailing spaces, and can include spaces between parts.')
          .typeError('Parent name must be a string'),
        grandParentName: Yup.string()
          .required('Grandparent name is required')
          .matches(ENGLISH_ARABIC_ONLY_LETTERS_REGEX, 'Grand parent name must contain only letters.')
        .matches(/^\S+(?: \S+)*$/, 'Name must not contain leading or trailing spaces, and can include spaces between parts.')
          .typeError('Grand parent name must be a string'),
        familyName: Yup.string()
          .required('Family name is required')
          .matches(ENGLISH_ARABIC_ONLY_LETTERS_REGEX, 'Family name must contain only letters.')
        .matches(/^\S+(?: \S+)*$/, 'Name must not contain leading or trailing spaces, and can include spaces between parts.')
          .typeError('Family name must be a string')
      })
    });
  }
}
export default FullNameManager;