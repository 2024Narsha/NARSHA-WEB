import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/BottomBar/Footer';
import './CategoryResults.css';

const CategoryResults = () => {
  const { category } = useParams();

  return (
    <div className="centered-container">
      <Header />
      
      <div className="category-results">
        <h2>{category} 검색 결과</h2>
        <p>여기서 {category}에 대한 검색 결과를 표시합니다.</p>
        {/* 실제 검색 결과를 여기서 출력 */}
      </div>

      <Footer />
    </div>
  );
};

export default CategoryResults;