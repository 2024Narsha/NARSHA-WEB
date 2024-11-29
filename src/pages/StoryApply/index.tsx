import ApplyDetail from '../../components/ApplyDetail'
import TopBar from '../../components/TopBar'
import './style.css'

const StoryApply = () => {
  return (
    <div className='story-apply-container'>
      <TopBar title='사연 신청'/>

      <ApplyDetail 
        title='사연 신청'
        info='여러분의 사연을 신청해 주세요'
        firstLabel='신청자명'
        firstPlaceholder='신청자명을 적어주세요'
        secondLabel='사연 작성 *'
        secondPlaceholder='자신의 사연을 자유롭게 작성해 주세요'
      />
    </div>
  )
}

export default StoryApply