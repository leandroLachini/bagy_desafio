import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'



const NavBar = ({ onClick }) => {
  const menu_names = [
    {"Visão Geral": "/"}, {"Lojas": "/lojas"},
    {"Vendas": "/vendas"}, {"Clientes": "/clientes"},
    {"Produtos": "/produtos"}, {"Planos e Metas": "/planosemetas"},
    {"Configurações ": "/configuracoes"}
  ];
  

  const [menuName, setMenuName] = useState('');
  
  const getMenuName = () => {
    const menuNameText = document.getElementById("menu").innerText;
    setMenuName(menuNameText)
    
    console.log(menuName);
    console.log('Chegueiiiii');

    onClick(menuName);
  };


  return(
    <main>
      <div className="navbar">
        <h4>Dashboard Bagy</h4>
        <ul>
          {menu_names.map((name, index) => {
            return (
              <li key={index} id="menu" value={menuName} onClick={ () => getMenuName() }>
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
