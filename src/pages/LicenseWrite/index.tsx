import React, { useState } from "react";
import TopBar from "../../components/TopBar";
import { Button, Box, Option, Div, Select, Input, Label } from "./WriteStyle";
import watodoAxios from "./watodoAxios";

const LicenseWrite = () => {
  const accessToken = localStorage.getItem('accessToken');
  const [school,setSchool] = useState("true")
  const [title, setTitle] = useState('');
  const [niceAccept, setNiceAccept] = useState("true");
  const [subject, setSubject] = useState('프로그래밍');

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }

  const handleSchool = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSchool(e.target.value)
  }

  const handleNiceAcceept = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNiceAccept(e.target.value);
  }

  const handleSubject = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSubject(e.target.value);
  }

  const uploadLicense = async () => {
    const formData = {
      title,
      school,
      niceAccept,
      subject
    };

    try{
      const res = await watodoAxios.post("https://2024-narsha.hw0k.me/licenses", formData)
      console.log("Response:", res.data);
    }catch{

    }
  }

  return (
    <Box var="center">
      <TopBar title="자격증 글쓰기" />
      <Box var="container">
        <Div>
          <Box var="form-group">
            <Label htmlFor="title" className='margin-left'>제목</Label>
            <Input
              type="text"
              id="title"
              placeholder="제목을 입력해 주세요"
              onChange={handleTitle}
              value={title}
              var="title"  
            />
          </Box>

          <Box var="form-group">
          <Label htmlFor="location" className='margin-left'>교내 or 교외</Label>
          <Select id="location" title="교내 or 교외 선택" onChange={handleSchool}>
            <Option value="true">교내</Option>
            <Option value="false">교외</Option>
          </Select>
          </Box>

          <Box var="form-group">
            <Label htmlFor="location" className='margin-left'>나이스등재 가능 여부</Label>
            <Select id="location" title="나이스등재 가능 여부" onChange={handleNiceAcceept}>
              <Option value="true">가능</Option>
              <Option value="false">불가</Option>
            </Select>
          </Box>

          <Box var="form-group">
            <Label htmlFor="location" className='margin-left'>해당 분야</Label>
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
            <Button var="submit" onClick={uploadLicense}>게시</Button>
          </Box>
        </Div>
      </Box>
    </Box>
  );
}

export default LicenseWrite