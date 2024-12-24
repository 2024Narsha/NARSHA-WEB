import { useState } from "react"
import "./style.css"

interface OptionBar {
  title:string
  loption:string
  roption:string
  onOption:boolean // 현재 선택된 옵션 상태
  onOptionChange: (option: string) => void; // 옵션 변경 핸들러
}

const OptionBar = (props:OptionBar) => {
  const { title, loption, roption, onOption, onOptionChange } = props;

  // 옵션 클릭 시 부모 컴포넌트의 핸들러 호출
  const handleOptionClick = (option: string) => {
    onOptionChange(option);
  };

  return (
    <div className='option-bar-container'>
      <div className='option-bar-title'>{title}</div>
      <div className='option-wrap'>
        <div
          className={`option ${!onOption ? 'active' : ''}`} 
          onClick={() => handleOptionClick(loption)}
        >{loption}</div>
        <div
          className={`option ${onOption ? 'active' : ''}`} 
          onClick={() => handleOptionClick(roption)}
        >{roption}</div>
      </div>
    </div>
  )
}

export default OptionBar;