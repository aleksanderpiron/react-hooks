import React from 'react';
import Modal from './components/UI/Modal/Modal';
import Ingredients from './components/Ingredients/Ingredients';
import './App.scss';

const App=()=>{
  return (
    <div className="App">
      <h2>Shop list</h2>
      <Ingredients/>
      <Modal>
        <p className='modal__title'>Hej</p>
      </Modal>
    </div>
  );
}

export default App;