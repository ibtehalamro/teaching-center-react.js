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
      "StudentAssignedSections": "Student assigned sections",
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
      "PAIDOF": "of",
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
      "REQUIRED": 'Value is required',
      "MOBILE_VALIDATION": 'Mobile number must be 10 digits',
      "navBarLinks": {
        "students": "Students",
        "courses": "Courses",
        "teachers": "Teachers",
        "home": "Home",
        "addStudent": "Add Student",
        "studentsList": "Students List",
        "newCourse": "New Course",
        "coursesList": "Courses List",
        "newTeacher": "New Teacher",
        "teachersList": "Teachers List"
      },
      "createNewTeacher": "Create New Teacher",
      "createNewCourse": "Create New Course",
      "courseName": "Course Name",
      "type": "Type",
      "enter": "Enter",
      "greaterThanZero": "Number must be greater than zero",
      "sectionTableHeaders": {
        "sectionName": "Section Name",
        "teacherName": "Teacher Name",
        "endDate": "End Date",
        "startDate": "Start Date",
        "endTime": "End Time",
        "startTime": "Start Time",
        "courseName": "Course Name",
        "students": "Students",
        "actions": "Actions"
      },
      "courseHeaders": {
        "courseName": "Course Name",
        "type": "Type",
        "numberOfSections": "# of Sections",
        "sections": "Sections"
      },
      "section":{"newSection":"New Section"},
      "sectionHeaders": {
        "fullName": "Full Name",
        "city": "City",
        "mobileNumber": "Mobile Number",
        "createdAt": "Created At",
        "updatedAt": "Updated At"
      },
      "teacherSections": {
        "title": "Teacher Name: {{teacherName}}",
        "tableHeaders": {
          "sectionName": "Section Name",
          "endDate": "End Date",
          "startDate": "Start Date",
          "endTime": "End Time",
          "startTime": "Start Time"
        }
      },
      "student":{
        "addStudent":"Add student"
      },
      "assignStudentToSection": "Assign Student To Section",
      "discount": "Discount",
      "feeTotal": "Fee Total",
      "submit": "Submit"
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
      "StudentAssignedSections": "ألاقسام المسجل فيها الطالب",
      "StudentName": "اسم الطالب",
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
      "PAIDOF": "من",
      "cityName": "اسم المدينة",
      "mobileNumber": "رقم الجوال",
      "gender": "الجنس",
      "male": "ذكر",
      "female": "أنثى",
      "save": "حفظ",
      "saving": "جاري الحفظ...",
      "createNewStudent": "تسجيل طالب جديد",
      "genderIsRequired": "اختر جنس الطالب",
      "STRING_VALUE": "القيمة يجب ان تكون حروف فقط",
      "ACCEPT_SPACE": "يجب ألا يحتوي الاسم على مسافات في البداية أو النهاية، ويمكن أن يحتوي على مسافات بين الأجزاء.",
      "REQUIRED": 'القيمة مطلوبة',
      "MOBILE_VALIDATION": 'رقم الهاتف يجب ان يحتوي عشر ارقام',
      "navBarLinks": {
        "students": "الطلاب",
        "courses": "الدورات",
        "teachers": "المعلمين",
        "home": "الصفحة الرئيسية",
        "addStudent": "إضافة طالب",
        "studentsList": "قائمة الطلاب",
        "newCourse": "دورة جديدة",
        "coursesList": "قائمة الدورات",
        "newTeacher": "معلم جديد",
        "teachersList": "قائمة المعلمين"
      },
      "createNewTeacher": "تسجيل معلم جديد",
      "createNewCourse": "إنشاء دورة جديدة",
      "courseName": "اسم الدورة",
      "type": "النوع",
      "enter": "إدخال",
      "greaterThanZero": "يجب أن يكون الرقم أكبر من الصفر",
      "sectionTableHeaders": {
        "sectionName": "اسم القسم",
        "teacherName": "اسم المدرس",
        "endDate": "تاريخ الانتهاء",
        "startDate": "تاريخ البدء",
        "endTime": "وقت الانتهاء",
        "startTime": "وقت البدء",
        "courseName": "اسم الدورة",
        "students": "الطلاب",
        "actions": "الإجراءات"
      },
      "courseHeaders": {
        "courseName": "اسم الدورة",
        "type": "النوع",
        "numberOfSections": "عدد الأقسام",
        "sections": "الأقسام"
      },
      "sectionHeaders": {
        "fullName": "الاسم الكامل",
        "city": "المدينة",
        "mobileNumber": "رقم الجوال",
        "createdAt": "تم الإنشاء في",
        "updatedAt": "تم التحديث في"
      }, "teacherSections": {
        "title": "اسم المعلم: {{teacherName}}",
        "tableHeaders": {
          "sectionName": "اسم القسم",
          "endDate": "تاريخ الانتهاء",
          "startDate": "تاريخ البدء",
          "endTime": "وقت الانتهاء",
          "startTime": "وقت البدء"
        }
      },
      "section":{"newSection":"قسم جديد"},
 
    "student":{
      "addStudent":"اضف طالب"
    }, "assignStudentToSection": "تعيين الطالب إلى القسم",
    "discount": "خصم",
    "feeTotal": "مجموع الرسوم",
    "submit": "تقديم"
    }
   
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