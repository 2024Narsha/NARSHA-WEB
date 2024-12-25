import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './SearchResults.css';
import axios from 'axios';
import TopBar from '../../components/TopBar';
import SearchBox from '../../components/SearchBox';

interface SearchResult {
  id: number;
  title: string;
  details: string;
  closedAt: string;
  author: string;
  category: string;
  inSchool: boolean;
  thumbnails: [string];
  regular: boolean;
  attachmentFileUrl: string;
}

const SearchResults = () => {
  const [results, setResults] = useState<SearchResult[]>([]);
  const { keyword, categories } = useParams<{ keyword?: string, categories?: string }>();

  const navigate = useNavigate()

  const fetchResults = async() => {
    try{
      if(keyword) {
        const res = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}/search/keyword/${keyword}`
        );
        if(res?.data) {
          setResults(res.data);
        }
      } 
      else if(categories) {
        const res = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}/search/category/${categories}`
        );
        if(res?.data) {
          setResults(res.data);
        }
      }
    }catch (error:any) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchResults();
  }, [keyword, categories]);

  return (
    <div className='search-results-page-container'>
      <SearchBox />
      <div className="search-results-container">

        <h1 className="search-results-title">검색 결과 {results.length}개</h1>

        <div className="search-results-list">
          {results.map((item:SearchResult) => (
            <div key={item.id} className="search-result-item" onClick={()=>{navigate(`/posts/${item.id}`)}}>
              <div className="preview-img-box">
                <div className="preview-img">
                  <img src={item.thumbnails[0] || 'Logo(blue).svg'} />
                </div>
                <div className="deadline-box">{item.closedAt || 'D-0'}</div>
              </div>
              <div className="preview-title">{item.title  || '제목 없음'}</div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default SearchResults;