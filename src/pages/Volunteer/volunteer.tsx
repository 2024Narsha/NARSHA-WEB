import React, { useState } from 'react';
import './volunteer.css';
import OptionBar from '../../components/OptionBar';
import VolunteerItem from '../../components/volunteerItem/Item';
import './volunteer.css'

const Volunteer = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="license-container">
      <OptionBar 
        title="봉사활동 조회"
        loption="평일"
        roption="주말"
      />

      <div className="category-buttons-container">
        {['전체', '오전', '오후'].map((category) => (
          <button
            key={category}
            className={`category-button ${
              selectedCategory === category ? 'selected' : ''
            }`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <VolunteerItem
        title="급식도우미 추가모집"
        previewContent={`${selectedCategory}`}
        posterUrl="https://example.com/poster.jpg"
      />

      <VolunteerItem
        title="입학설명회 도우미"
        previewContent={`${selectedCategory}`}
      />
    </div>
  );
};

export default Volunteer;