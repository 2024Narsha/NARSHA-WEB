import './volunteer.css';
import OptionBar from '../../components/OptionBar';

const Volunteer = () => {
  return(
    <div className='license-container'>
      <OptionBar 
        title='봉사활동 조회'
        loption = '평일'
        roption = '주말'
      />
    </div>
  )
};

export default Volunteer;