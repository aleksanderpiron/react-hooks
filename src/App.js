import React, {useState, useCallback} from 'react';
import Notif from './components/UI/Notif/Notif';
import Ingredients from './components/Ingredients/Ingredients';
import './App.scss';

const App=()=>{
  const [notifs, setNotifs] = useState([]),
  pushNotif=useCallback((label, type = 'success')=>{
    const id = Math.floor((Math.random()*10000)*(Math.random()*10000)),
    notif = {label, type, id};
    setNotifs(prevState=>([notif, ...prevState]));
  }, []),
  
  removeNotif=(notifId)=>{
    let newNotifs = [...notifs];
    newNotifs = newNotifs.filter(notif=>{
      return notif.id !== notifId;
    });
    setNotifs(newNotifs);
  }
  return (
    <div className="App">
      <h2>Shop list</h2>
      <Ingredients pushNotif={pushNotif}/>
      <Notif notifs={notifs} removeNotif={removeNotif}/>
    </div>
  );
}

export default App;