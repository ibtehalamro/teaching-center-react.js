import React, { useState } from 'react';

function useModal() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const toggleModal = () => setShowModal(!showModal);

  const openModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const closeModal = () => {
    setModalContent(null);
    setShowModal(false);
  };

  const Modal = () => {
    return (<>
      {showModal && (
        <div className="modalOverlay">
          <div className="modal">
            {modalContent}
            <button onClick={toggleModal}>X</button>
          </div>
        </div>
      )}
    </>
    );
  };

  return [Modal, openModal, closeModal, toggleModal];
}

export default useModal;
