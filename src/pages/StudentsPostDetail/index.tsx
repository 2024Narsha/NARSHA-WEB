import TopBar from '../../components/TopBar'
import './style.css'

const StudentsPostDetail = () => {
  return (
    <div className='students-post-detail-container'>
      <TopBar title='행사 상세' />

      <img className='students-post-detail-img' src={`/sakureDetail.png`} />
      <div className='students-post-detail-title'>[2024 GTEC Livig & Furniture 디자인 챌린지 공모전]</div>
      <div className='students-post-detail-info'>
        <p>안녕하세요, 학생회입니다.<br></br>
        이번주 토요일 (05.11)에 진행하는 홈커밍데이 Q&A<br></br>
        질문을 받으려합니다. 진로나 취업 관련된 고민을<br></br>
        설문지에 작성하면 멘토가 답변하는 방식으로 Q&A가 진행됩니다.<br></br>
        질문이 채택되면 문화상품권을 드릴 예정입니다🎉<br></br>
        많은 관심 부탁드립니다.<br></br><br></br>

        Q&A 설문지<br></br>
        https://docs.google.com/forms/d/e/1FAIpQLSev4DAD3fk_-s1eLZfzPu_XZmSGWVL0SdnxUiGmuvMrd52tuw/viewform</p>
      </div>
    </div>
  )
}

export default StudentsPostDetail