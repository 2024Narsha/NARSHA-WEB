
import { Link } from 'react-router-dom';
import ApplyInfo from '../ApplyInfo';
import './style.css'

interface Apply {
  title:string;
  info:string;
}

const Apply = (props:Apply) => {
  const { title, info } = props;

  const link:string = title==='노래 신청' ? '/song-apply' : '/story-apply';

  return (
    <div className='apply-box'>
      <ApplyInfo 
        title={title}
        info={info}
      />
      <Link to={link}><img src={`/rightArrow.png`} className='right-arrow-img' /></Link>
    </div>
  )
}

export default Apply