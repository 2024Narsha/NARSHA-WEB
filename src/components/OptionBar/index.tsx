import "./style.css"

const OptionBar = () => {

  const title:string = '자격증 추천'
  const stayingOption:string = '교내' // 현재 머물고 있는 옵션
  const notStayingOption:string = '교외' // 현재 머물고 있지 않은 옵션

  return (
    <div className='option-bar-container'>
      <div className='option-bar-title'>{title}</div>
      <div className='option-wrap'>
        <div className='option' id="stayingOption">{stayingOption}</div>
        <div className='option'>{notStayingOption}</div>
      </div>
    </div>
  )
}

export default OptionBar