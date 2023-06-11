import React from "react";
import { saveStudentSectionPayment } from "../../../promises/payments/PaymentPromises";
import FormWithValidation from "../../../HigherOrderComponents/FormWithValidation";
import { Payment } from './../../../models/payments/Payment';
import { useMutation } from "react-query";
import Input from "../../Form/Input";
 
 const NewPaymentForm = ({methods,studentId,sectionId}) => {
  const { handleSubmit, control, reset } = methods;

  const { mutate, data: updatedStudent } = useMutation(saveStudentSectionPayment, {
    onSuccess: (data) => {
    //   handleSubmitResponse(data.data);
    },
    onError: (error) => {
      alert("Error submitting payment" + error);
    }
  });

  const submitPaymentFrom =(payment)=>{
    payment.sectionId=sectionId;
    payment.studentId=studentId;
    console.log('payment', payment)
    mutate(payment)
  }
  return (
    <div className={"form_container   payment-form"}>
      <h1 className={"form_container_title"}>Create New Payment</h1>
      <form className={"form"} onSubmit={handleSubmit(submitPaymentFrom)}>

      <Input name="amount" label="Amount" control={control} type="number" />
       
      <input type="submit" value={"add payment"} />
      </form>
    </div>
  );
};
export default FormWithValidation(Payment.getValidationSchema())(NewPaymentForm);
