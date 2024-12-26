import React, { useState, ChangeEvent, useRef} from 'react';
import TopBar from '../../components/TopBar';
import Button from './button';
import './index.css';
import watodoAxios from '../../lids/axios/instance';

const StudentsWrite = () => {
  const [files, setFiles] = useState<File|null>(null);

  const fileRef = useRef<HTMLInputElement|null>(null);
  const imageRef = useRef<HTMLInputElement|null>(null);

  const [thumbnails, setThumbnails] = useState<string[]>([])
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [path,setPath] = useState('');

  const handleImageChange = async (e : React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files) {
      const image = e.target.files[0];
      console.log(image)

      const imageData = new FormData();
      imageData.append("files", image);

      try{
        const res = await watodoAxios.post(`${import.meta.env.VITE_SERVER_URL}/files/upload`,imageData)
        console.log(res)
        setThumbnails(res.data);
      } catch(error:any){
        console.log(error)
        console.log(error.response)
      }
    }
  }

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }

  const handleDetails = (e:React.ChangeEvent<HTMLTextAreaElement>) => { 
    setContent(e.target.value)
  }
  const openFileSelector = () => {
    if(fileRef.current) {
      fileRef.current.click();
    }
  }

  const openImageSelector = () => {
    if(imageRef.current) {
      imageRef.current.click();
    }
  }

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      setFiles(file);

      const fileData = new FormData();
      fileData.append("files", file);

      try{
        const res = await watodoAxios.post(`${import.meta.env.VITE_SERVER_URL}/files/upload`,fileData)
        console.log(res)
        setPath(res.data[0]);
      } catch(error:any){
        console.log(error)
      }
    }
  };

  const deleteFile = (e: File) => {
    setFiles(prev=>prev);
  }

  const deleteImage = (e:string) => {
    setThumbnails(prev=>prev.filter(item=>(item+item != e+item)))
  }

  const uploadContest = async () => {
    const formData = {
      title,
      content,
      path
    };
    
    try{
      console.log(formData)
      const res = await watodoAxios.post(`${import.meta.env.VITE_SERVER_URL}/events`, formData,)
      console.log("Response:", res.data);
    }catch(error:any){
      console.log(error)
    }

  

  }
  return (
    <div className='content-write-container'>
    <TopBar title="대회 글쓰기"/>
    <div className='centered-container'>
      <div className="container">
      <div className='image'>
          <div title='이미지 삽입' className='add-image' onClick={openImageSelector}>
            <img src="/add_image.svg" alt="이미지 삽입 아이콘"  />
            <input type="file" id="image" hidden onChange={handleImageChange} ref={imageRef} multiple/>
          </div>
          <div className='imageWrap'>
          {
              thumbnails.map((item)=>(
                <div className='imageItem' key={`${item}`}>
                  <div>
                    <img src={`${import.meta.env.VITE_SERVER_URL}/uploads/${item}`} alt="인터넷 오류"/>
                  </div>
                  <div onClick={()=>deleteImage(item)}>
                    <img src='/deleteFile.svg' alt=''/>
                  </div>
                </div>
              ))
          }
          </div>
        </div>
        <div className="form">

          {/* 제목 입력 */}
          <div className='form-group'>
          <label htmlFor="title" className='margin-left'>제목</label>
          <input
            type="text"
            id="title"
            placeholder="제목을 입력해 주세요"
            className='title-input margin'
            onChange={handleTitle}
          />
          </div>

          {/* 본문 입력 */}
          <div className='form-group'>
          <label htmlFor="content" className='margin-left'>본문</label>
          <textarea
            id=""
            className='margin border'
            placeholder="대회 내용을 입력해 주세요&#10;&#10;예시: 주최, 장소, 주제, 분야 등"
            rows={4}
            onChange={handleDetails}
          />
          </div>

          {/* 첨부파일 */}
          <div className="file-upload">
            <div onClick={openFileSelector} id='fileSelectButton'>
              <img src="/file.svg" alt="" />
              <p>파일선택</p>
            </div>
            <input type="file" id="file" hidden onChange={handleFileChange} ref={fileRef}/>
          </div>

          <div id='fileWrap'>
            {
              files &&(
                <div className='fileItem' key={`${files.name}-${files.lastModified}`}>
                  <div>
                    <p>{files.name}</p>
                    <p>{Math.floor(files.size / (1024))}MB</p>
                  </div>
                  <div onClick={()=>deleteFile(files)}>
                    <img src='/deleteFile.svg' alt=''/>
                  </div>
                </div>
              )
            }
          </div>
          <div id='spacer'></div>

          {/* 게시 버튼 */}
          <Button onClick={uploadContest}>게시</Button>
        </div>
      </div>

    </div>
    </div>
  );
};

export default StudentsWrite;
