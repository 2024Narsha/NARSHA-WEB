import { useState } from "react"
import "./style.css"

interface OptionBar {
  title:string
  loption:string
  roption:string
  onOptionChange: (option: string) => void;
}

const OptionBar = (props:OptionBar) => {
  const { title, loption, roption, onOptionChange } = props;
  const [selectedOption, setSelectedOption] = useState<string>(loption);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    onOptionChange(option);
  };

  return (
    <div className='option-bar-container'>
      <div className='option-bar-title'>{title}</div>
      <div className='option-wrap'>
        <div
          className={`option ${selectedOption === loption ? 'active' : ''}`} 
          onClick={() => handleOptionClick(loption)}
        >{loption}</div>
        <div
          className={`option ${selectedOption === roption ? 'active' : ''}`} 
          onClick={() => handleOptionClick(roption)}
        >{roption}</div>
      </div>
    </div>
  )
}

export default OptionBar;