import { useEffect } from 'react';
import NavBar from '../components'
// import { Link } from 'react-router-dom';
import './Home.css';

import client from '../service';
import { INFO_PERSON } from '../queries';

// const TOKEN_LOJA_1 = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdG9yZUlkIjoiMTAzIiwicm9sZSI6MX0.A9U6DQ_clavUnbiriUMjV1Lk7CTXL_uHBPi0NCL5-4c'; 

const Home = () => {

  /*
  useEffect(() => {
    fetch('https://staging-dot-bagy-api.appspot.com/graphql', {
      method: 'POST',
      headers: { 
        "Content-Type": "aplication/json",
        "x-auth-token": TOKEN_LOJA_1,
      },
      body: JSON.stringify({ query: INFO_PERSON })
    }).then(response => response.json())
    .then((data) => console.log(data))
  }, []);
  */

  useEffect(() => {
    initial()
  },[]);

  const initial = () => {
    client.query({
      query: INFO_PERSON
    }).then((res) => console.log(res));
  }


  return(
    <main className='main-container'>
      <div className="home-container">
        <NavBar />
      </div>
      <div className='title-page'>
        <p>Visão Geral</p>
      </div>
      <div className='navbar-container'>
        <i className='fa fa-search' id='search'></i>
        <i className='fa fa-bell' id='search'></i>
        <div className='spacer-container'>
        </div>
        <p>Leandro Lachini</p>
        <div className='circle'></div>
      </div>
    </main>
    )
  }

export default Home;
