import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CategoryList.css';

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
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]); // 선택된 카테고리들을 배열로 저장
  const navigate = useNavigate();

  // 카테고리 버튼 클릭 시 상태 업데이트
  const handleCategoryClick = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((item) => item !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleSearchClick = () => {
    if (selectedCategories.length === 0) {
      alert('카테고리를 하나 이상 선택해주세요');
    } else {
      navigate(`/category-results/${selectedCategories.join(',')}`);
    }
  };

  return (
    <div className="centered-container">
      <CategorySearch />

      <h2 className="category-title">대회 분야</h2>

      <div className="category-buttons">
        {[
          '공통', '정보 보안', '아이디어톤', '게임', '해커톤', '프로그래밍', '머신러닝', '로봇', 
          '웹 개발', '앱 개발', 'IoT', '블록체인', '데이터 분석', '디자인', '빅데이터', '컴퓨터 비전', 
          '소프트웨어 설계', '클라우드 개발', '오픈소스', '창업'
        ].map((category) => (
          <button
            key={category}
            className={`category-button ${selectedCategories.includes(category) ? 'selected' : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <button className="search-button" onClick={handleSearchClick}>
        검색하기
      </button>
    </div>
  );
};

export default CategoryList;