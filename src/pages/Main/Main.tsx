import './Main.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/BottomBar/Footer';
import React, { useState, useEffect } from 'react';
import PreviewList from '../../components/PreviewList';
import ContestView from '../../components/ContestView';

const NoticeBar = () => {
  const notices = [
    <span key="1"><span className="notice-font-title">공지사항 </span> <span className="notice-font">18:00 ~ 20:00까지 점검이 예정되어 있습니다.</span></span>,
    <span key="2"><span className="notice-font-title">안내 </span> <span className="notice-font">다음 주, 급식실 이벤트가 진행됩니다.</span></span>,
    <span key="3"><span className="notice-font-title">알림 </span> <span className="notice-font">사이버 영재교육 과정 수강생 모집기간이 13일 남았습니다.</span></span>
  ];
  
  const [currentNotice, setCurrentNotice] = useState(notices[0]);
  let noticeIndex = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      noticeIndex = (noticeIndex + 1) % notices.length;
      setCurrentNotice(notices[noticeIndex]);
    }, 3000);

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 interval 제거
  }, []);

  return (
    <div className="notice-bar">
      <img src={`${process.env.PUBLIC_URL}/Announ.png`} alt="공지 아이콘" className="notice-icon" />
      <div className="notice-text">{currentNotice}</div>
    </div>
  );
};

const Main = () => {
  return (
    <div className="centered-container">
      <Header />
      <NoticeBar />
      <div className='parent-container'> 
      <div className="content">
        <PreviewList />
        <p />
        <ContestView />
        <p /><p /><p />
        {/* 여기에 페이지의 내용을 추가합니다. */}
      </div>
      <Footer />
    </div>
    </div>
  );
};

export default Main;
