import React, {useContext} from 'react';
import NotifBox from './components/UI/Notif/NotifBox';
import Ingredients from './components/Ingredients/Ingredients';
import './App.scss';
import {NotifContext} from './contexts/Notif';

const App=()=>{
  const {notifs, createNotif, removeNotif} = useContext(NotifContext);
  return (
    <div className="App">
      <h2>Shop list</h2>
      <Ingredients createNotif={createNotif}/>
      <NotifBox notifs={notifs} removeNotif={removeNotif}/>
    </div>
  );
}

export default App;