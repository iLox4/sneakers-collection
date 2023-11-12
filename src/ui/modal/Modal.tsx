import { ReactElement } from "react";
import ReactPortal from "../portal/ReactPortal";

import styles from "./Modal.module.css";

export default function Modal({
  children,
  closeModal,
}: {
  children: ReactElement | ReactElement[];
  closeModal: () => void;
}) {
  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <>
        <div className={styles.background} onClick={closeModal}></div>
        <div className={styles.modal}>{children}</div>
      </>
    </ReactPortal>
  );
}
