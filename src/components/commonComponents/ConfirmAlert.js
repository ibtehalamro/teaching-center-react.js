import React from 'react';

const ConfirmAlert = ({ message, onConfirm, onCancel, labels }) => {
    const handleConfirm = () => {
        if (onConfirm) {
            onConfirm();
        }
    };

    const handleCancel = () => {
        if (onCancel) {
            onCancel();
        }
    };

    const showConfirmAlert = () => {
        const result = window.confirm(message);
        if (result) {
            handleConfirm();
        } else {
            handleCancel();
        }
    };

    return (
        <div className="confirm-alert">
      <div className="confirm-alert__message">{message}</div>
      <div className="confirm-alert__buttons">
        <button className="confirm-alert__button" onClick={handleConfirm}>
          {labels?.ok || 'Confirm'}
        </button>
        <button className="confirm-alert__button" onClick={handleCancel}>
          {labels?.cancel || 'Cancel'}
        </button>
      </div>
    </div>
    );
};

export default ConfirmAlert;
