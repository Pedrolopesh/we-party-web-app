import {useTranslations} from 'next-intl';
// import {Link} from '@/i18n/routing';
import BannerForms from '../components/BannerForms';
import styles from './styles.module.css';
import LoginForm from '../components/LoginForm';

const Login = () => {
    // const t = useTranslations('login');
    return (
      <div className={styles.containerLogin}>
        <div className='w-full'>
          <BannerForms />
        </div>

        <div className='w-full'>
          <LoginForm />
        </div>
      </div>
    );
}

export default Login;