import './style.css'

interface LicenseItem {
  licenseName:string;
  subject:string;
  status:string;
}

const LicenseItem = (props:LicenseItem) => {
  const { licenseName, subject, status } = props;

  return (
    <div className='contents-box'>
      <div>{licenseName}</div>
      <div className='subject'>{subject}</div>
      <div className='status'>{status}</div>
    </div>
  )
}

export default LicenseItem;