import './Header.css';

const Header = ({menuName}) => {
  return(
    <main className='main-container'>
      <div className='title-page'>
        <p>{menuName}</p>
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

export default Header;