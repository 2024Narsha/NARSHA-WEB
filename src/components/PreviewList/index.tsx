import { useEffect, useState } from 'react';
import './style.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Preview = () => {
  const [id, setId] = useState<number>();
  const [closedAt, setClosedAt] = useState<string>();
  const [title, setTitle] = useState<string>();
  const [thumbnails, setThumbnails] = useState<[string]>()

  const navigate = useNavigate();

  const getPostPreview = async() => {
    try{
      const res = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/posts`
      )
      if(res.data.regular){
        setId(res.data.id)
        setClosedAt(res.data.closedAt)
        setTitle(res.data.title)
        setThumbnails(res.data.thumbnails)

        console.log(res)
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
    <div className='post-preview-container' onClick={()=>{navigate(`/posts/${id}`)}}>
      <div className='preview-img-box'>
        <div className='preview-img'>
          <img src={thumbnails===undefined ? 'Logo(blue).svg' : thumbnails[0]} />
        </div>
        <div className='deadline-box'>{closedAt===undefined ? 'D-0' : closedAt}</div>
      </div>

      <div className='preview-title'>{title===undefined ? 'title' : title}</div>
    </div>
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