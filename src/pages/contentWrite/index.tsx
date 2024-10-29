import React, { useEffect, useState } from 'react';
import { setDeadline } from './setDeadline';
import Header from '../Header';

const ContestWrite = () => {

  const [deadline, setDeadlineState] = useState("");

  useEffect(() => {
    // 기본 날짜를 설정
    setDeadlineState(setDeadline("2024-10-12"));
  }, []);

  return (
  <div>
  <Header />
  <div>
    <header>
      <button>
        <img src="path/to/arrow-back-icon.svg" alt="Back" />
      </button>
      <h2>글쓰기</h2>
    </header>

    <form>
      <label>제목</label>
      <input
        type="text"
        placeholder="제목을 입력해 주세요"
        
      />
      
      
      <select title='교내 or 교외'>
        <label>교내 or 교외</label>
        <option value="교내">교내</option>
        <option value="교외">교외</option>
      </select>

      <div>
      <label htmlFor="deadline">신청 마감일</label>
      <input 
        id="deadline" 
        type="date" 
        value={deadline} 
        onChange={(e) => setDeadlineState(e.target.value)} 
      />
    </div>

      <textarea
        placeholder="대회 내용을 입력해 주세요"
        rows={4}
      />


      <div>
        <button type="button">
          첨부파일
        </button>
        <input type="file" hidden />
      </div>


      <button type="submit">
        게시
      </button>
    </form>
  </div>
</div>
  );
};

export default ContestWrite;
