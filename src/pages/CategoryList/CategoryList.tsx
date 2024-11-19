import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
      <div className="category-buttons">
        {['공통', '정보 보안', '아이디어톤', '게임', '해커톤', '프로그래밍', '머신러닝', '로봇', '웹 개발', '앱 개발', 'IoT', '블록체인', '데이터 분석', '디자인', '빅데이터', '컴퓨터 비전', '소프트웨어 설계', '클라우드 개발', '오픈소스', '창업'].map((category) => (
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