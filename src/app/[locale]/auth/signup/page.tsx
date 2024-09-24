// import {useTranslations} from 'next-intl';
// // import {Link} from '@/i18n/routing';
import BannerForms from '../components/BannerForms';
import styles from './styles.module.css';
import SignupForm from '../components/SignupForm'; 

const Signup = () => {
    // const t = useTranslations('login');
    return (
      <div className={styles.containerSignup}>
        <div className='w-full'>
          <BannerForms />
        </div>

        <div className='w-full flex items-center justify-center'>
          <SignupForm />
        </div>
      </div>
    );
}

export default Signup;