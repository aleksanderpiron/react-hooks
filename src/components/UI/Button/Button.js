import React from 'react';
import './Button.scss';

const Button =({children, color, type = 'button'})=>{
    return(
        <button type={type} className={`button ${typeof color!=='undefined'?'button--'+color:''}`}>
            {children}
        </button>
    )
};

export default Button;