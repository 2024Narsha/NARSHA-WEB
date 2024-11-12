import './style.css'

const TopBar = () => {
  return (
    <div className='top-bar-container'>
      <img src={`${process.env.PUBLIC_URL}/arrow.png`}></img>
      <div className='top-bar-title'>대회본문</div>
    </div>
  )
}

export default TopBar