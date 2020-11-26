import React from 'react';
import { createPortal } from 'react-dom';

const Modal = (props) => {
  return createPortal(
    <div onClick={props.onDismiss} className="ui dimmer modals visible active">
      <div
        className="ui standard modal visible active"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="header">{props.header}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;
