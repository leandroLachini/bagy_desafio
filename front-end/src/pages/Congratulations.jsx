import React from "react";
import NavBar from '../components'

const Congratulations = () => {
  return(
    <main className="main-container">
      <div className="left-container">
        <NavBar />
      </div>
      <div className="right-container">
        <h1>Você saiu da aplicação com Sucesso!</h1>
        <h2>Obrigado por ser Cliente Bagy</h2>
      </div>
    </main>
  )
}

export default Congratulations;
