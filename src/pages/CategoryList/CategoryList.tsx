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
      <Link to='/'><img src="/search.svg" alt="Search" className="search-icon-right" /></Link>
    </div>
  );
};

const CategoryList = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]); // 선택된 카테고리들을 배열로 저장

  const navigate = useNavigate();

  // 카테고리 버튼 클릭 시 상태 업데이트
  const handleCategoryClick = (category: number) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((item) => item !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleSearchClick = () => {
    if (selectedCategories.length === 0) {
      alert('카테고리를 하나 이상 선택해주세요');
      return;
    }
  
    // 첫 번째 카테고리 ID를 path parameter로 사용
    const firstCategoryId = selectedCategories[0];
    
    // 나머지 카테고리들을 query parameter로 변환
    const queryParams = selectedCategories
      .map(id => `categoryIds=${id}`)
      .join('&');
  
    navigate(`/search/category/${firstCategoryId}?${queryParams}`);
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
            className={`category-button ${selectedCategories.includes(item.categoryId) ? 'selected' : ''}`}
            onClick={() => handleCategoryClick(item.categoryId)}
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