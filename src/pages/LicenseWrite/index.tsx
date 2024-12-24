import React, { useEffect, useState } from "react";
import TopBar from "../../components/TopBar";
import { Button, Box, Option, Div, Select, Input, Label } from "./WriteStyle";
import watodoAxios from "./watodoAxios";
import { useNavigate } from "react-router-dom";
import instance from "../../lids/axios/instance";

const LicenseWrite = () => {
  const ACCESS_TOKEN = localStorage.getItem('ACCESS_TOKEN');

  const [inSchool, setInSchool] = useState<boolean>(true);
  const [licenseTitle, setLicenseTitle] = useState<string>('');
  const [niceAble, setNiceAble] = useState<boolean>(true);
  const [field, setField] = useState<string>('공통');

  const navigate = useNavigate();

  const getMe = async() => {
    try{
      const res = await instance.get(`/users/me`);
      if(res){
        console.log(res.data)
      }
    }catch(error:any) {
      navigate("/login");
      console.log(error)
    };
  };

  const handleLicenseTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLicenseTitle(e.target.value);
  }
  
  const handleInSchool = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setInSchool(e.target.value === 'true');
  }

  const handleNiceAble = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNiceAble(e.target.value === 'true');
  }

  const handleField = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setField(e.target.value);
  }

  const uploadLicense = async () => {
    const formData = {
      licenseTitle, 
      niceAble, 
      field,  
      inSchool 
    };

    try{
      const res = await watodoAxios.post(`${import.meta.env.VITE_SERVER_URL}/licenses`, formData, 
      if (res.data.data) {
        alert('자격증 정보가 성공적으로 등록되었습니다.');
      }
    }catch(error:any){
      if (error.response?.status === 403) {
        alert('권한이 없거나 로그인이 필요합니다.');
      } else {
        alert('자격증 정보 등록에 실패했습니다.');
      }
    };
  };

  useEffect(() => {
    getMe();
  }, []);

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
              onChange={handleLicenseTitle}
              value={licenseTitle}
              var="title"  
            />
          </Box>

          <Box var="form-group">
          <Label htmlFor="location" className='margin-left'>교내 or 교외</Label>
          <Select id="location1" title="교내 or 교외 선택" onChange={handleInSchool}>
            <Option value="true">교내</Option>
            <Option value="false">교외</Option>
          </Select>
          </Box>

          <Box var="form-group">
            <Label htmlFor="location" className='margin-left'>나이스등재 가능 여부</Label>
            <Select id="location2" title="나이스등재 가능 여부" onChange={handleNiceAble}>
              <Option value='true'>가능</Option>
              <Option value='false'>불가</Option>
            </Select>
          </Box>

          <Box var="form-group">
            <Label htmlFor="location" className='margin-left'>해당 분야</Label>
            <Select id="location3" title="나이스등재 가능 여부" onChange={handleField}>
              <Option value="공통">공통</Option>
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