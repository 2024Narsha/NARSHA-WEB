import React, { useState, useEffect } from 'react';
import './volunteer.css';
import OptionBar from '../../components/OptionBar';
import VolunteerItem from '../../components/volunteerItem/Item';
import WriteButton from '../../components/WriteButton';
import instance from "../../lids/axios/instance";

interface VolunteerData {
  volunteerId: number;
  title: string;
  weekend: boolean;
  afternoon: boolean;
  description: string;
}

interface UserData {
  idx: number;
  userId: string;
  role: string;
}

const Volunteer: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [optionState, setOptionState] = useState<boolean>(false); // false: 평일, true: 주말
  const [volunteers, setVolunteers] = useState<VolunteerData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const [userData, setUserData] = useState<UserData | null>(null);

  const getMe = async() => {
    try{
      const res = await instance.get('users/me');
      if(res.data){
        setUserData(res.data.data)
      }
    }catch(error:any){
      console.log(error)
    };
  };

  const fetchVolunteers = async (weekend: boolean, afternoon: boolean | null) => {
    setIsLoading(true);
    setError('');
    
    try {
      let url = `${import.meta.env.VITE_SERVER_URL}/volunteers/search/weekend/${weekend}`;
      if (afternoon !== null) {
        url += `/afternoon/${afternoon}`;
      }
      
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('데이터를 불러오는데 실패했습니다.');
      }
      
      const data = await response.json();
      setVolunteers(data);
    } catch (err) {
      setError('데이터를 불러오는데 실패했습니다.');
      setVolunteers([]);
    } finally {
      setIsLoading(false);
    }
  };

  // 평일/주말 변경 처리
  const handleOptionChange = (option: string) => {
    const newOptionState = option === '주말';
    setOptionState(newOptionState);
    
    if (selectedCategory === '전체') {
      fetchVolunteers(newOptionState, null);
    } else {
      fetchVolunteers(newOptionState, selectedCategory === '오후');
    }
  };

  // 카테고리 변경 처리
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    
    if (category === '전체') {
      fetchVolunteers(optionState, null);
    } else {
      fetchVolunteers(optionState, category === '오후');
    }
  };

  // 초기 데이터 로딩
  useEffect(() => {
    fetchVolunteers(false, null);
  }, []);

  const shouldShowButton = (
    userData?.userId === 'admin' || 
    userData?.role === 'admin'
  );

  useEffect(()=>{
    getMe()
  }, [])

  return (
    <div className='write-button-wrap'>

    <div className="volunteer-container">
      <div className="option-bar-wrapper">
        <OptionBar
          title="봉사활동 조회"
          loption="평일"
          roption="주말"
          onOption={optionState}
          onOptionChange={handleOptionChange}
        />
      </div>

      <div className="category-button-v-container">
        {['전체', '오전', '오후'].map((category) => (
          <button
            key={category}
            className={`category-button-v ${
              selectedCategory === category ? 'selected' : ''
            }`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="volunteer-items-list">
        {isLoading ? (
          <div className="loading-message">불러오는 중...</div>
        ) : error ? (
          <div className="error-message">{error}</div>
        ) : volunteers.length === 0 ? (
          <div className="no-data-message">봉사활동이 없습니다.</div>
        ) : (
          volunteers.map((volunteer) => (
            <VolunteerItem
              key={volunteer.volunteerId}
              title={volunteer.title}
              previewContent={volunteer.description}
            />
          ))
        )}
      </div>
    </div>

      {/* 참가하기 버튼 (선생인 경우만 표시) */}
      {shouldShowButton && (
        <WriteButton path='봉사'/>
        )}
    </div>
  );
};

export default Volunteer; 