import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './style.css'

interface Songs {
  title:string
  info:string
}

const Songs = () => {
  const [songs, setSongs] = useState<Songs[]>([]);

  const getList = async() => {
    try{
      const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/musics`);
      if(res){
        setSongs(res.data);
      }
    }catch(error:any){
      console.error(error)
    }
  };

  useEffect(() => {
    getList()
  },[songs])

  return (   
    <>
    {songs.map((item: Songs) => (
    <div className='applicated-box-container'>
      <div key={item.title} className='applicated-info'>
        <h1>{item.title}</h1>
        <p>{item.info}</p>
      </div>
    </div>
    ))}
    </>
  )
}

export default Songs