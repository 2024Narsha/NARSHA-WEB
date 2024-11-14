import './style.css'
import { Link } from 'react-router-dom';
import BottomButton from '../../components/BottomButton';
import InputBox from '../../components/InputBox';

const Signup = () => {
  return (
    <div className='signup-page-container'>
      <div className='top-line'></div>
      <img src={`/logo(blue).png`} />
      <div className='signup-page-title'>회원가입</div>
      <div className='page-info'>
        수상한 고래를 이용하기 전,<br></br>
        회원가입이 필요해요.
      </div>

      <div className='signup-input-box-wrap'>
        <InputBox label='아이디' placeholder='아이디 입력' />
        <InputBox label='비밀번호' placeholder='비밀번호 입력' />
        <InputBox label='비밀번호 확인' placeholder='비밀번호 확인' />
        <div className='go-to-login'>이미 계정이 있나요? <Link to='/login' style={{color: '#3F4142'}}>로그인</Link></div>
      </div>

      <BottomButton title='가입하기' />
    </div>
  )
}

export default Signup