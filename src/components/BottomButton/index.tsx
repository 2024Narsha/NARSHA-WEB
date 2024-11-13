import './style.css'

interface BottomButton {
  title:string;
}

const BottomButton = (props:BottomButton) => {
  const { title } = props;

  return (
    <div className="back-blur">
      <button className="bottom-button">{title}</button>
    </div>
  )
}

export default BottomButton