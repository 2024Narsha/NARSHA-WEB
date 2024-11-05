import React, { useEffect, useState } from 'react';
import { setDeadline } from './setDeadline';
import Header from '../../components/Header/Header';
import './index.css';

const ContestWrite = () => {
  const [deadline, setDeadlineState] = useState("");

  useEffect(() => {
    setDeadlineState(setDeadline("2024-10-12"));
  }, []);

  return (
    <div className='container'>
      <div>
        <Header />
      </div>
      <div className="container">
        <header className="tab-bar">
          <button className="back-button">
            <img src="path/to/arrow-back-icon.svg" alt="Back" />
          </button>
          <h2 className="title">글쓰기</h2>
        </header>

        <form className="form">
          {/* 제목 입력 */}
          <label htmlFor="title">제목</label>
          <input
            type="text"
            id="title"
            placeholder="제목을 입력해 주세요"
          />

          {/* 교내 or 교외 선택 */}
          <label htmlFor="location">교내 or 교외</label>
          <select id="location" title="교내 or 교외 선택">
            <option value="교내">교내</option>
            <option value="교외">교외</option>
          </select>

          {/* 신청 마감일 */}
          <label htmlFor="deadline">신청 마감일</label>
          <input
            id="deadline"
            type="date"
            value={deadline}
            onChange={(e) => setDeadlineState(e.target.value)}
          />

          {/* 본문 입력 */}
          <label htmlFor="content">본문</label>
          <textarea
            id="content"
            placeholder="대회 내용을 입력해 주세요"
            rows={4}
          />

          {/* 첨부파일 */}
          <div className="file-upload">
            <label htmlFor="file">첨부파일</label>
            <button type="button">
              파일 선택
            </button>
            <input type="file" id="file" hidden />
          </div>

          {/* 게시 버튼 */}
          <button type="submit" className="submit-button">
            게시
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContestWrite;
