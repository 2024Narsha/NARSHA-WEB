import { Link } from 'react-router-dom';
import * as S from './style'; // style 가져오기

const Signup = () => {
  return (
    <S.Body>
      <S.Wrap>
        <S.Title>회원가입</S.Title>
        <S.Info>수상한 고래를 이용하기 전,</S.Info>
        <S.Info>회원가입이 필요해요.</S.Info>

        <S.LeftWrap>
        <S.Label>아이디</S.Label>
        <S.InputBox></S.InputBox>
        <S.Label>비밀번호</S.Label>
        <S.InputBox></S.InputBox>
        <S.Label>비밀번호 확인</S.Label>
        <S.InputBox></S.InputBox>
        </S.LeftWrap>
        <S.Info>이미 계정이 있나요?</S.Info><Link to='/login'>로그인</Link>
        
        <S.Button>가입하기</S.Button>
      </S.Wrap>
    </S.Body>
  )
}

export default Signup