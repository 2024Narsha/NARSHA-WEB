import './Header.css';

const Header = () => {
  return (
    <header className = "header">
      <div className = "header-2">
        <div className = 'logo'>
          <a href = "/category" className="header-image left">
            <img src = {`/hamburger.svg`} alt="Hamburger" /></a>
            <img src = {`/Whale.svg`} alt="Whale logo" className="header-image center" />
          <img src = {`/profile.svg`} alt="Profile" className="header-image right" />
        </div>
      </div>
    </header>
  );
};

export default Header;