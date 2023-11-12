import { useState, useLayoutEffect, ReactElement } from "react";
import { createPortal } from "react-dom";

const createWrapperAndAppendToBody = (wrapperId: string) => {
  if (!document) return null;
  const wrapperElement = document.createElement("div");
  wrapperElement.setAttribute("id", wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
};

export default function ReactPortal({
  children,
  wrapperId,
}: {
  children: ReactElement;
  wrapperId: string;
}) {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement>();

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let isDocCreated = false;

    if (!element) {
      isDocCreated = true;
      element = createWrapperAndAppendToBody(wrapperId);
    }
    setWrapperElement(element!);

    return () => {
      if (isDocCreated && element?.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  return !wrapperElement ? null : createPortal(children, wrapperElement);
}
