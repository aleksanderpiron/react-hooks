import React from 'react';
import Box from './components/UI/Box/Box';
import Modal from './components/UI/Modal/Modal';
import './App.scss';

const App=()=>{
  return (
    <div className="App">
      <h2>Hejo</h2>
      <Box>
        <p className='box__title'>Hej</p>
      </Box>
      <Modal>
        <p className='modal__title'>Hej</p>
      </Modal>
    </div>
  );
}

export default App;