import { useEffect, useState } from 'react';
import TopBar from '../../components/TopBar'
import './style.css'
import instance from "../../lids/axios/instance";
import { useNavigate } from 'react-router-dom';

interface JoinedList {
  id: number;
  title: string;
  details: string;
  closedAt: string;
  author: string;
  category: string;
  inSchool: boolean;
  thumbnails: [string];
  regular: boolean;
  attachmentFileUrl: string;
}

const JoinedList = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState<string>();

  const [results, setResults] = useState<JoinedList[]>([]);

  const getMe = async() => {
    try{
      const res = await instance.get('/users/me');
      if(res.data){
        setUserId(res.data.data.idx);

        console.log('id:',userId)
      }
    }catch(error:any){
      console.error(error);
      navigate('/login');
    };
  };

  const getList = async () => {
    try{
      const res = await instance.get('/join');
      if(res.data){
        setResults(res.data.map((item: any) => item.post));

        console.log('results:',results)
      }
    }catch(error:any){
      console.error(error);
    };
  };

  useEffect(()=>{
    getMe();
  },[])

  useEffect(()=>{
    getList();
  },[userId])
  
  return (
    <div className='joined-page-container'>
      <TopBar title='참가 대회 목록' />
      <div className="joined-container">

        <h1 className="joined-title">참가 대회 목록 😀</h1>

        <div className="joined-list">
          {results?.map((item:JoinedList) => (
            <div key={item.id} className="joined-item" onClick={()=>{navigate(`/posts/${item.id}`)}}>
              <div className="preview-img-box">
                <div className="preview-img">
                  <img src={item.thumbnails && item.thumbnails[0] ? item.thumbnails[0] : 'Logo(blue).svg'} />
                </div>
                <div className="deadline-box">{item.closedAt || 'D-0'}</div>
              </div>
              <div className="preview-title">{item.title  || '제목 없음'}</div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default JoinedList