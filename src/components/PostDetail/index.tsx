import './style.css'
import BottomButton from "../BottomButton";
import Header from "../Header/Header";
import TopBar from "../TopBar";
import Footer from '../Footer/Footer';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import instance from "../../lids/axios/instance";
import axios from 'axios';

const PostDetail = () => {
  const [id, setId] = useState<number>();
  const [title, setTitle] = useState<string>('title');
  const [details, setDetails] = useState<string>();
  const [closedAt, setClosedAt] = useState<string>();
  const [category, setCategory] = useState<string | undefined>();
  const [inSchool, setInSchool] = useState<boolean>(true);
  const [thumbnails, setThumbnails] = useState<string>('/logo(blue).svg');

  const navigate = useNavigate();

  const getMe = async() => {
    try{
      const res = await instance.get(`/users/me`);
    }catch(error:any) {
    navigate("/login");
    };
  };

  const getList = async() => {
    try{
      const res = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/posts`
      );
      if (res.data){
        setId(res.data.id);
        setTitle(res.data.title);
        setDetails(res.data.detail);
        setClosedAt(res.data.closedAt);
        setCategory(res.data.category);
        setInSchool(res.data.inSchool);
        setThumbnails(res.data.thumbnails);
      }else{
        console.log('불러올 값이 없음')
      }
    }catch(error:any){
      alert('네트워크 에러!');
      console.log(error.response.status)
    }
  };

  useEffect(() => {
    getMe();
  }, []);

  return (
    <div className="post-detail-container">
      <Header />
      <TopBar title='대회본문'/>

      <div className='post-detail-img-wrap'>
        <div className='post-detail-deadline'>D-13</div>
        <img src={thumbnails} />
      </div>

      <div className='post-detail-title'>{title}</div>

      <div className='post-attribute-wrap'>
        <div className='attribute'>
          <p className='attribute-title' >신청 기한</p>
          <p>{closedAt}</p>
        </div>
        <div className='split-line'></div>
        <div className='attribute'>
          <p className='attribute-title' >교내 / 교외</p>
          <p>{inSchool ? '교내' : '교외'} 대회</p>
        </div>
      </div>

      <div className='post-detail-text'>{details}</div>

      <BottomButton
        title = '시작하기'
        onClick={getList}
      />
      <Footer />
    </div>
  )
}

export default PostDetail