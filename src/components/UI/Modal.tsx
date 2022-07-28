import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
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
  return (
    <motion.aside
      className={styles['modal-wrapper']}
      initial={{ opacity: 0, y: '-100px' }}
      animate={{ opacity: 1, y: '-15px' }}
    >
      {children}
    </motion.aside>
  );
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
