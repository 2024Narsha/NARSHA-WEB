import React, { useEffect, useState } from 'react';
import { setDeadline } from './setDeadline';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import TabBar from './tab-bar'
import Button from './button';
import './index.css';

const ContestWrite = () => {
  const [deadline, setDeadlineState] = useState("");

  useEffect(() => {
    setDeadlineState(setDeadline());
}, []);

  return (
    <body>
      
    
    <div className='centered-container'>
        <Header />
        <TabBar />
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
          <label htmlFor="location" className='margin-left'>정기대회 유무</label>
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

          {/* 신청 마감일 */}
          <div className='form-group'>
          <label htmlFor="deadline" className='margin-left'>신청 마감일</label>
          <input
            id="deadline"
            className='margin border'
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
            className='margin textarea border'
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
          <Button/>
        </form>
      </div>
      <Footer />
    </div>
    </body>
  );
};

export default ContestWrite;
