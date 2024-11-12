import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/BottomBar/Footer';
import './CategoryList.css'

const CategorySearch = () => {
  return (
    <div className="Search">
      <img src={`${process.env.PUBLIC_URL}/arrow.svg`} alt="Back" className="search-icon-left" />
      <span>카테고리 검색</span>
      <img src={`${process.env.PUBLIC_URL}/search.svg`} alt="Search" className="search-icon-right" />
    </div>
  );
};

const CategoryList = () => {
  return (
    <div>
      <Header />
      <CategorySearch />
      <Footer />
    </div>
  );
};

export default CategoryList;