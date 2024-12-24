import { useEffect, useState } from 'react';
import './style.css'
import { Link } from 'react-router-dom';

interface TopBar {
  title:string;
}

const TopBar = (props:TopBar) => {
  const { title } = props;
  const [ backLink, setBackLink ] = useState<string>('/');
  
  useEffect(() => {
    // title에 따라 backLink 값을 설정
    if (title === '노래 신청' || title === '사연 신청') {
      setBackLink('/apply-page');
    } else if (title === '행사 상세' || title === '학생회 글쓰기') {
      setBackLink('/students');
    } else if (title === '자격증 글쓰기') {
      setBackLink('/license');
    } else if (title === '봉사활동 글쓰기') {
      setBackLink('/volunteer');
    }
  }, [title]); // title 값이 변경 시 useEffect 실행

  return (
    <div className='top-bar-container'>
      <Link to={backLink}><img src={`/arrow.png`} alt='뒤로가기'/></Link>
      <div className='top-bar-title'>{title}</div>
    </div>
  )
}

export default TopBar