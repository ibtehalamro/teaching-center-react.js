import React from "react";
import { saveStudentSectionPayment } from "../../../promises/payments/PaymentPromises";
import FormWithValidation from "../../../HigherOrderComponents/FormWithValidation";
import { Payment } from './../../../models/payments/Payment';
import { useMutation, useQueryClient } from "react-query";
import Input from "../../Form/Input";
import { STUDENT_API_ENDPOINTS } from "../../../router/students/StudentUrls";
import { PAYMENT_API_ENDPOINTS } from "../../../router/payments/PaymentUrls";

const NewPaymentForm = ({ methods, studentId, sectionId,closeModal,refetch }) => {
  const { handleSubmit, control, reset } = methods;
  const queryClient = useQueryClient();

  const { mutate, data: updatedStudent } = useMutation(saveStudentSectionPayment, {
    onSuccess: (data) => {
      refetch();
      queryClient.invalidateQueries([[STUDENT_API_ENDPOINTS.GET_STUDENT_ASSIGNED_SECTIONS.key, studentId],[
        PAYMENT_API_ENDPOINTS.VIEW_STUDENT_SECTION_PAYMENTS.key,
        studentId,
        sectionId
      ]]);

      closeModal();
    },
    onError: (error) => {
      alert("Error submitting payment" + error);
    }
  });

  const submitPaymentFrom = (payment) => {
    payment.sectionId = sectionId;
    payment.studentId = studentId;
    mutate(payment)
  }
  return (
    <div className={"form_container payment-form"}>
      <h1 className={"form_container_title"}>Create New Payment</h1>
      <form className={"form"} onSubmit={handleSubmit(submitPaymentFrom)}>

        <Input name="amount" label="Amount" control={control} type="number" />

        <input type="submit" value={"add payment"} />
      </form>
    </div>
  );
};
export default FormWithValidation(Payment.getValidationSchema())(NewPaymentForm);
