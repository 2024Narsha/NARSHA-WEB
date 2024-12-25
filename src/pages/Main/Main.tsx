import './Main.css';
import React, { useState, useEffect } from 'react';
import PreviewList from '../../components/PreviewList';
import ContestView from '../../components/ContestView';
import instance from "../../lids/axios/instance";
import { useNavigate } from 'react-router-dom';
import SearchBox from '../../components/SearchBox';
import WriteButton from '../../components/WriteButton';

interface UserData {
  idx: number;
  userId: string;
  role: string;
}

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
      <img src={`/Announ.png`} alt="공지 아이콘" className="notice-icon" />
      <div className="notice-text">{currentNotice}</div>
    </div>
    );
  };


  const Main = () => {
    const [userData, setUserData] = useState<UserData | null>(null);

    const navigate = useNavigate();

    const getMe = async() => {
      try{
        const res = await instance.get(`/users/me`);
        if(res){
          setUserData(res.data.data)
        }
      }catch(error:any) {
        navigate("/login");
        console.log(error)
      };
    };

    useEffect(() => {
      getMe();
    }, []);

    const shouldShowButton = (
      userData?.userId === 'admin' || 
      userData?.role === 'admin'
    );

    return (
      <div className='write-button-wrap'>
      <div className="centered-container">
        <SearchBox />
        <NoticeBar />
        <div className='parent-container'> 
        <div className="content">
          <PreviewList /> {/* 모집 중인 대회 */}
          <p />
          <ContestView /> {/* 정기 대회 */}
        </div>
      </div>
      </div>

        {/* 참가하기 버튼 (선생인 경우만 표시) */}
        {shouldShowButton && (
          <WriteButton path='대회'/>
          )}
      </div>
    );
  };

export default Main;