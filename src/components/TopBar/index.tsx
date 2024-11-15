import './style.css'

interface TopBar {
  title:string;
}

const TopBar = (props:TopBar) => {
  const { title } = props;

  return (
    <div className='top-bar-container'>
      <img src={`/arrow.png`} alt='뒤로가기'/>
      <div className='top-bar-title'>{title}</div>
    </div>
  )
}

export default TopBar