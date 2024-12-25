import { useEffect, useState } from 'react'
import CategoryButton from '../CategoryButton/indeax'
import './style.css'
import TextSearch from '../TextSearch';

const SearchBox = () => {
  const [names, setNames] = useState<string[]>([]);

  const onCategoryDelete = () => {

  };

  return (
    <>
    <div className='search-box-container'>
      <TextSearch />

      <div className='categories-wrap'>
        {/* 각 카테고리를 CategoryButton으로 렌더링 */}
        {names.map((name) => (
          <CategoryButton 
            key={name} 
            name={name} 
            categoryDelete={() => onCategoryDelete()} 
          />
        ))}
      </div>
    </div>

    <div className='search-box-margin'></div>
    </>
  )
}

export default SearchBox