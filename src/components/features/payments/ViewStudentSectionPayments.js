import React from 'react'
import { useMutation, useQuery } from 'react-query'
import { PAYMENT_API_ENDPOINTS } from '../../../router/payments/PaymentUrls';
import { deleteStudentSectionPaymentPromise, viewStudentSectionPaymentsPromise } from './../../../promises/payments/PaymentPromises';
import Loader from '../../Layout/Components/Loader';
import { getDateFromTimeStamp } from './../../../utils/DateUtils';
import deleteImage from '../../../assets/delete.jpg'


export default function ViewStudentSectionPayments({ studentId, sectionId }) {
  const { data: sectionPayments, isLoading, refetch } = useQuery([PAYMENT_API_ENDPOINTS.VIEW_STUDENT_SECTION_PAYMENTS.key, studentId, sectionId], () => viewStudentSectionPaymentsPromise(studentId, sectionId))
  const deletePaymentMutation = useMutation( deleteStudentSectionPaymentPromise, {
    onSuccess: () => {
      refetch();
    },
    onError: (error) => {
      // Handle error
      console.error('Error deleting payment:', error);
    },
  });

  const handleDeletePayment = (paymentId,studentPaymentId) => {
    deletePaymentMutation.mutate({paymentId,studentPaymentId});
  };
  if (isLoading) {
    return <Loader />
  }
  return (
    <div className='studentSectionPayments' >
      <p className='page-title'>Section payments </p>
      <table>
        <thead>
          <tr>
            <th>Amount</th>
            <th>Currency</th>
            <th>Created At</th>
            <th>Updated At</th>
            <th>حذف</th>
          </tr>
        </thead>
        <tbody>
          {sectionPayments?.data.map(payment => (
            <tr key={payment.id}>
              <td>{payment.amount}</td>
              <td>{payment.currency || "ILS"}</td>
              <td>{getDateFromTimeStamp(payment.createdAt)}</td>
              <td>{getDateFromTimeStamp(payment.updatedAt)}</td>
              <td><button className="card-icon" onClick={() => handleDeletePayment(payment.paymentId,payment.studentPaymentId)}>         
                     <img src={deleteImage} alt="Edit"  />
</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
