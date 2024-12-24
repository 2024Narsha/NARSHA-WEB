import './style.css'

interface BottomButton {
  title:string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const BottomButton = (props:BottomButton) => {
  const { title, onClick } = props;

  return (
    <div className="back-blur">
      <button 
        className='bottom-button'
        onClick={onClick}
      >{title}</button>
    </div>
  )
}

export default BottomButton