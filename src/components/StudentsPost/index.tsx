import './style.css'

interface PostImgSrc{
  src:string
}

const StudentsPost = (props:PostImgSrc) => {
  return (
    <div className='students-post-img-box'>
      <img src={props.src} />
    </div>
  )
}

export default StudentsPost