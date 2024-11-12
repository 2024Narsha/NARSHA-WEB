import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0); // 초기값을 0으로 설정
  const navigate = useNavigate();

  const handleImageClick = (index: number) => {
    setSelectedIndex(index);

    if (index === 0) {
      navigate('/');
    }

    if (index === 1) {
      navigate('/license');
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