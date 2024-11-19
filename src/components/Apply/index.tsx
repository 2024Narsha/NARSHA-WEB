
import ApplyInfo from '../ApplyInfo';
import './style.css'

interface Apply {
  title:string;
  info:string;
}

const Apply = (props:Apply) => {
  const { title, info } = props;

  return (
    <div className='apply-box'>
      <ApplyInfo 
        title={title}
        info={info}
      />
      <img src={`/rightArrow.png`} className='right-arrow-img' />
    </div>
  )
}

export default Apply