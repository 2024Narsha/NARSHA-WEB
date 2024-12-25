import './style.css'

interface CategoryButton {
  category:string;
  categoryDelete: () => void;
}

const CategoryButton = (props:CategoryButton) => {
  const {category, categoryDelete} = props;

  return (
    <div>
      <div className='category-box'>{category}</div>
      <div className='category-delete' onClick={categoryDelete}>
        <img src='X.svg' />
        </div>
    </div>
  )
}

export default CategoryButton