import './style.css'

interface DisableButton {
  title:string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean; // 비활성화 여부
}

const DisableButton = (props:DisableButton) => {
  const { title, onClick, disabled } = props;

  return (
    <div className="back-blur">
      <button 
        className={`bottom-button ${disabled ? 'disabled' : ''}`}
        onClick={onClick}
        disabled={disabled}
      >{title}</button>
    </div>
  )
}

export default DisableButton