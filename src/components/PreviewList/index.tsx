import './style.css'

interface PostPreview {
  deadline:string;
  postTitle:string;
}

const Preview = (props:PostPreview) => {
  const { deadline, postTitle } = props;

  return (
    <div className='post-preview-container'>
      <div className='preview-img-box'>
        <div className='preview-img'><img src={`/kaist.png`} /></div>
        <div className='deadline-box'>{deadline}</div>
      </div>

      <div className='preview-title'>{postTitle}</div>
    </div>
  )
}

export default function PreviewList() {

  const PreviewListTitle:string = '모집중인 대회 🔥'

  return(
    <>
      <h1 className="post-list-title">{PreviewListTitle}</h1>

      <div className='post-list-container'>
      <Preview deadline='D-13' postTitle='[2024년 2학기 KAIST 사이버 영재교육 과정 수강생 모집]' />
      <Preview deadline='D-13' postTitle='[2024년 2학기 KAIST 사이버 영재교육 과정 수강생 모집]' />
      <Preview deadline='D-13' postTitle='[2024년 2학기 KAIST 사이버 영재교육 과정 수강생 모집]' />
      <Preview deadline='D-13' postTitle='[2024년 2학기 KAIST 사이버 영재교육 과정 수강생 모집]' />
      <Preview deadline='D-13' postTitle='[2024년 2학기 KAIST 사이버 영재교육 과정 수강생 모집]' />
      <Preview deadline='D-13' postTitle='[2024년 2학기 KAIST 사이버 영재교육 과정 수강생 모집]' />
      <Preview deadline='D-13' postTitle='[2024년 2학기 KAIST 사이버 영재교육 과정 수강생 모집]' />
      <Preview deadline='D-13' postTitle='[2024년 2학기 KAIST 사이버 영재교육 과정 수강생 모집]' />
    </div>
    </>
  );
};