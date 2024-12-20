import React, { useState } from 'react';
import './volunteer.css';
import OptionBar from '../../components/OptionBar';
import VolunteerItem from '../../components/volunteerItem/Item';

const Volunteer: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleOptionChange = (option: string) => {
    const newSchoolType = option === '평일';
    // getLicenseItem(newSchoolType);
  };

  return (
    <div className="volunteer-container">
      {/* OptionBar: 헤더 고정 */}
      <div className="option-bar-wrapper">
        <OptionBar 
          title="봉사활동 조회"
          loption="평일"
          roption="주말"
          onOptionChange={handleOptionChange}
        />
      </div>

      {/* 카테고리 버튼 고정 */}
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

      {/* VolunteerItem 리스트 */}
      <div className="volunteer-items-list">
        <VolunteerItem
          title="급식도우미 추가모집"
          previewContent={`배식 도우미, 이벤트 도우미 등을 모집합니다! 🙋🏻‍♀️ 급식 당번이 되면 어떤게 좋나요? 먼저 급식봉사를 한 이후에는 급식 우선권을 얻어 누구보다 빠르게 식사를 할 수 있습니다!`} //${selectedCategory}를 사용하면 카테고리의 이름을 바꿀 수 있음
          posterUrl="https://example.com/poster.jpg"
        />

        <VolunteerItem
          title="입학설명회 도우미"
          previewContent={`교내탐방 도우미, 진로체험 도우미를 모집합니다. 입학설명회 진행 시 교내 인솔을 돕고, 시청각실에서부터 출발해 교내탐방을 안내합니다.`}
        />
      </div>
    </div>
  );
};

export default Volunteer;