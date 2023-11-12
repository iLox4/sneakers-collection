import { MouseEventHandler, ReactElement } from "react";
import styles from "./Button.module.css";

export default function Button({
  onClick,
  type,
  Icon,
  isIcon,
  iconPosition,
  size,
  label,
}: {
  onClick: MouseEventHandler;
  type: "primary" | "secondary";
  Icon: () => ReactElement;
  isIcon: boolean;
  iconPosition: "left" | "right" | null;
  size: "large" | "small";
  label: string;
}) {
  let buttonContent;
  let btnStyles = `${styles.btn}`;

  if (isIcon) {
    if (iconPosition === "left") {
      btnStyles += ` ${styles.iconLeft}`;
      buttonContent = (
        <>
          <Icon />
          {label}
        </>
      );
    } else if (iconPosition === "right") {
      btnStyles += ` ${styles.iconRight}`;
      buttonContent = (
        <>
          <Icon />
          {label}
        </>
      );
    }
  } else {
    buttonContent = label;
  }

  if (type === "secondary") {
    btnStyles += ` ${styles.secondary}`;
  }

  if (size === "small") {
    btnStyles += ` ${styles.small}`;
  } else {
    btnStyles += ` ${styles.large}`;
  }

  return (
    <button className={btnStyles} onClick={onClick}>
      {buttonContent}
    </button>
  );
}
