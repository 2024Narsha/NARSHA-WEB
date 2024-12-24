import './style.css'
import { Link, useNavigate } from 'react-router-dom';
import BottomButton from '../../components/BottomButton';
import { useState } from 'react';
import axios from 'axios';

const Login = () => {

  const [userId, setUserId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleUserId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();
  
  const submit = async() => {
    try{
      const res = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/auth/login`,
        {userId, password}
        );
        console.log(res)
        if(res){
          const { accessToken, refreshToken } = res.data.data;
          localStorage.setItem('ACCESS_TOKEN',accessToken);
          localStorage.setItem('REFRESH_TOKEN',refreshToken);
          alert('로그인 완료');
          navigate('/')
        }
    }catch(error:any){
      if(error.response.status === 404){
        alert('아이디가 존재하지 않음!')
        return
      }
      if(error.response.status === 400){
        alert('정보가 올바르지 않음!')
        return
      }
      alert('네트워크 에러')
      console.log(error)
    }
  }

  return (
    <div className='login-page-container'>
      <div className='top-line'></div>
      <img className='login-page-logo' src={`/logo-blue.png`} />

      <img className='login-page-title' src={`/logo-text.png`} />
      <div className='page-info'>
        수상한 고래에 로그인하여 최신 대회<br></br>
        정보들을 손쉽게 알아보세요!
      </div>

      <div className='login-input-box-wrap'>
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
        <div className='go-to-login'>계정이 없으신가요? <Link to='/signup' style={{color: '#3F4142'}}>회원가입</Link></div>
      </div>

      <BottomButton title='로그인 하기' onClick={submit} />
    </div>
  )
}

export default Login