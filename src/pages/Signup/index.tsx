import { Link } from 'react-router-dom';
import './style.css'

const Signup = () => {
  return (
    <>
      <>
        <>회원가입</>
        <>수상한 고래를 이용하기 전,</>
        <>회원가입이 필요해요.</>

        <>
        <>아이디</>
        <></>
        <>비밀번호</>
        <></>
        <>비밀번호 확인</>
        <></>
        </>
        <>이미 계정이 있나요?</><Link to='/login'>로그인</Link>
        
        <>가입하기</>
      </>
    </>
  )
}

export default Signup