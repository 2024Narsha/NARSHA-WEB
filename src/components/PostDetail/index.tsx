import './style.css'
import Header from "../Header/Header";
import TopBar from "../TopBar";
import Footer from '../Footer/Footer';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import instance from "../../lids/axios/instance";
import axios from 'axios';
import CheckAlert from '../CheckAlert';
import DisableButton from '../DisableButton';

interface UserData {
  idx: number;
  userId: string;
  role: string;
}

const PostDetail = () => {
  const [id, setId] = useState<number>();
  const [title, setTitle] = useState<string>('title');
  const [details, setDetails] = useState<string>();
  const [closedAt, setClosedAt] = useState<string>();
  const [category, setCategory] = useState<string | undefined>();
  const [inSchool, setInSchool] = useState<boolean>(true);
  const [thumbnails, setThumbnails] = useState<[string]>(['/logo(blue).svg']);

  // 확인 알림창 표시 여부 상태
  const [showAlert, setShowAlert] = useState<boolean>(false);
  // 로그인한 사용자 정보 상태
  const [userData, setUserData] = useState<UserData | null>(null);

  const params = useParams();

  const navigate = useNavigate();

  const getMe = async() => {
    try{
      const res = await instance.get(`/users/me`);
      setUserData(res.data.data);
    }catch(error:any) {
      navigate("/login");
    };
  };

  const getList = async() => {
    try{
      const res = await instance.get(
        `/posts/${params.id}`
      );
      if (res){
        setId(res.data.id);
        setTitle(res.data.title);
        setDetails(res.data.details);
        setClosedAt(res.data.closedAt);
        setCategory(res.data.category);
        setInSchool(res.data.inSchool);
        setThumbnails(res.data.thumbnails);
      }
    }catch(error:any){
      alert('네트워크 에러!');
      console.log(error)
    }
  };

  const participate = async () => {
    try{
      await instance.post(`/join/${params.id}`);
    }catch(error:any){
      if(error.response.status === 409){
        alert('이미 참여한 대회입니다!')
        return
      }
      alert('참가 실패')

      console.log(error)
      if (error.response) {
        console.error('서버 응답:', error.response.data);
        console.error('서버 상태:', error.response.status);
      }
    };
  };

  // 참가하기 버튼 클릭 핸들러
  const handleParticipateClick = () => {
    // 확인 알림창 표시
    setShowAlert(true);
  };

  // 알림창 응답 처리 핸들러
  const handleAlertResponse = (confirmed: boolean) => {
    // 알림창 닫기
    setShowAlert(false);
    // 확인 버튼 클릭시
    if (confirmed) {
      // 대회 참가 처리
      participate();
    }
  };

  // 관리자 여부에 따른 버튼 표시 상태 계산
  const shouldShowButton = !(
    userData?.userId === 'admin' || 
    userData?.role === 'admin'
  );

  useEffect(() => {
    getMe();
  }, []);

  useEffect(() => {
    if (params.id){
      getList();
    }
  }, [params.id]);

  return (
    <div className="post-detail-container">
      <Header />
      <TopBar title='대회본문'/>

      <div className='post-detail-img-wrap'>
        <div className='post-detail-deadline'>D-13</div>
        <img src={thumbnails[0] || 'Logo(blue).svg'} />
      </div>

      <div className='post-detail-title'>{title===undefined ? 'title' : title}</div>

      <div className='post-attribute-wrap'>
        <div className='attribute'>
          <p className='attribute-title' >신청 기한</p>
          <p>{closedAt===undefined ? '---' : closedAt}</p>
        </div>
        <div className='split-line'></div>
        <div className='attribute'>
          <p className='attribute-title' >교내 / 교외</p>
          <p>{inSchool ? '교내' : '교외'} 대회</p>
        </div>
      </div>

      <div className='post-detail-text'>{details}</div>

      {/* 참가하기 버튼 (관리자가 아닌 경우에만 표시) */}
      {shouldShowButton && (
        <DisableButton
          title="참가하기"
          onClick={handleParticipateClick}
        />
      )}

      {/* 확인 알림창 (showAlert이 true일 때만 표시) */}
      {showAlert && (
        <CheckAlert
          onCancel={() => handleAlertResponse(false)}
          onConfirm={() => handleAlertResponse(true)}
        />
      )}
      <Footer />
    </div>
  )
}

export default PostDetail