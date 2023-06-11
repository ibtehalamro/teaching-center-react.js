import { API_BASE_URL } from "../../Constants/URLConstants/MainAppUrls"

export const PaymentUrls={
    ROUTER:"payment",
    HOME: "/home",
    NEW_PAYMENT_FORM: "/new",
    PAYMENT_LIST: "/list"
}


export const PAYMENT_API_ENDPOINTS = {
    SAVE_STUDENT_SECTION_PAYMENT: {
        key: "SAVE_STUDENT_SECTION_PAYMENT",
        url: `${API_BASE_URL}/payment/save-payment`
    },
    VIEW_STUDENT_SECTION_PAYMENTS:{
        key:"VIEW_STUDENT_SECTION_PAYMENTS",
        url:(studentId,sectionId)=> `${API_BASE_URL}/payment/view-section-payments/${studentId}/${sectionId}`
    },
    DELETE_STUDENT_SECTION_PAYMENT_BY_PAYMENT_ID:{
        key:"DELETE_STUDENT_SECTION_PAYMENT_BY_PAYMENT_ID",
        url:(paymentId,studentPaymentId)=>`${API_BASE_URL}/payment/student-section/deletePayment?paymentId=${paymentId}&studentPaymentId=${studentPaymentId}`
    }
   
}
