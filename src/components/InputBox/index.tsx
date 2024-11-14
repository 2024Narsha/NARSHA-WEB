import './style.css'

interface InputBox {
  label:string;
  placeholder:string;
}

const InputBox = (props:InputBox) => {
  const { label, placeholder } = props;

  return (
    <div>
      <p className='label'>{label}</p>
      <input className='input-box' type='text' placeholder={placeholder} ></input>
    </div>
  )
}

export default InputBox