import React from 'react';
import './Modal.scss';

const Modal = ({children}) =>{
    return(
        <div className="modal modal--active">
            <div className="modal__content">
                <button className="modal__close">X</button>
                {children}
            </div>
        </div>
    )
}

export default Modal;