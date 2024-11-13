import './style.css'

const StartPage = () => {
  return (
    <div className='start-page-container'>
      <div className='start-top-line'/>

      <img src={`/logo.png`} className='logo-img' />

      <button className='start-button'>시작하기</button>
    </div>
  )
}

export default StartPage