import React from 'react';

const NotifItem=({children, remove, type = 'success'})=>{
    return(
        <div className={`notif__item notif--${type}`}>
            <div className="notif__img" onClick={remove}></div>
            <div className="notif__text">
                <p>{children}</p>
            </div>
        </div>
    )
}

export default NotifItem;