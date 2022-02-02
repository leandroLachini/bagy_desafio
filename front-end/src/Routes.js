import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Construction, Congratulations } from './pages';


const Routez = () => {
  return(
    <Routes>
      <Route element={ <Home /> } exact path="/" />
      <Route element={ <Construction /> } path="/lojas" />
      <Route element={ <Construction /> } path="/vendas" />
      <Route element={ <Construction /> } path="/clientes" />
      <Route element={ <Construction /> } path="/produtos" />
      <Route element={ <Construction /> } path="/planosemetas" />
      <Route element={ <Construction /> } path="/configuracoes" />
      <Route element={ <Congratulations /> } path="/sair" />
    </Routes>
  )}

export default Routez;
