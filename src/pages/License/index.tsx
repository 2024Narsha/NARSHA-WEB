import Header from '../../components/Header/Header'; // header import
import LicenseItem from '../../components/LicenseItem';
import OptionBar from '../../components/OptionBar';
import './style.css'

const License = () => {
  return (
    <div className='container'>
      <Header></Header>
      <OptionBar />
      <div className='contents'>
        <LicenseItem/>
        <LicenseItem/>
        <LicenseItem/>
        <LicenseItem/>
        <LicenseItem/>
        <LicenseItem/>
        <LicenseItem/>
      </div>
    </div>
  )
}

export default License