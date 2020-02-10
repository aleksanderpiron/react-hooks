import React, {useState, useCallback, useContext} from 'react';
import Notif from './components/UI/Notif/Notif';
import Ingredients from './components/Ingredients/Ingredients';
import { AuthContext } from './components/Auth/Auth';
import './App.scss';

const App=()=>{
  const [notifs, setNotifs] = useState([]),
  auth = useContext(AuthContext),
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
  console.log(auth.login())
  return (
    <div className="App">
      <h2>Shop list</h2>
      <Ingredients pushNotif={pushNotif}/>
      <Notif notifs={notifs} removeNotif={removeNotif}/>
    </div>
  );
}

export default App;