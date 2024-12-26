import React, { useState, ChangeEvent, useRef} from 'react';
import TopBar from '../../components/TopBar';
import Button from './button';
import './index.css';
import watodoAxios from '../../lids/axios/instance';

const VolunterWrite = () => {

  const [title, setTitle] = useState('');
  const [weekend, setWeekend] = useState<Boolean>(false);
  const [afternoon,setAfternoon] = useState<Boolean>(true);
  const [description, setDescription] = useState('');

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }

  const handleWeekend = (e:React.ChangeEvent<HTMLSelectElement>) => {
    setWeekend(Boolean(e.target.value))
  }

  const handleTime = (e:React.ChangeEvent<HTMLSelectElement>) => {
    setAfternoon(Boolean(e.target.value))
  }

  const handleDetails = (e:React.ChangeEvent<HTMLTextAreaElement>) => { 
    setDescription(e.target.value)
  }

  const uploadVolunteer = async () => {
    const formData = {
      title,
      weekend,
      afternoon,
      description
    };

    try{
      const res = await watodoAxios.post(`${import.meta.env.VITE_SERVER_URL}/volunteers`, formData)
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
          <label htmlFor="location" className='margin-left'>평일 ro 주말</label>
          <select id="location" className='margin border' title="교내 or 교외 선택" onChange={handleWeekend}>
            <option value="false">평일</option>
            <option value="true">주말</option>
          </select>
          </div>

          <div className='form-group'>
          <label htmlFor="location" className='margin-left'>오전 or 오후</label>
          <select id="location" className='margin border' title="오전 오후 선택" onChange={handleTime}>
            <option value='false'>오전</option>
            <option value='true'>오후</option>
            <option value='false'>전체</option>
          </select>
          </div>

          {/* 본문 입력 */}
          <div className='form-group'>
          <label htmlFor="content" className='margin-left'>본문</label>
          <textarea
            id="content"
            className='margin textarea border'
            placeholder="대회 내용을 입력해 주세요 &#13;&#10;&#13;&#10;예시: 주최, 장소, 주제, 분야 등"
            rows={4}
            onChange={handleDetails}
          />
          </div>

          {/* 게시 버튼 */}
          <Button onClick={uploadVolunteer}>게시</Button>
        </div>
      </div>

    </div>
    </div>
  );

}

export default VolunterWrite;