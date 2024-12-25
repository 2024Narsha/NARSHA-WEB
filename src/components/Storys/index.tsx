import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './style.css'

interface Storys {
  title:string
  info:string
}

const Storys = () => {
  const [storys, setStorys] = useState<Storys[]>([]);

  const getList = async() => {
    try{
      const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/storys`);
      if(res){
        setStorys(res.data);
      }
    }catch(error:any){
      console.error(error)
    }
  };

  useEffect(() => {
    getList()
  },[storys])

  return (   
    <>
    {storys.map((item: Storys) => (
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

export default Storys