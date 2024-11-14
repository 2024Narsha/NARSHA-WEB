import './style.css'
import { Link } from 'react-router-dom';
import BottomButton from '../../components/BottomButton';
import InputBox from '../../components/InputBox';

const Login = () => {
  return (
    <div className='login-page-container'>
      <div className='top-line'></div>
      <img className='login-page-logo' src={`/logo(blue).png`} />

      <img className='login-page-title' src={`/logo(text).png`} />
      <div className='page-info'>
        수상한 고래에 로그인하여<br></br>
        최신 대회 정보들을 손쉽게 알아보세요!
      </div>

      <div className='input-box-wrap'>
        <InputBox label='아이디' placeholder='아이디 입력' />
        <InputBox label='비밀번호' placeholder='비밀번호 입력' />
        <div className='go-to-login'>계정이 없으신가요? <Link to='/signup' style={{color: '#3F4142'}}>회원가입</Link></div>
      </div>

      <BottomButton title='로그인 하기' />
    </div>
  )
}

export default Login