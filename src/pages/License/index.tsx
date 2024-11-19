import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header'; // header import
import LicenseItem from '../../components/LicenseItem';
import OptionBar from '../../components/OptionBar';
import './style.css'

const License = () => {
  return (
    <div className='license-container'>
      <Header />
      <OptionBar 
        title='자격증 추천'
        loption='교내'
        roption='교외'
      />
      <div className='license-contents'>
        <LicenseItem licenseName='워드프로세서' subject='공통' status='나이스등재 가능' />
        <LicenseItem licenseName='워드프로세서' subject='공통' status='나이스등재 가능' />
        <LicenseItem licenseName='워드프로세서' subject='공통' status='나이스등재 가능' />
        <LicenseItem licenseName='워드프로세서' subject='공통' status='나이스등재 가능' />
        <LicenseItem licenseName='워드프로세서' subject='공통' status='나이스등재 가능' />
        <LicenseItem licenseName='워드프로세서' subject='공통' status='나이스등재 가능' />
        <LicenseItem licenseName='워드프로세서' subject='공통' status='나이스등재 가능' />
      </div>

      <Footer />
    </div>
  )
}

export default License