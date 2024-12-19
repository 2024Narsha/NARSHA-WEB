import { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header'; // header import
import LicenseItem from '../../components/LicenseItem';
import OptionBar from '../../components/OptionBar';
import './style.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import instance from "../../lids/axios/instance";

const License = () => {
  const ACCESS_TOKEN =
    localStorage.getItem(
      "ACCESS_TOKEN"
    );
  const [licenseTitle, setLicenseTitle] = useState<string>('title');
  const [field, setField] = useState<string>('subject');
  const [niceAble, setNiceAble] = useState<boolean>(false);

  const navigate = useNavigate();

  const getMe = async() => {
    try{
      const res = await instance.get(`/auth/me`);
    }catch (err) {
    navigate("/login");
    };
  };

  const getLicenseItem = async(schoolType: boolean) => {
    try {
      const endpoint = schoolType 
        ? `${import.meta.env.VITE_SERVER_URL}/licenses/in`
        : `${import.meta.env.VITE_SERVER_URL}/licenses/out`;

      const res = await axios.get(endpoint);
      
      if (res.data && res.data.licenseTitle && res.data.Field !== undefined) {
        setLicenseTitle(res.data.licenseTitle);
        setField(res.data.Field);
        setNiceAble(res.data.niceAble);
      }else{
        console.log('불러올 값이 없음')
      }
    } catch(error:any) {
      alert('네트워크 에러!');
    }
  };

  const handleOptionChange = (option: string) => {
    const newSchoolType = option === '교내';
    getLicenseItem(newSchoolType);
  };

  useEffect(() => {
    getMe();
  }, []);

  return (
    <div className='license-container'>
      <Header />
      <OptionBar 
        title='자격증 추천'
        loption='교내'
        roption='교외'
        onOptionChange={handleOptionChange}
      />
      <div className='license-contents'>
        <LicenseItem licenseName={licenseTitle} subject={field} status={niceAble ? '나이스등재 가능' : '나이스등재 불가능'} />
      </div>

      <Footer />
    </div>
  )
}

export default License