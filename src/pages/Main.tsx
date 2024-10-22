import './Main.css';
import Header from './Header'; // Header 컴포넌트를 임포트합니다.

const Main = () => {
  return (
    <div>
      <Header /> {/* Header 컴포넌트를 포함시킵니다. */}
      <div className="content">
        <h2>Main page</h2>
        {/* 여기에 페이지의 내용을 추가합니다. */}
      </div>
    </div>
  );
};

export default Main;
