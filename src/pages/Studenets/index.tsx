import OptionBar from '../../components/OptionBar'
import StudentsPost from '../../components/StudentsPost'
import './style.css'

const Students = () => {
  return (
    <div className='students-page-container'>
      <OptionBar
        title='학생회&방송부'
        loption='노래 & 사연신청'
        roption='학생회 행사'
      />

      <div className='students-content-wrap'>
        <StudentsPost src='/sakura.png' />
        <StudentsPost src='/homecoming.png' />
      </div>
    </div>
  )
}

export default Students