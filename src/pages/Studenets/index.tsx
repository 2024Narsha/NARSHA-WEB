import OptionBar from '../../components/OptionBar'
import StudentsPost from '../../components/StudentsPost'
import './style.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import instance from "../../lids/axios/instance";
import axios from 'axios'
import WriteButton from '../../components/WriteButton'

interface UserData {
  idx: number;
  userId: string;
  role: string;
}

const Students = () => {
  const ACCESS_TOKEN =
    localStorage.getItem(
      "ACCESS_TOKEN"
    );

  const [thumbnails, setThumbnails] = useState<string>('/bigLogo(blue).svg');
  const [option, setOption] = useState<boolean>(true); // true는 학생회 행사 페이지를 의미

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

  const getList = async() => {
    try{
      const res = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/`
      )
      if(res){
        setThumbnails(res.data)
      }
    }catch(error){
      console.log(error)
    };
  };

  // 옵션 변경 핸들러
  // selectedOption이 '학생회 행사'이면 true, '노래 & 사연신청'이면 false
  const handleOption = (selectedOption: string) => {
    const isStudents = selectedOption === '학생회 행사';
    setOption(isStudents);
    
    // 노래 & 사연신청 선택시 apply-page로 이동
    if (!isStudents) {
      navigate("/apply-page");
    }
  };

  useEffect(() => {
    getMe();
    getList();
  }, []);

  const shouldShowButton = (
    userData?.userId === 'admin' || 
    userData?.role === 'admin'
  );

  return (
    <div className='write-button-wrap'>
    <div className='students-page-container'>
      <OptionBar
        title='학생회&방송부'
        loption='노래 & 사연신청'
        roption='학생회 행사'
        onOption={option}
        onOptionChange={handleOption}
      />

      <div className='students-content-wrap'>
        <StudentsPost src={thumbnails} />
      </div>
    </div>

      {/* 참가하기 버튼 (선생인 경우만 표시) */}
      {shouldShowButton && (
        <WriteButton path='학생회'/>
        )}
    </div>
  )
}

export default Students