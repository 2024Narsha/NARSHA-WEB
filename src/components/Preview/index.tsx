import './style.css'

const Preview = () => {

  const deadline:string = '-13';
  const postTitlePreview:string = '[2024년 2학기 KAIST 사이버 영재교육 과정 수강생 모집]';

  return (
    <div className='post-preview-container'>
      <div className='preview-img-box'>
      <div className='preview-img'></div>
      <div className='deadline-box'>{deadline}</div>
      </div>

      <div className='preview-title'>{postTitlePreview}</div>
    </div>
  )
}

export default function PreviewList() {

  const PreviewListTitle:string = '모집중인 대회 🔥'

  return(
    <div className='post-list-container'>
      <h1 className="post-list-title">{PreviewListTitle}</h1>

      <Preview />
      <Preview />
      <Preview />
      <Preview />
    </div>
  );
};