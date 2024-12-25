import React, { useState, ChangeEvent, useRef} from 'react';
import TopBar from '../../components/TopBar';
import Button from './button';
import './index.css';
import watodoAxios from '../../lids/axios/instance';

const StudentsWrite = () => {
  const [files, setFiles] = useState<File[]>([]);

  const fileRef = useRef<HTMLInputElement|null>(null);
  
  const [image, setImage] = useState<String[]>([]);
  const [title, setTitle] = useState('');
  const [reguler,setReguler] = useState('');
  const [inSchool, setInScholl] = useState('true');
  const [area,setArea] = useState(1);
  const [deadline, setDeadlineState] = useState("");
  const [details, setDetails] = useState('');

  const handleImageChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const image = e.target.files[0];
      setImage(prev=>[...prev, image.toString()]);
    }
  }

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }

  const handleReguler = (e:React.ChangeEvent<HTMLSelectElement>)=>{
    setReguler(e.target.value)
  }

  const handleInSchool = (e:React.ChangeEvent<HTMLSelectElement>) => {
    setInScholl(e.target.value)
  }

  const handleArea = (e:React.ChangeEvent<HTMLSelectElement>) => {
    setArea(parseInt(e.target.value, 10))
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
      deadline,
      area,
      inSchool,
      image
    };

    try{
      const res = await watodoAxios.post(`${import.meta.env.VITE_SERVER_URL}/posts`, formData)
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
        
          <button title='이미지 삽입' className='add-image margin-left margin-top2' onClick={openFileSelector}>
            <img src="public/ico_calendar.svg" alt="이미지 삽입 아이콘"  />
            <input type="image" id="image" hidden onChange={handleImageChange} ref={fileRef}/>
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
            onChange={handleTitle}
          />
          </div>

          <div className='form-group'>
          <label htmlFor="location" className='margin-left'>정기대회 유무</label>
          <select id="location" className='margin border' title="정기대회 유무 선택" onChange={handleReguler}>
            <option value="해당사항 없음">해당사항 없음</option>
            <option value="정기대회">정기대회</option>
          </select>
          </div>

          {/* 교내 or 교외 선택 */}
          <div className='form-group'>
          <label htmlFor="location" className='margin-left'>교내 or 교외</label>
          <select id="location" className='margin border' title="교내 or 교외 선택" onChange={handleInSchool}>
            <option value="true">교내</option>
            <option value="false">교외</option>
          </select>
          </div>

          <div className='form-group'>
          <label htmlFor="location" className='margin-left'>대회 분야</label>
          <select id="location" className='margin border' title="대회 분야 선택" onChange={handleArea}>
            <option value={1}>공통</option>
            <option value={2}>정보보안</option>
            <option value={3}>아이디어톤</option>
            <option value={4}>해커톤</option>
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
};

export default StudentsWrite;
