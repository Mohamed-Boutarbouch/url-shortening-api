import { createPortal } from 'react-dom';

interface Props {
  children: React.ReactNode;
}

const ModalOverlay: React.FC<Props> = ({ children }: Props) => {
  return <section>{children}</section>;
};

const portalElement = document.getElementById('modal');

const Modal: React.FC<Props> = ({ children }: Props) => {
  return createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement!);
};

export default Modal;

// import React, { useRef, useEffect } from "react";

// /**
//  * Hook that alerts clicks outside of the passed ref
//  */
// function useOutsideAlerter(ref) {
//   useEffect(() => {
//     /**
//      * Alert if clicked on outside of element
//      */
//     function handleClickOutside(event) {
//       if (ref.current && !ref.current.contains(event.target)) {
//         alert("You clicked outside of me!");
//       }
//     }
//     // Bind the event listener
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       // Unbind the event listener on clean up
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [ref]);
// }

// /**
//  * Component that alerts if you click outside of it
//  */
// export default function OutsideAlerter(props) {
//   const wrapperRef = useRef(null);
//   useOutsideAlerter(wrapperRef);

//   return <div ref={wrapperRef}>{props.children}</div>;
// }
