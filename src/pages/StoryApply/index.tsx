import ApplyInfo from '../../components/ApplyInfo';
import ApplyInput from '../../components/ApplyInput';
import './style.css'

const StoryApply = () => {
  return (
    <div className='apply-detail-box'>
      <ApplyInfo 
        title='사연 신청'
        info='여러분의 사연을 신청해 주세요'
      />

      <ApplyInput
        label='신청자명'
        placeholder='신청자명을 적어주세요'
      />
      <ApplyInput 
        label='사연 작성 *'
        placeholder='자신의 사연을 자유롭게 작성해 주세요'
      />
    </div>
  )
}

export default StoryApply