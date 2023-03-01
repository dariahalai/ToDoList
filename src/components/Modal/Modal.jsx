import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import styled from 'styled-components';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ closeModal, children }) => {
  useEffect(() => {
    window.addEventListener('keydown', closeModal);
    return () => window.removeEventListener('keydown', closeModal);
  }, [closeModal]);

  const handleBackdropClick = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      closeModal();
    }
  };

  return createPortal(
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalWindow>
        {children}
        <button onClick={closeModal}>Close</button>
      </ModalWindow>
    </ModalBackdrop>,
    modalRoot
  );
};

export default Modal;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;
const ModalWindow = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  width: 30%;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.5);
  z-index: 15;
`;
