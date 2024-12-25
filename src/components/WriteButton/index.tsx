import { useEffect, useState } from 'react';
import './style.css'
import { Link } from 'react-router-dom';

interface WriteButton {
  path:string;
}

const WriteButton = (props:WriteButton) => {
  const {path} = props;
  const [link, setLink] = useState<string>('/');

  useEffect(() => {
    // title에 따라 backLink 값을 설정
    if (path === '대회') {
      setLink('/contests/write');
    }else if (path === '자격증') {
      setLink('/lecense/write');
    }else if (path === '학생회') {
      setLink('/lecense/write');
    }else if (path === '봉사') {
      setLink('/lecense/write');
    }
  }, [path]);

  return (
    <Link to={link}>
      <div className='go-to-write'>
        <img src='/goToWrite.svg' />
    </div>
    </Link>
  )
}

export default WriteButton