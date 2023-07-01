import React, { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { STUDENT_API_ENDPOINTS } from '../../../router/students/StudentUrls';
import { singleSectionAssignmentToStudentPromise, getAllSectionsWithStudentStatusPromise } from '../../../promises/students/StudentPromises';
import Loader from '../../Layout/Components/Loader';
import RadioButton from '../../Form/RadioButton';
import Input from '../../Form/Input';
import FormWithValidation from '../../../HigherOrderComponents/FormWithValidation';
import Student from '../../../models/students/Student';
import { useTranslation } from 'react-i18next';


const SingleSectionAssignmentToStudentForm = ({ methods, studentId, closeModal }) => {
  const { handleSubmit, control } = methods;
  const [discountValue, setDiscountValue] = useState(0);
  const [feeTotal, setFeeTotal] = useState(0);
  const { t } = useTranslation();

  const handleDiscountChange = (event) => {
    setDiscountValue(event.target.value);
  };

  const { mutate } = useMutation(singleSectionAssignmentToStudentPromise, {
    onSuccess: () => {
      closeModal();
    },
    onError: (error) => {
      alert("Error submitting student" + error);
    }
  });

  const { data: sections, isLoading } = useQuery(STUDENT_API_ENDPOINTS.GET_ALL_SECTIONS_WITH_STUDENT_STATUS.key, () => getAllSectionsWithStudentStatusPromise(studentId))

  if (isLoading) {
    return <Loader />
  }

  const submitAssignSingleSectionsToStudentForm = (data) => {
    data.discount = discountValue;
    mutate({ studentId, ...data });
  }

  return (
    <div className='singleSectionAssignmentToStudentForm form_container '>
      <h1 className='form_container_title'>{t("assignStudentToSection")}</h1>
      <form className={"form"} onSubmit={handleSubmit(submitAssignSingleSectionsToStudentForm)}>

        <div className='sections'>
          {sections?.data.map(section =>

            <RadioButton key={section.id}
              label={section.sectionName || "-"}
              name={"selectedSection"}
              control={control}
              value={section.id}
              disabled={section.assigned ? true : false}

            // onChange={()=>    setFeeTotal(section.feeTotal)                }
            />
          )}
        </div>


        <b>{t("feeTotal")} </b>{feeTotal - (feeTotal * (discountValue / 100))}
        <Input name="discount" label={t("discount")} control={control} type="number" onChange={handleDiscountChange} value={discountValue} min={0} max={100} />

        <input type="submit" />
      </form>

    </div>
  )
}

export default FormWithValidation(Student.getAssignStudentToMultipleSectionsValidation())(SingleSectionAssignmentToStudentForm)
