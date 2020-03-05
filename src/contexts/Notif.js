import React, {useState, useCallback} from 'react';

export const NotifContext = React.createContext();

const NotifContextProvider=({children})=>{
    const [notifs, setNotifs] = useState([]),

    createNotif=useCallback((label, type = 'success', visibleFor = null)=>{
      const id = Math.floor((Math.random()*10000)*(Math.random()*10000)),
      notif = {label, type, id};
      if(visibleFor!==null && visibleFor > 0){
        window.setTimeout(()=>{
            removeNotif(id);
        }, visibleFor)
      }
      setNotifs(prevState=>([notif, ...prevState]));
    }, []),
    removeNotif=(notifId)=>{
      let newNotifs = [...notifs];
      newNotifs = newNotifs.filter(notif=>{
        return notif.id !== notifId;
      });
      setNotifs(newNotifs);
    };

    return(
        <NotifContext.Provider value={{
            notifs,
            createNotif,
            removeNotif
        }}>
            {children}
        </NotifContext.Provider>
    )
};

export default NotifContextProvider;