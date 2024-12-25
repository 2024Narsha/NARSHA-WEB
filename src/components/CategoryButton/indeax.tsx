import './style.css'

interface CategoryButton {
  name:string;
  categoryDelete: () => void;
}

const CategoryButton = (props:CategoryButton) => {
  const {name, categoryDelete} = props;

  return (
      <div className='category-box'>
        {name}
        <div className='category-delete' onClick={categoryDelete}>
          <img src='/X.svg' />
        </div>
      </div>
  )
}

export default CategoryButton