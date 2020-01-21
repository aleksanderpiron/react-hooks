import React from 'react';
import './Box.scss';

const Box = ({children}) =>{
    return(
        <div className="box">
            {children}
        </div>
    )
}

export default Box;