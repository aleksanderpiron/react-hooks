import React from 'react';

const Input =({change, value, label, type='text', referance})=>{
    return(
        <label>
            <p>{label}</p>
            <input ref={referance} value={value} name={label} type={type} onChange={change}/>
            <span className="line"></span>
        </label>
    )
}

export default Input;