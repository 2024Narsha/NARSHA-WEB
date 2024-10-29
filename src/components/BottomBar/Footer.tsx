import React from 'react';
import './Footer.css';
import image1 from './path/to/image1.png'; // 실제 이미지 경로로 변경
import image2 from './path/to/image2.png'; // 실제 이미지 경로로 변경
import image3 from './path/to/image3.png'; // 실제 이미지 경로로 변경
import image4 from './path/to/image4.png'; // 실제 이미지 경로로 변경

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-images">
      <img src={`${process.env.PUBLIC_URL}/contest.svg`} alt="대회" className="footer-icon" />
        <img src={`${process.env.PUBLIC_URL}/certificate.svg`} alt="자격증" className="footer-icon" />
        <img src={`${process.env.PUBLIC_URL}/service.svg`} alt="봉사활동" className="footer-icon large" />
        <img src={`${process.env.PUBLIC_URL}/people.svg`} alt="학교생활" className="footer-icon" />
      </div>
    </div>
  );
};

export default Footer;
