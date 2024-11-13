import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header'; // header import
import LicenseItem from '../../components/LicenseItem';
import OptionBar from '../../components/OptionBar';
import './style.css'

const License = () => {
  return (
    <div className='license-container'>
      <Header></Header>
      <OptionBar />
      <div className='license-contents'>
        <LicenseItem/>
        <LicenseItem/>
        <LicenseItem/>
        <LicenseItem/>
        <LicenseItem/>
        <LicenseItem/>
        <LicenseItem/>
      </div>

      <Footer />
    </div>
  )
}

export default License