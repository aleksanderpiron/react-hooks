import React from 'react';
import NotifItem from './NotifItem';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import './Notif.scss';

const Notif=({notifs, removeNotif})=>{
    const content = notifs.map(({type, label, id})=>{
        return <CSSTransition
        timeout={300}
        key={id}
        classNames='swipe-right'
        appear={true}
        >
            <NotifItem remove={()=>{removeNotif(id)}} key={id} type={type}>{label}</NotifItem>
        </CSSTransition>
    })
    return(
        <TransitionGroup className="notif">
            {content}
        </TransitionGroup>
    )
}

export default Notif;