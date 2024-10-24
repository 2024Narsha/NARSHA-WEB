import Header from '../../components/Header/Header'; // header import
import LicenseItem from '../../components/LicenseItem';
import './style.css'

const License = () => {
  return (
    <div className='container'>
      <Header></Header>
      <div className='contents'>
        <LicenseItem/>
      </div>
    </div>
  )
}

export default License