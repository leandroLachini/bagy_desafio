import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'


const NavBar = () => {
  const menu_names = [
    {"Visão Geral": "/"}, {"Lojas": "/lojas"},
    {"Vendas": "/vendas"}, {"Clientes": "/clientes"},
    {"Produtos": "/produtos"}, {"Planos e Metas": "/planosemetas"},
    {"Configurações ": "/configuracoes"}
  ];
  return(
    <main>
      <div className="navbar">
        <h4>Dashboard Bagy</h4>
        <ul>
          {menu_names.map((name, index) => {
            return (
              <li key={index}>
                <Link to={Object.values(name)[0]}>{Object.keys(name)}</Link>
              </li>
            )
          })}
          <li id='close'>
            <i className="fa fa-fw fa-home"></i>
            <Link to='/sair'>Sair</Link>
          </li>
        </ul>
      </div>
    </main>
  )
}

export default NavBar;
