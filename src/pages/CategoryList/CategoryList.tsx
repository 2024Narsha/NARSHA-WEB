import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CategoryList.css';
import axios from 'axios';

interface Category {
  categoryId:number;
  categoryName:string;
}

const CategorySearch = () => {
  return (
    <div className="Search">
      <Link to='/'><img src="/arrow.svg" alt="Back" className="search-icon-left" /></Link>
      <span>카테고리 검색</span>
      <img src="/search.svg" alt="Search" className="search-icon-right" />
    </div>
  );
};

const CategoryList = () => {
  const [categories, setCategories] = useState<[Category]>();
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

  const handleSearchClick = async() => {
    if (selectedCategories.length === 0) {
      alert('카테고리를 하나 이상 선택해주세요');
      return
    }

    try {
    // 선택된 카테고리 ID를 쿼리 파라미터 형식으로 변환
    const query = selectedCategories
      .map((categoryId) => `categoryIds=${categoryId}`)
      .join('&'); // "categoryIds=1&categoryIds=2&categoryIds=3"와 같은 형태로 변환

    // `categoryId`는 고정된 값으로 경로에 포함될 수 있습니다.
    const categoryId = 123; // 예시로 categoryId를 설정
    const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/search/category/${categoryId}?${query}`);

    // 검색 결과 페이지로 네비게이션
    navigate(`/search/category/${categoryId}?${query}`);
    }catch(error:any){
      console.error(error)
    };
  };

  const getCategoryList = async() => {
    try{
      const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/categories`);
      if(res){
        console.log(res.data);
        setCategories(res.data);
      }
    }catch(error:any){
      console.error(error);
    };
  };

  useEffect(()=>{
    getCategoryList()
  }, [])

  return (
    <div className="centered-container">
      <CategorySearch />

      <h2 className="category-title">대회 분야</h2>

      <div className="category-buttons">
        {categories?.map((item:Category) => (
          <button
            key={item.categoryId}
            className={`category-button ${selectedCategories.includes(item.categoryName) ? 'selected' : ''}`}
            onClick={() => handleCategoryClick(item.categoryName)}
          >
            {item.categoryName}
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