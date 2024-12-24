import './style.css'

interface ApplicatedData{
  name:string;
  content:string;
}

const ApplicatedBox = (props:ApplicatedData) => {
  const { name, content } = props;

  return (
    <div className='applicated-box-container'>
      <div className='applicated-info'>
        <h1>{name}</h1>
        <p>{content}</p>
      </div>
    </div>
  )
}

export default ApplicatedBox