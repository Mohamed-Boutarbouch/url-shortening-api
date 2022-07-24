import { createPortal } from 'react-dom';

import styles from './Modal.module.css';

interface ModalOverlayProps {
  children: React.ReactNode;
}

interface BackdropProps {
  onClose: React.MouseEventHandler<HTMLDivElement>;
}

interface ModalProps {
  children: React.ReactNode;
  onClose: React.MouseEventHandler<HTMLDivElement>;
}

const Backdrop: React.FC<BackdropProps> = ({ onClose }: BackdropProps) => {
  return <div className={styles.backdrop} onClick={onClose} />;
};

const ModalOverlay: React.FC<ModalOverlayProps> = ({ children }: ModalOverlayProps) => {
  return <aside>{children}</aside>;
};

const portalElement = document.getElementById('modal')!;

const Modal: React.FC<ModalProps> = ({ children, onClose }: ModalProps) => {
  return (
    <>
      {createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </>
  );
};

export default Modal;
