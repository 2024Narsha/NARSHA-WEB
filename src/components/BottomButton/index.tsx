import './style.css'

const BottomButton = () => {
  const buttonDetail:string = '참가하기'

  return (
    <div>
      <div className="back-blur">
        <button className="bottom-button">{buttonDetail}</button>
      </div>
    </div>
  )
}

export default BottomButton