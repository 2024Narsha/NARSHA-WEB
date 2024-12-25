import './style.css'

interface DisableButton {
  title:string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const DisableButton = (props:DisableButton) => {
  const { title, onClick} = props;

  return (
    <div className="back-blur">
      <button 
        className={'bottom-button'}
        onClick={onClick}
      >{title}</button>
    </div>
  )
}

export default DisableButton