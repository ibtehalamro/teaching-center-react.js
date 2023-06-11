import axios from "axios";
import { PAYMENT_API_ENDPOINTS } from "../../router/payments/PaymentUrls";
 
export const saveStudentSectionPayment = async (payment) => {
    const response = await axios.post(PAYMENT_API_ENDPOINTS.SAVE_STUDENT_SECTION_PAYMENT.url,payment);
    return response.data;
};

export const viewStudentSectionPaymentsPromise = async (studentId,sectionId) => {
    const response = await axios.get(PAYMENT_API_ENDPOINTS.VIEW_STUDENT_SECTION_PAYMENTS.url(studentId,sectionId));
    return response.data;
};

export const deleteStudentSectionPaymentPromise = async ({paymentId,studentPaymentId}) => {
    const response = await axios.delete(PAYMENT_API_ENDPOINTS.DELETE_STUDENT_SECTION_PAYMENT_BY_PAYMENT_ID.url(paymentId,studentPaymentId));
    return response.data;
};