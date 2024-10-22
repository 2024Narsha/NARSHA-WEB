import './Header.css';

const Header = () => {
  return (
    <header className = "header">
      <div className = "header-2">
        <div className = 'logo'>
          <a href = "/src/pages/Header.tsx" className="header-image left">
            <img src = {`${process.env.PUBLIC_URL}/hamburger.svg`} alt="Hamburger" /> </a>
          <img src = {`${process.env.PUBLIC_URL}/Whale.svg`} alt="Whale logo" className="header-image center" />
          <img src = {`${process.env.PUBLIC_URL}/profile.svg`} alt="Profile" className="header-image right" />
        </div>
      </div>
      {/* 네비게이션 메뉴를 추가할 수 있습니다. */}
    </header>
  );
};

export default Header;