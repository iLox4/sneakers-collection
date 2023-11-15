import { ReactElement, useEffect } from "react";
import ReactPortal from "../portal/ReactPortal";

import styles from "./Modal.module.css";

export default function Modal({
  children,
  closeModal,
  isOpen,
}: {
  children: ReactElement | ReactElement[];
  closeModal: () => void;
  isOpen: boolean;
}) {
  useEffect(() => {
    document.body.style.position = "fixed";
    return (): void => {
      document.body.style.position = "relative";
    };
  }, [isOpen]);

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <>
        <div className={styles.background} onClick={closeModal}></div>
        <div className={styles.modal}>{children}</div>
      </>
    </ReactPortal>
  );
}
