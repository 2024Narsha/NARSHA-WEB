import ApplyDetail from '../../components/ApplyDetail'
import TopBar from '../../components/TopBar'
import './style.css'

const SongApply = () => {
  return (
    <div className='song-apply-container'>
      <TopBar title='노래 신청'/>

      <ApplyDetail 
        title='노래 신청'
        info='점심시간에 듣고 싶은 노래를 신청해 주세요'
        firstLabel='신청곡 명 *'
        firstPlaceholder='신청하고 싶은 곡의 이름을 입력해 주세요'
        secondLabel='신청곡 링크 *'
        secondPlaceholder='신청하고 싶은 곡의 링크를 입력해 주세요'
      />
    </div>
  )
}

export default SongApply