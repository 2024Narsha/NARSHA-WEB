import React, { useEffect, useState } from 'react';
import { setDeadline } from './setDeadline';
import Header from '../../components/Header/Header';
import TabBar from './tab-bar'
import './index.css';

const ContestWrite = () => {
  const [deadline, setDeadlineState] = useState("");

  useEffect(() => {
    setDeadlineState(setDeadline("2024-10-12"));
  }, []);

  return (
    <div className='container'>
        <Header />
        <TabBar />
      <div className="container margin-top">
        
        <form className="form">

          {/* 제목 입력 */}
          <div className='form-group'>
          <label htmlFor="title" className='margin-left margin-top2'>제목</label>
          <input
            type="text"
            id="title"
            placeholder="제목을 입력해 주세요"
            className='title-input margin'
          />
          </div>

          {/* 교내 or 교외 선택 */}
          <div className='form-group'>
          <label htmlFor="location" className='margin-left'>교내 or 교외</label>
          <select id="location" className='margin' title="교내 or 교외 선택">
            <option value="교내">교내</option>
            <option value="교외">교외</option>
          </select>
          </div>

          {/* 신청 마감일 */}
          <div className='form-group'>
          <label htmlFor="deadline" className='margin-left'>신청 마감일</label>
          <input
            id="deadline"
            className='margin'
            type="date"
            value={deadline}
            onChange={(e) => setDeadlineState(e.target.value)}
          />
          </div>

          {/* 본문 입력 */}
          <div className='form-group'>
          <label htmlFor="content" className='margin-left'>본문</label>
          <textarea
            id="content"
            className='margin'
            placeholder="대회 내용을 입력해 주세요"
            rows={4}
          />
          </div>
          {/* 첨부파일 */}
          <div className="file-upload">
            <label htmlFor="file" >첨부파일</label>
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
