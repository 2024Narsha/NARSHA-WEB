import { Link } from 'react-router-dom';
import './style.css'
import BottomButton from '../../components/BottomButton';

const Signup = () => {
  return (
    <div>
      <div></div>

      <>이미 계정이 있나요?</><Link to='/login'>로그인</Link>
      <BottomButton title='가입하기' />
    </div>
  )
}

export default Signup