import { useEffect, useState } from 'react';
import './style.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface PostData {
  id: number;
  title: string;
  closedAt: string;
  thumbnails: string[];
  regular: boolean;
  attachmentFileUrl:string;
}

const Preview = () => {
  const [posts, setPosts] = useState<PostData[]>([]);

  const navigate = useNavigate();

  const getPostPreview = async() => {
    try{
      const res = await axios.get<PostData[]>(
        `${import.meta.env.VITE_SERVER_URL}/posts`
      )
      if(res.data && res.data.length > 0) {
        // regular가 true인 모든 게시물 필터링
        const regularPosts = res.data.filter(post => post.regular === true);
        setPosts(regularPosts);
      }
    }catch(error:any){
      alert('네트워크 에러!');
      console.log(error)
    };
  };

  useEffect(() => {
    getPostPreview()
  }, []);

  return (
    <>
    {posts.map((item:PostData) => (
      <div className='post-preview-container' onClick={()=>{navigate(`/posts/${item.id}`)}} key={item.id}>
        <div className='preview-img-box'>
          <div className='preview-img'>
            <img src={item.thumbnails?.[0] || 'Logo(blue).svg'} />
          </div>
          <div className='deadline-box'>{item.closedAt || 'D-0'}</div>
        </div>

        <div className='preview-title'>{item.title || '제목 없음'}</div>
      </div>
    ))}
    </>
  )
}

export default function PreviewList() {
  return(
    <>
      <h1 className="post-list-title">모집중인 대회 🔥</h1>

      <div className='post-list-container'>
        <Preview/>
      </div>
    </>
  );
};