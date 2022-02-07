import React from 'react';
import Routez from './Routes';
import './App.css';
import ContextProvider from './context';
// import logo from './logo.svg';

const App = () => {
  return (
    <ContextProvider>
      <Routez />
    </ContextProvider>
  );
}

export default App;
