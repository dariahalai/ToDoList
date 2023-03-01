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
        <Button onClick={closeModal}>Close</Button>
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
  min-width: 200px;
  min-height: 80px;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.5);
  z-index: 15;
`;
const Button = styled.button`
  align-items: center;
  width: 70px;
  height: 30px;
  color: white;
  font-weight: 500;
  font-size: 16px;
  border-radius: 8px;
  margin-top: 10px;
  background-color: #003d98;
  cursor: pointer;
`;
