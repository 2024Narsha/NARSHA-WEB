import React, { useState } from 'react';
import './volunteer.css';
import OptionBar from '../../components/OptionBar';
import VolunteerItem from '../../components/volunteerItem/Item';

const Volunteer: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="volunteer-container">
      {/* OptionBar: 헤더 고정 */}
      <div className="option-bar-wrapper">
        <OptionBar 
          title="봉사활동 조회"
          loption="평일"
          roption="주말"
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
          previewContent={`현재 카테고리: ${selectedCategory}`}
          posterUrl="https://example.com/poster.jpg"
        />

        <VolunteerItem
          title="입학설명회 도우미"
          previewContent={`현재 카테고리: ${selectedCategory}`}
        />
      </div>
    </div>
  );
};

export default Volunteer;