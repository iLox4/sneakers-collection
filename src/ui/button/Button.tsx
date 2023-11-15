import { ReactElement } from "react";
import styles from "./Button.module.css";

export default function Button({
  onClick,
  type,
  Icon,
  isIcon,
  iconPosition,
  size,
  label,
  isActive,
}: {
  onClick: (param: any) => void;
  type: "primary" | "secondary";
  Icon: () => ReactElement;
  isIcon: boolean;
  iconPosition: "left" | "right" | null;
  size: "large" | "small";
  label: string;
  isActive: boolean;
}) {
  let buttonContent;
  let btnStyles = `${styles.btn}`;

  if (isIcon) {
    if (iconPosition === "left") {
      btnStyles += ` ${styles.iconLeft}`;
      buttonContent = (
        <>
          <Icon />
          <span>{label}</span>
        </>
      );
    } else if (iconPosition === "right") {
      btnStyles += ` ${styles.iconRight}`;
      buttonContent = (
        <>
          <Icon />
          <span>{label}</span>
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

  if (isActive) {
    btnStyles += ` ${styles.active}`;
  }

  return (
    <button className={btnStyles} onClick={onClick}>
      {buttonContent}
    </button>
  );
}
