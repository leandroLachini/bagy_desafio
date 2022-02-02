import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Graph } from './pages';


const Routez = () => {
  return(
    <Routes>
      <Route element={ <Home /> } exact path="/" />
      <Route element={ <Graph /> } path="/graph" />
    </Routes>
  )}

export default Routez;
