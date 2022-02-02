import NavBar from '../components'
// import { Link } from 'react-router-dom';
import './Home.css';


const Home = () => {
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
