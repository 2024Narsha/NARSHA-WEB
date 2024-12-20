import React, { useState, ChangeEvent, useRef} from 'react';
import TopBar from '../../components/TopBar';
import Button from './button';
import './index.css';

const StudentsWrite = () => {
  const [files, setFiles] = useState<File[]>([]);

  const fileRef = useRef<HTMLInputElement|null>(null);

  const openFileSelector = () => {
    if(fileRef.current) {
      fileRef.current.click();
    }
  }

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
    <div className='content-write-container'>
    <TopBar title="대회 글쓰기"/>
    <div className='centered-container'>
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

          {/* 본문 입력 */}
          <div className='form-group'>
          <label htmlFor="content" className='margin-left'>본문</label>
          <textarea
            id="content"
            className='margin textarea border'
            placeholder="대회 내용을 입력해 주세요 &#13;&#10;&#13;&#10; 예시: 주최, 장소, 주제, 분야 등"
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
    </div>
  );
};

export default StudentsWrite;
