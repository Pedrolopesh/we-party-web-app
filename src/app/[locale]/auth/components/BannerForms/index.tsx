import {useTranslations} from 'next-intl';
import styles from './styles.module.css'

const BannerForms = () => {
    const t = useTranslations('banner_forms');
    return (
      <div className={styles.bgBanner}>
        <div className={styles.bgBannerImg}>
          <div>
            <h1>WE PARTY</h1>
            <p>{t('description')}</p>
            <p>{t('party')}</p>
          </div>
        </div>
      </div>
    );
}

export default BannerForms;