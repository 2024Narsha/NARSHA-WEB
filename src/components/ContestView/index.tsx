import './style.css';

const ContestPreview = () => {
  const deadline: string = 'D-13';
  const postTitlePreview: string = '[2024년 2학기 KAIST 사이버 영재교육 과정 수강생 모집]';

  return (
    <div className='post-preview-container'>
      <div className='preview-img-box'>
        <div className='preview-img'>
          <img src={`/kaist.png`} alt="Contest" />
        </div>
        <div className='deadline-box'>{deadline}</div>
      </div>
      <div className='preview-title'>{postTitlePreview}</div>
    </div>
  );
}

export default function ContestView() {
  const contestListTitle: string = '정기 대회 🧑‍';

  return (
    <>
      <h1 className="post-list-title">{contestListTitle}</h1>
      <div className='post-list-container'>
        <ContestPreview />
        <ContestPreview />
        <ContestPreview />
        <ContestPreview />
        <ContestPreview />
        <ContestPreview />
        <ContestPreview />
        <ContestPreview />
      </div>
    </>
  );
}
