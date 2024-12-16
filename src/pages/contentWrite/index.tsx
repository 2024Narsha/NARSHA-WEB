import React, { useEffect, useState, ChangeEvent, useRef} from 'react';
import { setDeadline } from './setDeadline';
import TopBar from '../../components/TopBar';
import Button from './button';
import './index.css';

const ContestWrite = () => {
  const [deadline, setDeadlineState] = useState("");
  const [files, setFiles] = useState<File[]>([]);

  const fileRef = useRef<HTMLInputElement|null>(null);

  const openFileSelector = () => {
    if(fileRef.current) {
      fileRef.current.click();
    }
  }

  useEffect(() => {
    setDeadlineState(setDeadline());
  }, []);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      setFiles(prev=>[...prev, file]);
    }
  };

  const deleteFile = (e: File) => {
    setFiles(prev=>prev.filter(item=>(item.lastModified.toString()+item.name != e.lastModified.toString()+item.name)));
  }


  return (
    <div className='centered-container'>
      <TopBar title="대회 글쓰기"/>
      <div className="container">
        
          <button title='이미지 삽입' className='add-image margin-left margin-top2'>
            <img src="public/ico_calendar.svg" alt="이미지 삽입 아이콘" />
          </button>

        <div className="form">

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
            <div onClick={openFileSelector} id='fileSelectButton'>
              <img src="/file.svg" alt="" />
              <p>파일선택</p>
            </div>
            <input type="file" id="file" hidden onChange={handleFileChange} ref={fileRef}/>
          </div>

          <div id='fileWrap'>
            {
              files.map((item)=>(
                <div className='fileItem'>
                  <div>
                    <p>{item.name}</p>
                    <p>{Math.floor(item.size / (1024))}MB</p>
                  </div>
                  <div onClick={()=>deleteFile(item)}>
                    <img src='/deleteFile.svg' alt=''/>
                  </div>
                </div>
              ))
            }
          </div>
          <div id='spacer'></div>

          {/* 게시 버튼 */}
          <Button onClick={() => console.log("버튼 클릭")}>게시</Button>
        </div>
      </div>

    </div>
  );
};

export default ContestWrite;
