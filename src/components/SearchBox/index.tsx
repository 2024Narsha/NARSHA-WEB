import { useEffect, useState } from 'react'
import CategoryButton from '../CategoryButton/indeax'
import './style.css'
import TextSearch from '../TextSearch';

const SearchBox = () => {
  const [name, setName] = useState<string>('없음');

  const onCategoryDelete = () => {

  };

  return (
    <>
    <div className='search-box-container'>
      <TextSearch />

      <div className='categories-wrap'>
        <CategoryButton 
          name={name}
          categoryDelete={onCategoryDelete}
        />
      </div>
    </div>

    <div className='search-box-margin'></div>
    </>
  )
}

export default SearchBox