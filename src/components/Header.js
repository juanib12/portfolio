import JB from '../images/jb.png'

const Header = () => {
  return (
    <header className='header'>
      <nav className='nav bd-grid'>
        <div>
          <a href="#" className="nav__logo">
            <img src={JB} width="40px" />
            <span>Juan Bianco</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
