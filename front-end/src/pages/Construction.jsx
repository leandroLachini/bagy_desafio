import React, { useState } from "react";
import { Header, NavBar } from '../components'
import './Construction.css'

const Construction = () => {

  const [menuName, setMenuName] = useState('');

  const getMenuName = (menuName) => {
    setMenuName(menuName)
    
    console.log({'Homeeee': menuName});
  };

  return(
    <main className="main-container">
      <div className="left-container">
        <NavBar onClick = { getMenuName }/>
      </div>
      <div className="right-container">
        <Header menuName = {menuName}/>
        <div className="text-container">
          <h1>Página em Construção</h1>
        </div>
      </div>
    </main>
  )
}

export default Construction;
