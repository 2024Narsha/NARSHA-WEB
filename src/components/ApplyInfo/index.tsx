import './style.css'

interface ApplyInfo {
  title:string;
  info:string;
}

const ApplyInfo = (props:ApplyInfo) => {
  const { title, info } = props;

  const getLogoImg = () => {
    switch(title) {
      case '노래 신청':
        return `/note.png`
      case '사연 신청':
        return `/radio.png`
    }
  };

  return (
      <div className='apply-wrap'>
        <div className='apply-title'>
          <img src={getLogoImg()} className='apply-logo-img' />
          {title}
        </div>
        <div className='apply-info'>{info}</div>
      </div>
  )
}

export default ApplyInfo