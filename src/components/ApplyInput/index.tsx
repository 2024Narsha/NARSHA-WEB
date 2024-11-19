import './style.css'

interface ApplyInput {
  label:string;
  placeholder:string;
}

const ApplyInput = (props:ApplyInput) => {
  const { label, placeholder } = props;

  return (
    <div className='apply-input-wrap'>
      <div className='apply-input-label'>{label}</div>
      <input className='apply-input-box' type='text' placeholder={placeholder} />
    </div>
  )
}

export default ApplyInput

