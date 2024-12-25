import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const TextSearch = () => {
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchText.trim()) {
      navigate(`/search/keyword/${searchText.trim()}`);
    }else{
      alert('검색어를 입력해주세요')
    };
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="text-search-container">
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={handleKeyDown}
        className="search-input"
      />
      <img
        src="/searchButton.svg"
        onClick={handleSearch}
        className="search-icon"
      />
    </div>
  );
};

export default TextSearch;