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
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
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
            <i class="fa fa-fw fa-home"></i>
            <Link to='/sair'>Sair</Link>
          </li>
        </ul>
      </div>
    </main>
  )
}

export default NavBar;
