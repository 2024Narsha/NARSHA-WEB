import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './CategoryList.css'

const CategorySearch = () => {
  return (
    <div className="Search">
      <img src="/arrow.svg" alt="Back" className="search-icon-left" />
      <span>카테고리 검색</span>
      <img src="/search.svg" alt="Search" className="search-icon-right" />
    </div>
  );
};

const CategoryList = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const navigate = useNavigate();

  // 카테고리 버튼 클릭 시 상태 업데이트
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  // 검색하기 버튼 클릭 시 해당 카테고리 페이지로 이동
  const handleSearchClick = () => {
    if (!selectedCategory) {
      alert('카테고리를 선택해주세요');
    } else {
      navigate(`/category-results/${selectedCategory}`);
    }
  };

  return (
    <div className='centered-container'>
      <CategorySearch />

      {/* 카테고리 선택 버튼들 */}
      <div className="category-buttons">
        {['카테고리 1', '카테고리 2', '카테고리 3'].map((category) => (
          <button
            key={category}
            className={`category-button ${selectedCategory === category ? 'selected' : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* 검색하기 버튼 */}
      <button className="search-button" onClick={handleSearchClick}>
        검색하기
      </button>
    </div>
  );
};

export default CategoryList;