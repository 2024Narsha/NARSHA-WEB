import './tab-bar.css'

const TabBar = () => {

  return(
  <div className="tab-bar">
    <button className="back-button">
      <img src="path/to/arrow-back-icon.svg" alt="Back" />
    </button>
    <h2 className="title">글쓰기</h2>
  </div>
  );
}

export default TabBar;