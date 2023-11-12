import { MouseEventHandler, ReactElement } from "react";

import styles from "./Input.module.css";

export default function Input({
  isIcon,
  Icon,
  handleInput,
  label,
}: {
  isIcon: boolean;
  Icon: () => ReactElement;
  handleInput: () => void;
  label: string;
}) {
  let content;

  if (isIcon) {
    content = (
      <div className={styles.inputWrapper}>
        <Icon />
        <input
          className={`${styles.input} ${styles.inputIcon}`}
          onChange={handleInput}
          placeholder={label}
        />
      </div>
    );
  } else {
    content = (
      <input
        className={styles.input}
        onChange={handleInput}
        placeholder={label}
      />
    );
  }
  return content;
}
