import React from 'react';
import './Button.scss';

const Button =({children, color, type = 'button', click})=>{
    return(
        <button type={type} onClick={click} className={`button ${typeof color!=='undefined'?'button--'+color:''}`}>
            {children}
        </button>
    )
};

export default Button;