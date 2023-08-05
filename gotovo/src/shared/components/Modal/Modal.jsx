import React, { useRef, useEffect, useCallback } from "react";
import Portal from "@reach/portal";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import css from 'classnames';

import classes from "./Modal.module.css";
import { CSSTransition } from "react-transition-group";
import animate from "./Modal-Animate.module.css";

export const ModalContent = ({ children }) => {
  return <div className={classes.modal__content}>{children}</div>;
};

const Modal = ({ children, open, onClose, fullSize }) => {
  const ref = useRef();

  const handleKey = useCallback(
    (e) => {
      console.log(e)
      if (e.key === "Escape") {
        return onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (ref.current) {
      if (open) {
        disableBodyScroll(ref.current);
        window.addEventListener("keydown", handleKey);
      } else {
        enableBodyScroll(ref.current);
      }
    }
    return () => {
      window.removeEventListener("keydown", handleKey);
      clearAllBodyScrollLocks();
    };
  }, [open, handleKey]);

  return (
    <Portal>
      <CSSTransition in={open} timeout={300} classNames={animate} unmountOnExit>
        <div className={classes.container}>
          <div
            className={classes.overlay}
            role="none presentation"
            tabIndex={-1}
            onClick={() => onClose()}
          />
          <div className={classes.dialog__container}>
            <div role="dialog" ref={ref} className={css(classes.modal, {
              [classes.modalFullSize]: fullSize,
            })}>
              <button
                onClick={() => onClose()}
                aria-label="Close panel"
                className="hover:text-gray-500 transition ease-in-out duration-150 focus:outline-none absolute right-0 top-0 m-3 modal-close-button"
              >
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="6.45811"
                    y1="6.28048"
                    x2="18.2118"
                    y2="18.0342"
                    stroke="#181818"
                  />
                  <line
                    x1="18.211"
                    y1="6.2039"
                    x2="6.45734"
                    y2="17.9576"
                    stroke="#181818"
                  />
                </svg>
              </button>
              {children}
            </div>
          </div>
        </div>
      </CSSTransition>
    </Portal>
  );
};

export default Modal;
