import './style.css'

interface ApplyInput {
  label:string;
  placeholder:string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ApplyInput = (props:ApplyInput) => {
  const { label, placeholder, onChange } = props;

  return (
    <div className='apply-input-wrap'>
      <div className='apply-input-label'>{label}</div>
      <input className='apply-input-box' type='text' placeholder={placeholder} onChange={onChange} />
    </div>
  )
}

export default ApplyInput

