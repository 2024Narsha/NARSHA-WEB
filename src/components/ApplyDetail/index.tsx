import ApplyButton from '../ApplyButton';
import ApplyInfo from '../ApplyInfo';
import ApplyInput from '../ApplyInput';
import './style.css'

interface ApplyDetail {
  title:string;
  info:string;
  firstLabel:string;
  firstPlaceholder:string;
  secondLabel:string;
  secondPlaceholder:string;
}

const ApplyDetail = (props:ApplyDetail) => {
  const { title, info, firstLabel, firstPlaceholder, secondLabel, secondPlaceholder } = props;

  return (
    <div className='apply-detail-box'>
      <div className='apply-detail-wrap'>
        <ApplyInfo 
          title={title}
          info={info}
        />
        <ApplyButton />
      </div>


      <ApplyInput
        label={firstLabel}
        placeholder={firstPlaceholder}
      />
      <ApplyInput 
        label={secondLabel}
        placeholder={secondPlaceholder}
      />
    </div>
  )
}

export default ApplyDetail