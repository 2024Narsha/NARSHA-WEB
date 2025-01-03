import { useNavigate } from 'react-router-dom'
import Apply from '../../components/Apply'
import Header from '../../components/Header/Header'
import OptionBar from '../../components/OptionBar'
import './style.css'
import { useEffect, useState } from 'react'
import instance from "../../lids/axios/instance";
import Storys from '../../components/Storys'
import Songs from '../../components/Songs'

interface UserData {
  idx: number;
  userId: string;
  role: string;
}

const ApplyPage = () => {
  const [option, setOption] = useState<boolean>(false);

  const [userData, setUserData] = useState<UserData | null>(null);

  const navigate = useNavigate();

  const getMe = async() => {
    try{
      const res = await instance.get(`/users/me`);
      if(res){
        console.log(res)
        setUserData(res.data.data)
      }
    }catch(error:any) {
      navigate("/login");
      console.log(error)
    };
  };

  // 옵션 변경 핸들러
  const handleOption = (selectedOption: string) => {
    const isStudents = selectedOption === '학생회 행사';
    setOption(isStudents);
    
    // 학생회 행사 선택시 students 페이지로 이동
    if (isStudents) {
      navigate("/students");
    }
  };

  useEffect(() => {
    getMe();
  }, []);

  const shouldShowTeacher = (
    userData?.userId === 'admin' || 
    userData?.role === 'admin'
  );

  return (
    <div className='apply-page-container'>
      <Header />

      <OptionBar
        title='학생회&방송부'
        loption='노래 & 사연신청'
        roption='학생회 행사'
        onOption={option}
        onOptionChange={handleOption}
      />

      {!shouldShowTeacher && (
      <div className='apply-content'>
      <Apply 
        title='노래 신청'
        info='점심시간에 듣고 싶은 노래를 신청해 주세요'
      />
      
      <Apply 
        title='사연 신청'
        info='여러분의 사연을 신청해 주세요'
      />
      </div>
      )}

      {shouldShowTeacher && (
      <div className='apply-content'>
      
      <h1>사연 신청 목록</h1>
      <Storys />
      <h1>노래 신청 목록</h1>
      <Songs />

      </div>
      )}

    </div>
  )
}

export default ApplyPage