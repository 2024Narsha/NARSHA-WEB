import Apply from '../../components/Apply'
import Header from '../../components/Header/Header'
import OptionBar from '../../components/OptionBar'
import './style.css'

const ApplyPage = () => {
  return (
    <div className='apply-page-container'>
      <Header />
      <OptionBar
        title='학생회&방송부'
        loption='노래 & 사연신청'
        roption='학생회 행사'
      />

      <div className='apply-content'> 
      <Apply 
        title='노래 신청'
        info='점심시간에 듣고 싶은 노래를 신청해 주세요'
      />
      
      <Apply 
        title='사연 신청'
        info='여러분의 사연을 신청해 주세요'
      />
      </div>
    </div>
  )
}

export default ApplyPage