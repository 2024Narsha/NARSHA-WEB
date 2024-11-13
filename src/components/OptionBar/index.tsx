import "./style.css"

interface OptionBar {
  title:string
  loption:string
  roption:string
}

const OptionBar = (props:OptionBar) => {
  const { title, loption, roption } = props;

  return (
    <div className='option-bar-container'>
      <div className='option-bar-title'>{title}</div>
      <div className='option-wrap'>
        <div className='option' id="staying">{loption}</div>
        <div className='option'>{roption}</div>
      </div>
    </div>
  )
}

export default OptionBar;