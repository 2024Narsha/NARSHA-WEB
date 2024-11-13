import './style.css'

interface propsType {
  title:string;
}

const TopBar = (props:propsType) => {
  const { title } = props;

  return (
    <div className='top-bar-container'>
      <img src={`/arrow.png`}></img>
      <div className='top-bar-title'>{title}</div>
    </div>
  )
}

export default TopBar