import i18next from "i18next";

import { initReactI18next } from "react-i18next";

// "Inline" English and Arabic translations.

// We can localize to any language and any number of languages.

const resources = {

  en: {

    translation: {

      "First_Name": "First Name",
      "Parent_Name": "Parent Name",
      "Grandparent_Name": "Grandparent Name",
      "Family_Name": "Family Name",
      "Sections": "Sections",
      "Modify": "Modify",
      "Delete": "Delete",
      "sectionName": "Section Name",
      "teacherName": "Teacher Name",
      "addPayment": "Add payment",
      "viewPayments": "View payments",
      "StudentAssignedSections":"Student assigned sections",
      "StudentName": "Student Name",
      "assignToSection": "Assign to section",
      "formContainerTitle": "Create New Payment",
      "amountLabel": "Amount",
      "addPaymentButton": "Add Payment",
      "amountHeader": "Amount",
    "currencyHeader": "Currency",
    "createdAtHeader": "Created At",
    "updatedAtHeader": "Updated At",
    "sectionPayments": "Section payments",
    "Paid": "Paid",
    "PAIDOF":"of",
    "createNewStudent": "Create New Student",
 
    "cityName": "City Name",
    "mobileNumber": "Mobile Number",
    "gender": "Gender",
    "male": "Male",
    "female": "Female",
    "save": "Save",
    "saving": "Saving...",
    "genderIsRequired": "Gender is required",
    "STRING_VALUE": "name must contain only letters.",
    "ACCEPT_SPACE": 'Name must not contain leading or trailing spaces, and can include spaces between parts.',
    "REQUIRED":'Value is required',
    "MOBILE_VALIDATION": 'Mobile number must be 10 digits',
    },

  },

  ar: {

    translation: {

      "First_Name": "الاسم الأول",
      "Parent_Name": "اسم الأب",
      "Grandparent_Name": "اسم الجد",
      "Family_Name": "اسم العائلة",
      "Sections": "الأقسام",
      "Modify": "تعديل",
      "Delete": "حذف",
      "sectionName": "اسم القسم",
      "teacherName": "اسم المعلم",
      "addPayment": "إضافة دفعة",
      "viewPayments": "عرض المدفوعات",
      "StudentAssignedSections":"ألاقسام المسجل فيها الطالب",
      "StudentName":"اسم الطالب",
      "assignToSection": "تعيين إلى  قسم",
      "formContainerTitle": "إنشاء دفعة جديدة",
      "amountLabel": "المبلغ",
      "addPaymentButton": "إضافة دفعة",
      "amountHeader": "المبلغ",
      "currencyHeader": "العملة",
      "createdAtHeader": "تم الإنشاء في",
      "updatedAtHeader": "تم التحديث في",
      "sectionPayments": "مدفوعات القسم",
      "Paid": "تم دفع",
      "PAIDOF":"من",
      "cityName": "اسم المدينة",
      "mobileNumber": "رقم الجوال",
      "gender": "الجنس",
      "male": "ذكر",
      "female": "أنثى",
      "save": "حفظ",
      "saving": "جاري الحفظ...",
      "createNewStudent": "تسجيل طالب جديد",
      "genderIsRequired": "اختر جنس الطالب",
      "STRING_VALUE":"القيمة يجب ان تكون حروف فقط",
      "ACCEPT_SPACE":"يجب ألا يحتوي الاسم على مسافات في البداية أو النهاية، ويمكن أن يحتوي على مسافات بين الأجزاء.",
      "REQUIRED":'القيمة مطلوبة',
      "MOBILE_VALIDATION":'رقم الهاتف يجب ان يحتوي عشر ارقام',

    },

  },

};

i18next

  .use(initReactI18next)

  .init({

    resources,

    lng: "ar",

    interpolation: {

      escapeValue: false,

    },

  });

export default i18next;