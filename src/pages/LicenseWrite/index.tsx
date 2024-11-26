import React, { useState } from "react";
import TopBar from "../../components/TopBar";
import { Button, Box, Option, Div, Select } from "./WriteStyle";
import axios from "axios";

const LicenseWrite = () => {
  const accessToken = localStorage.getItem('accessToken');
  const [title, setTitle] = useState('');
  const [niceAccept, setNiceAccept] = useState('가능');
  const [subject, setSubject] = useState('프로그래밍');

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }

  const handleNiceAcceept = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNiceAccept(e.target.value);
  }

  const handleSubject = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSubject(e.target.value);
  }

  const uploadLicense = async () => {
    try{
      const res = await axios.post("https://2024-narsha.hw0k.me/")
    }catch{

    }
  }

  return (
    <Box var="center">
      <TopBar title="자격증 글쓰기" />
      <Box var="container">
        <Div>
          <Box var="form-group">
            <label htmlFor="title" className='margin-left'>제목</label>
            <input
              type="text"
              id="title"
              placeholder="제목을 입력해 주세요"
              className='title-input margin'
              onChange={handleTitle}
              value={title}
            />
          </Box>

          <Box var="form-group">
            <label htmlFor="location" className='margin-left'>나이스등재 가능 여부</label>
            <Select id="location" title="나이스등재 가능 여부" onChange={handleNiceAcceept}>
              <Option value="가능">가능</Option>
              <Option value="불가">불가</Option>
            </Select>
          </Box>

          <Box var="form-group">
            <label htmlFor="location" className='margin-left'>해당 분야</label>
            <Select id="location" title="나이스등재 가능 여부" onChange={handleSubject}>
              <Option value="프로그래밍">프로그래밍</Option>
              <Option value="데이터베이스">데이터베이스</Option>
              <Option value="웹프로그래밍">웹프로그래밍</Option>
              <Option value="네트워크프로그래밍">네트워크프로그래밍</Option>
              <Option value="시스탬프로그래밍">시스탬프로그래밍</Option>
              <Option value="빅데이터 분석">빅데이터 분석</Option>
            </Select>
          </Box>
          <Box var="submit">
            <Button var="submit" onClick={() => console.log("버튼 클릭")}>게시</Button>
          </Box>
        </Div>
      </Box>
    </Box>
  );
}

export default LicenseWrite