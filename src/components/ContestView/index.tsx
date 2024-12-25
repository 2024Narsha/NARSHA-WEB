import axios from 'axios';
import './style.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface PostData {
  id: number;
  title: string;
  closedAt: string;
  thumbnails: string[];
  regular: boolean;
}

const ContestPreview = () => {
  const [posts, setPosts] = useState<PostData[]>([]);

  const navigate = useNavigate();

  const getContestPreview = async() => {
    try{
      const res = await axios.get<PostData[]>(
        `${import.meta.env.VITE_SERVER_URL}/posts`
      )
      if(res.data && res.data.length > 0) {
        // regular가 false인 모든 게시물 필터링
        const nonRegularPosts = res.data.filter(post => post.regular === false);
        setPosts(nonRegularPosts);
      }
    }catch(error:any){
      alert('네트워크 에러!');
      console.log(error)
    };
  };

  const getDDay = (dateString: string):string => {
    const targetDate = new Date(dateString); // 목표 날짜
    const today = new Date(); // 오늘 날짜
  
    // 오늘 날짜와 목표 날짜의 차이 계산 (밀리초 단위)
    const timeDiff = targetDate.getTime() - today.getTime();
    
    // 밀리초를 일 단위로 변환
    const daysRemaining = timeDiff>0 ? Math.ceil(timeDiff / (1000 * 3600 * 24)) : 0;
  
    // D-nn 형식으로 반환
    return `D-${daysRemaining}`;
  };

  useEffect(() => {
    getContestPreview()
  }, []);

  return (
    <>
    {posts.map((item:PostData) => (
      <div className='post-preview-container' onClick={()=>{navigate(`/posts/${item.id}`)}} key={item.id}>
        <div className='preview-img-box'>
          <div className='preview-img'>
            <img src={item.thumbnails?.[0] || 'Logo(blue).svg'}/>
          </div>
          <div className='deadline-box'>{item.closedAt ? getDDay(item.closedAt) : 'D-0'}</div>
        </div>
        <div className='preview-title'>{item.title || '제목 없음'}</div>
      </div>
      ))}
    </>
  );
}

export default function ContestView() {
  return (
    <>
      <h1 className="post-list-title">정기 대회 🧑‍</h1>
      <div className='post-list-container'>
        <ContestPreview />
      </div>
    </>
  );
}