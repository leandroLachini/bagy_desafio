import React from 'react';
import { Link } from 'react-router-dom';
// import './NavBar.css'


const NavBar = () => {
  const menu_names = [
    {"Visão Geral": "/"}, {"Lojas": "/lojas"},
    {"Vendas": "/vendas"}, {"Clientes": "/clientes"},
    {"Produtos": "/produtos"}, {"Planos e Metas": "/planosemetas"},
    {"Configurações ": "/configuracoes"}, {"Sair": "/sair"}
  ];
  return(
    <main className="div_nav">
      <div className="div_logo">
        <h4>Dashboard Bagy</h4>
      </div>
      <div className="div_link">
        <nav>
          <ul>
            {menu_names.map((name, index) => {
              return (
                <li key={index}>
                  <Link to={Object.values(name)[0]}>{Object.keys(name)}</Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </main>
  )
}

export default NavBar;
