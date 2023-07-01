import React from 'react';
import { useMutation, useQuery } from 'react-query';
import { PAYMENT_API_ENDPOINTS } from '../../../router/payments/PaymentUrls';
import { deleteStudentSectionPaymentPromise, viewStudentSectionPaymentsPromise } from './../../../promises/payments/PaymentPromises';
import Loader from '../../Layout/Components/Loader';
import { getDateFromTimeStamp } from './../../../utils/DateUtils';
import deleteImage from '../../../assets/delete.jpg';
import { useTranslation } from 'react-i18next';

export default function ViewStudentSectionPayments({ studentId, sectionId, feeTotal }) {
  const { data: sectionPayments, isLoading, refetch } = useQuery(
    [PAYMENT_API_ENDPOINTS.VIEW_STUDENT_SECTION_PAYMENTS.key, studentId, sectionId],
    () => viewStudentSectionPaymentsPromise(studentId, sectionId)
  );
  const { t } = useTranslation();

  const deletePaymentMutation = useMutation(deleteStudentSectionPaymentPromise, {
    onSuccess: () => {
      refetch();
    },
    onError: (error) => {
      // Handle error
      console.error('Error deleting payment:', error);
    },
  });

  const handleDeletePayment = (paymentId, studentPaymentId) => {
    deletePaymentMutation.mutate({ paymentId, studentPaymentId });
  };

  if (isLoading) {
    return <Loader />;
  }

  const paymentsSum = sectionPayments?.data.reduce((sum, payment) => sum + payment.amount, 0);

  return (
    <div className='studentSectionPayments'>
      <p className='page-title'> {t('sectionPayments')}</p>
      <table>
        <thead>
          <tr>
          <th>{t('amountHeader')}</th>
        <th>{t('currencyHeader')}</th>
        <th>{t('createdAtHeader')}</th>
        <th>{t('updatedAtHeader')}</th>
        <th>{t('Delete')}</th>
          </tr>
        </thead>
        <tbody>
          {sectionPayments?.data.map((payment) => (
            <tr key={payment.id}>
              <td>{payment.amount}</td>
              <td>{payment.currency || 'ILS'}</td>
              <td>{getDateFromTimeStamp(payment.createdAt)}</td>
              <td>{getDateFromTimeStamp(payment.updatedAt)}</td>
              <td>
                <button className='card-icon' onClick={() => handleDeletePayment(payment.paymentId, payment.studentPaymentId)}>
                  <img src={deleteImage} alt='Delete' />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='payment-info'>
        <span>{t("Paid")} {paymentsSum} {t("PAIDOF")} {feeTotal}</span>
      </div>
    </div>
  );
}
