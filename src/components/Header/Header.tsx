import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  const goToMyList = () =>{
    navigate('/applicate-list')
  };

  return (
    <header className = "header">
      <div className = "header-2">
        <div className = 'logo'>
          <a href = "/category" className="header-image left">
            <img src = {`/hamburger.svg`} alt="Hamburger" /></a>
            <img src = {`/Whale.svg`} alt="Whale logo" className="header-image center" />
          <div className="header-image right" onClick={goToMyList}><img src = {`/profile.svg`} alt="Profile" className="profile"/></div>
        </div>
      </div>
    </header>
  );
};

export default Header;