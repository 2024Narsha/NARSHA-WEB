import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import BottomButton from "../../components/BottomButton";

import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate(); // 네비게이션 훅(페이지 이동)

  const [userId, setUserId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [checkPassword, setCheckPassword] = useState<string>('');

  const handleUserId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleCheckPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckPassword(e.target.value);
  };

  const submit = async() => {
    if(userId !== userId.replace(/\s+/g, '')){
      alert('아이디에 공백이 있음!');
      return
    };

    if(password !== password.replace(/\s+/g, '')){
      alert('비밀번호에 공백이 있음!');
      return
    };

    if(password !== checkPassword){
      alert('비밀번호가 일치하지 않음!');
      return
    };

    try{
      const res = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/auth/signup`, 
        {userId, password}
      );
        if(res){
          alert('회원가입 완료');
          navigate('/login')
        };
      }catch(error: any){
        if(error.response.status === 409){
          alert('이미 사용 중인 아이디!');
          return
        }
        alert('네트워크 에러');
      };
    };

  return (
    <div className="signup-page-container">
      <div className="top-line"></div>
      <img src={`/logo-blue.png`} />
      <div className="signup-page-title">회원가입</div>
      <div className="page-info">
        수상한 고래를 이용하기 전,<br></br>
        회원가입이 필요해요.
      </div>

      <div className="signup-input-box-wrap">
        <div>
          <p className='label'>아이디</p>
          <input 
            className='input-box' 
            placeholder='아이디 입력' 
            name='userId' 
            type='text' 
            onChange={handleUserId} 
            value={userId} 
          />
        </div>
        <div>
          <p className='label'>비밀번호</p>
          <input 
            className='input-box' 
            placeholder='비밀번호 입력' 
            name='password' 
            type='password' 
            onChange={handlePassword} 
            value={password} 
          />
        </div>
        <div>
          <p className='label'>비밀번호 확인</p>
          <input 
            className='input-box' 
            placeholder='비밀번호 확인' 
            name='checkPassword' 
            type='password' 
            onChange={handleCheckPassword} 
            value={checkPassword}
          />
        </div>
        <div className="go-to-login">이미 계정이 있나요? <Link to="/login" style={{ color: "#3F4142" }}>로그인</Link></div>
      </div>

      <BottomButton 
        title="가입하기"
        onClick={submit} 
       />
    </div>
  );
};

export default Signup;
