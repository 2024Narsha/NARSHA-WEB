import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null); // 초기값을 null로 설정
  const navigate = useNavigate();

  const handleImageClick = (index: number) => {
    setSelectedIndex(index);

    if (index === 0) {
      navigate('/');
    } else if (index === 1) {
      navigate('/license');
    } else if (index === 2) {

    } else if (index === 3) {
      
    }
  };

  return (
    <div className="footer">
      <div className="footer-images">
        <img
          src={`/contest.svg`}
          alt="대회"
          className={`footer-icon ${selectedIndex === 0 ? 'selected' : ''}`}
          onClick={() => handleImageClick(0)}
        />
        <img
          src={`/certificate.svg`}
          alt="자격증"
          className={`footer-icon ${selectedIndex === 1 ? 'selected' : ''}`}
          onClick={() => handleImageClick(1)}
        />
        <img
          src={`/service.svg`}
          alt="봉사활동"
          className={`footer-icon large ${selectedIndex === 2 ? 'selected' : ''}`}
          onClick={() => handleImageClick(2)}
        />
        <img
          src={`/people.svg`}
          alt="학교생활"
          className={`footer-icon ${selectedIndex === 3 ? 'selected' : ''}`}
          onClick={() => handleImageClick(3)}
        />
      </div>
    </div>
  );
};

export default Footer;