import './style.css'

interface ApplyButton{
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const ApplyButton = (props:ApplyButton) => {
  const onClick = props.onClick

  return (
    <button className='apply-button' onClick={onClick}>신청하기</button>
  )
}

export default ApplyButton