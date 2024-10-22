import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className='logo'>
        <img src={`${process.env.PUBLIC_URL}/hamburger.png`} alt="Hamburger" className="header-image left" />
        <img src={`${process.env.PUBLIC_URL}/Whale.png`} alt="Whale logo" className="header-image center" />
        <img src={`${process.env.PUBLIC_URL}/profile.png`} alt="Profile" className="header-image right" />
      </div>
      {/* 네비게이션 메뉴를 추가할 수 있습니다. */}
    </header>
  );
};

export default Header;