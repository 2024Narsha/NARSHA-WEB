import './style.css'

const LicenseItem = () => {
  const LicenseName:string = '워드프로세서';
  const subject:string = '공통';
  const status:string = '나이스등재 불가';
  return (
    <div className='contents-box'>
      <div>{LicenseName}</div>
      <div className='subject'>{subject}</div>
      <div className='status'>{status}</div>
    </div>
  )
}

export default LicenseItem