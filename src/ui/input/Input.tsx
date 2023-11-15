import { ReactElement, ChangeEvent } from "react";

import styles from "./Input.module.css";

export default function Input({
  isIcon,
  Icon,
  handleInput,
  placeholder,
  label,
  type,
  myValue,
  isAlert,
}: {
  isIcon: boolean;
  Icon: () => ReactElement;
  handleInput: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  label: string;
  type: string;
  myValue: string | number | undefined;
  isAlert: boolean;
}) {
  let content;
  let inputStyles = `${styles.input}`;

  if (isAlert && (!myValue || myValue === 0)) {
    inputStyles += ` ${styles.alert}`;
  }

  if (isIcon) {
    inputStyles += ` ${styles.inputIcon}`;
    content = (
      <div className={styles.inputWrapper}>
        <Icon />
        <input
          type={type}
          className={inputStyles}
          onChange={handleInput}
          placeholder={placeholder}
          value={myValue}
        />
      </div>
    );
  } else {
    content = (
      <>
        <input
          type={type}
          className={inputStyles}
          onChange={handleInput}
          placeholder={placeholder}
          value={myValue}
        />
        {isAlert && (!myValue || myValue === 0) && (
          <label className={styles.alertMessage}>
            This field cannot be empty
          </label>
        )}
      </>
    );
  }

  if (label) {
    content = (
      <>
        <label className={styles.inputLabel}>{label}</label>
        {content}
      </>
    );
  }

  return content;
}
