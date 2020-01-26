import React from 'react';
import NotifItem from './NotifItem';
import './Notif.scss';

const Notif=({notifs, removeNotif})=>{
    const content = notifs.map(({type, label, id})=>{
        return <NotifItem remove={()=>{removeNotif(id)}} key={id} type={type}>{label}</NotifItem>
    })
    return(
        <div className="notif">
            {content}
        </div>
    )
}

export default Notif;