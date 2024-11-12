import './style.css'
import BottomButton from "../BottomButton";
import Header from "../Header/Header";
import TopBar from "../TopBar";

const PostDetail = () => {

  const startDate:string = '2024-09-23';
  const endDate:string = '10.18';

  const location:string = '교내';

  const title:string = '[2024 GTEC Livig & Furniture 디자인 챌린지 공모전]'
  const text:string = '"2024 GTEC Living & Furniture" 디자인 챌린지 공모전 안내 공모주제 : 다양한 생활용품 및 가구 둥의 제품 만들기 참여대상 : 고등학생 및 대학생으로 개인 또는 팀 (최대 4명) 참가방법 :https://url.kr/tu3vcx  홈페이지에서 양식 다운로드 후 작성하여 이메일로 신청서 제출(제출서류 : 참가신청서 1부, 최종보고서 1부 / 이메일 주소 : indae.choi@gtec.ac.kr) 접수기간 : 신청서 접수 기간 : 2024.09.23. ~ 10.18 / 최종보고서, 제작물 제출 : 2024.11.25. ~ 11.29 시상내역 : 금상(1팀, 100만원 상금 및 트로피, 상장), 은상(2팀, 50만원 및 트로피, 상장), 동상(2팀, 25만원 및 트로피, 상장), 아이디어상(5팀, 5만원 기프트콘) 기타사항 : 첨부된 공모전 포스터 내용 참조'

  return (
    <div className="container">
      <Header />
      <TopBar />

      <div className='post-detail-img-wrap'>
        <div className=''>D-13</div>
        <img src={`${process.env.PUBLIC_URL}/kaist.png`} />
      </div>

      <div className='post-detail-content-wrap'>
      </div>

      <BottomButton />
    </div>
  )
}

export default PostDetail