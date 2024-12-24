import axios from 'axios';
import ApplyButton from '../ApplyButton';
import ApplyInfo from '../ApplyInfo';
import ApplyInput from '../ApplyInput';
import './style.css'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import instance from "../../lids/axios/instance";

interface ApplyDetail {
  title:string;
  info:string;
  firstLabel:string;
  firstPlaceholder:string;
  secondLabel:string;
  secondPlaceholder:string;
}

const ApplyDetail = (props:ApplyDetail) => {
  const { title, info, firstLabel, firstPlaceholder, secondLabel, secondPlaceholder } = props;
  const [firstData, setFirstData] = useState<string>('');
  const [secondData, setSecondData] = useState<string>('');

  const navigate = useNavigate()

  const getMe = async() => {
    try{
      const res = await instance.get(`/users/me`);
      if(res){
        console.log(res)
      }
    }catch(error:any) {
      navigate("/login");
      console.log(error)
    };
  };

  const submit = async() => {
    if(title==='노래 신청' && firstData===''){
      alert('신청자명을 입력해주세요!');
      return
    };

    if(secondData===''){
      alert('모든 내용을 입력해 주세요!');
      return
    };

    const endpoint = title==='노래 신청'
    ? `${import.meta.env.VITE_SERVER_URL}/musics`
    : `${import.meta.env.VITE_SERVER_URL}/storys`;

    try{
      const res = await axios.post(endpoint, {
        firstData, secondData
      })
      console.log(res)
      if(res){
        alert('게시 완료');
        navigate('/apply-page')
      }
    }catch(error:any){
      console.log(error)
    };
  };

  const handleFirstlabel = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstData(e.target.value);
  };

  const handleSecondlabel = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSecondData(e.target.value);
  };

  useEffect(() => {
    getMe();
  }, []);

  return (
    <div className='apply-detail-box'>
      <div className='apply-detail-wrap'>
        <ApplyInfo 
          title={title}
          info={info}
        />
        <ApplyButton 
          onClick={submit}
        />
      </div>


      <ApplyInput
        label={firstLabel}
        placeholder={firstPlaceholder}
        onChange={handleFirstlabel}
      />
      <ApplyInput 
        label={secondLabel}
        placeholder={secondPlaceholder}
        onChange={handleSecondlabel}
      />
    </div>
  )
}

export default ApplyDetail