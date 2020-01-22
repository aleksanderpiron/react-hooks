import React, {useState} from 'react';
import './Modal.scss';

const Modal = ({children}) =>{
    const [modalState, setModalState] = useState(false);
    return(
       <div className={`modal ${modalState && 'modal--active'}`}>
           <div className="modal__content">
               <button className="modal__close" onClick={()=>setModalState(false)}>X</button>
               {children}
           </div>
       </div>
    )
}

export default Modal;