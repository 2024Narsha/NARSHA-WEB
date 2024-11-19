import React from 'react';
import { useNavigate, useMatch } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const navigate = useNavigate();

  const isHome = useMatch('/');
  const isLicense = useMatch('/license');
  const isVolunteer = useMatch('/volunteer');  // 봉사활동 경로 확인

  const handleImageClick = (path: string) => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <div className="footer">
      <div className="footer-images">
        <img
          src={`/contest.svg`}
          alt="대회"
          className={`footer-icon ${isHome ? 'selected' : ''}`}
          onClick={() => handleImageClick('/')}
        />
        <img
          src={`/certificate.svg`}
          alt="자격증"
          className={`footer-icon ${isLicense ? 'selected' : ''}`}
          onClick={() => handleImageClick('/license')}
        />
        <img
          src={`/service.svg`}
          alt="봉사활동"
          className={`footer-icon ${isVolunteer ? 'selected' : ''} large`}  // 봉사활동 경로 매칭 후 selected 추가
          onClick={() => handleImageClick('/volunteer')}
        />
        <img
          src={`/people.svg`}
          alt="학교생활"
          className={`footer-icon`}
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default Footer;
