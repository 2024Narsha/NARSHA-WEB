import './Main.css';
import Header from '../../components/Header/Header';
import React, { useState, useEffect } from 'react';
import noticeIcon from './path/to/your/icon.png'; // 올바른 경로로 변경하세요

const NoticeBar = () => {
  const notices = [
    '공지사항: 새로운 업데이트가 있습니다!',
    '안내: 서비스 점검이 예정되어 있습니다.',
    '대회알림: 사이버 영재교육 과정 수강생 모집기간이 13일 남았습니다'
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
    <div>
      <Header /> {/* Header 컴포넌트를 포함시킵니다. */}
      <NoticeBar /> {/* NoticeBar를 Header 아래에 추가합니다. */}
      <div className="content">
        <h2>Main page</h2>
        {/* 여기에 페이지의 내용을 추가합니다. */}
      </div>
    </div>
  );
};

export default Main;
