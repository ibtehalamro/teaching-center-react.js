import React, { useState } from 'react';
 
const AlertPopup = ({ message, type = 'success' }) => {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <div className={`alert-popup ${show ? 'show' : ''} ${type}`}>
      <div className="message"> <button className="close-button" onClick={handleClose}>
        X
      </button>{message}</div>
     
    </div>
  );
};

export default AlertPopup;
{/* <AlertPopup type="success" message="Success message! fdgv bdsbb fn nd" /> */}
