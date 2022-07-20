import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  children: React.ReactNode;
}

const Modal: React.FC<Props> = ({ children }: Props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted ? createPortal(children, document.querySelector('#my-portal')!) : null;

  // return mounted
  //   ? (createPortal(
  //       children,
  //       document.querySelector("#my-portal")
  //     ) as HTMLElement)
  //   : null;
};

export default Modal;

// import styles from "../../styles/Modal.module.css";

// interface Props {
//   children: React.ReactNode;
// }

// const Modal: React.FC<Props> = ({ children }: Props) => {
//   return (
//     <section className={styles.modal}>
//       {children}
//     </section>
//   );
// };

// export default Modal;
