import React from 'react';
import './Box.scss';

const Box = ({children, center}) =>{
    return(
        <div className={`box ${typeof center!=='undefined'?'box--center':''}`}>
            {children}
        </div>
    )
}

export default Box;