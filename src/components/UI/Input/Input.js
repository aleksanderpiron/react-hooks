import React from 'react';
import './Input.scss';

const Input =({change, classes, value, label, type='text', referance})=>{
    return(
        <label>
            <input className={classes} placeholder=' ' ref={referance} value={value} name={label} type={type} onChange={change}/>
            <p>{label}</p>
            <span className="line"></span>
        </label>
    )
}

export default Input;