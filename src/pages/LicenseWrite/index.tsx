import TopBar from "../../components/TopBar";
import Button from "./Button";

const LicenseWrite = () => {
  return(
    <div className='centered-container'>
    <TopBar title="자격증 글쓰기"/>
    <div className="container">
    
      <button title='이미지 삽입' className='add-image margin-left margin-top2'>
        <img src="public/ico_calendar.svg" alt="이미지 삽입 아이콘" />
      </button>

    <form className="form">

      {/* 제목 입력 */}
      <div className='form-group'>
      <label htmlFor="title" className='margin-left'>제목</label>
      <input
        type="text"
        id="title"
        placeholder="제목을 입력해 주세요"
        className='title-input margin'
      />
      </div>

      <div className='form-group'>
      <label htmlFor="location" className='margin-left'></label>
      <select id="location" className='margin border' title="정기대회 유무 선택">
        <option value="해당사항 없음">해당사항 없음</option>
        <option value="정기대회">정기대회</option>
      </select>
      </div>

      {/* 교내 or 교외 선택 */}
      <div className='form-group'>
      <label htmlFor="location" className='margin-left'>교내 or 교외</label>
      <select id="location" className='margin border' title="교내 or 교외 선택">
        <option value="교내">교내</option>
        <option value="교외">교외</option>
      </select>
      </div>

      <div className='form-group'>
      <label htmlFor="location" className='margin-left'>대회 분야</label>
      <select id="location" className='margin border' title="대회 분야 선택">
        <option value="공통">공통</option>
        <option value="교외">정보보안</option>
        <option value="아이디어톤">아이디어톤</option>
        <option value="해커톤">해커톤</option>
      </select>
      </div>

      <Button onClick={() => console.log("버튼 클릭")}>게시</Button>
    </form>
  </div>
</div>
  );
}

export default LicenseWrite