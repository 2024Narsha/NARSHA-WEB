import { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header'; // header import
import LicenseItem from '../../components/LicenseItem';
import OptionBar from '../../components/OptionBar';
import './style.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import instance from "../../lids/axios/instance";

interface License {
  licenseId: number;
  licenseTitle: string;
  field: string;
  niceAble: boolean;
  inSchool: boolean;
  author: {
    idx: number;
    userId: string;
    role: string;
  };
}

const License = () => {
  const ACCESS_TOKEN =
    localStorage.getItem(
      "ACCESS_TOKEN"
    );
  const [licenses, setLicenses] = useState<License[]>([]);
  const [selectedOption, setSelectedOption] = useState<boolean>(false);

  const navigate = useNavigate();

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

  const getLicenseItem = async() => {
    try {
      const endpoint = !selectedOption ? '/licenses/in' : '/licenses/out';
      const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}${endpoint}`);
      
      if (res.data) {
        setLicenses(res.data);
      }else{
        console.log('불러올 값이 없음')
      }
    } catch(error:any) {
      alert('네트워크 에러!');
    }
  };

  const handleOptionChange = (option: string) => {
    const schoolType = option === '교외';
    setSelectedOption(schoolType);
  };

  useEffect(() => {
    getMe();
  }, []);

  useEffect(() => {
    getLicenseItem();
  },[selectedOption]);

  return (
    <div className='license-container'>
      <Header />
      <OptionBar 
        title='자격증 추천'
        loption='교내'
        roption='교외'
        onOption={selectedOption}
        onOptionChange={handleOptionChange}
      />
      <div className='license-contents'>
        {licenses.map((item: License) => (
            <LicenseItem
              key={item.licenseId}
              licenseName={item.licenseTitle}
              subject={item.field}
              status={item.niceAble ? '나이스등재 가능' : '나이스등재 불가능'} 
            />
          ))
        }
      </div>

      <Footer />
    </div>
  )
}

export default License