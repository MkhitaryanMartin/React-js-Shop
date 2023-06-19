import React from "react";
import "./style.css";
import { createPortal } from "react-dom";
import { useMemo } from "react";
import Closed from "../Icon/closed";

export const Modal = ({
  isVisible = false,
  title,
  content,
  footer,
  onClose,
  children,
  style,
  contentStyle = {}
}) => {
  const div = useMemo(() => {
    return <div className="modal" onClick={onClose}>
      <div
        className="modal-dialog"
        onClick={e => e.stopPropagation()}
        style={style}
      >
        <div className="modal-header">

          <h3 className="modal-title">{title}</h3>
          <Closed click={onClose} />
        </div>
        <div className="modal-body">
          <div
            className="modal-content"
            style={contentStyle}
          >{content}</div>
          {children}
        </div>
        {footer && <div className="modal-footer">{footer}</div>}
      </div>
    </div>
  }, [])

  return (
    <>
      {
        !isVisible ? null : createPortal(<div id="portal">{div}</div>, document.body)
      }
    </>
  )


};


