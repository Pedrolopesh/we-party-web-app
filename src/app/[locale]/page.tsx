import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';

const Home = () => {
    const t = useTranslations('Home');
    return (
      <div>
        <h1>{t('test')}</h1>
        <Link href="/about">{t('test_Link')}</Link>
      </div>
    );
}

export default Home;