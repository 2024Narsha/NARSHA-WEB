import ApplyInfo from '../../components/ApplyInfo';
import ApplyInput from '../../components/ApplyInput';
import './style.css'

const SongApply = () => {
  return (
    <div className='apply-detail-box'>
      <ApplyInfo 
        title='노래 신청'
        info='점심시간에 듣고 싶은 노래를 신청해 주세요'
      />

      <ApplyInput
        label='신청곡 명 *'
        placeholder='신청하고 싶은 곡의 이름을 입력해 주세요'
      />
      <ApplyInput 
        label='신청곡 링크 *'
        placeholder='신청하고 싶은 곡의 링크를 입력해 주세요'
      />
    </div>
  )
}

export default SongApply