import React, { useState, ChangeEvent, useRef} from 'react';
import TopBar from '../../components/TopBar';
import Button from './button';
import './index.css';
// import ""
import watodoAxios from '../../lids/axios/instance';

const VolunterWrite = () => {
  const [files, setFiles] = useState<File[]>([]);

  const fileRef = useRef<HTMLInputElement|null>(null);
  
  const [title, setTitle] = useState('');
  const [inSchool, setInScholl] = useState('평일');
  const [time,setTime] = useState('');
  const [details, setDetails] = useState('');

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }

  const handleInSchool = (e:React.ChangeEvent<HTMLSelectElement>) => {
    setInScholl(e.target.value)
  }

  const handleTime = (e:React.ChangeEvent<HTMLSelectElement>) => {
    setTime(e.target.value)
  }

  const handleDetails = (e:React.ChangeEvent<HTMLTextAreaElement>) => { 
    setDetails(e.target.value)
  }
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

  const uploadContest = async () => {
    const formData = {
      title,
      details,
      time,
      inSchool,
      files
    };

    try{
      const res = await watodoAxios.post(`${import.meta.env.VITE_SERVER_URL}/volunteer`, formData)
      console.log("Response:", res.data);
    }catch(error:any){
      console.log(error)
    }
  }


  return (
    <div className='content-write-container'>
    <TopBar title="대회 글쓰기"/>
    <div className='centered-container'>
      <div className="container">

        <div className="form">

          {/* 제목 입력 */}
          <div className='form-group'>
          <label htmlFor="title" className='margin-left'>제목</label>
          <input
            type="text"
            id="title"
            placeholder="제목을 입력해 주세요"
            className='title-input margin'
            onChange={handleTitle}
          />
          </div>

          {/* 교내 or 교외 선택 */}
          <div className='form-group'>
          <label htmlFor="location" className='margin-left'>교내 or 교외</label>
          <select id="location" className='margin border' title="교내 or 교외 선택" onChange={handleInSchool}>
            <option value="평일">평일</option>
            <option value="주말">주말</option>
          </select>
          </div>

          <div className='form-group'>
          <label htmlFor="location" className='margin-left'>오전 or 오후</label>
          <select id="location" className='margin border' title="오전 오후 선택" onChange={handleTime}>
            <option value='오전'>오전</option>
            <option value='오후'>오후</option>
            <option value='전체'>전체</option>
          </select>
          </div>

          {/* 본문 입력 */}
          <div className='form-group'>
          <label htmlFor="content" className='margin-left'>본문</label>
          <textarea
            id="content"
            className='margin textarea border'
            placeholder="대회 내용을 입력해 주세요 &#13;&#10;&#13;&#10; 예시: 주최, 장소, 주제, 분야 등"
            rows={4}
            onChange={handleDetails}
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
          <Button onClick={uploadContest}>게시</Button>
        </div>
      </div>

    </div>
    </div>
  );

}

export default VolunterWrite;