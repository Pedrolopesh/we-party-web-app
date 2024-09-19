'use client'

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import styles from './styles.module.css';

const LoginForm = () => {
    const t = useTranslations('login');

    const [mounted, setMounted] = useState(false);
    const {setTheme, resolvedTheme} = useTheme();

    useEffect(() => setMounted(true), []);

    return (
      <div className={styles.containerFormLogin}>
        {/* <button onClick={() => setTheme('dark')}>test dark</button>
        <br />
        <br />
        <button onClick={() => setTheme('light')}>test light</button>
        <br />
        <br />

        {mounted && ( 'mounted' )} */}
        
        <div>
            <h2 className='text-[#0c0914] text-[32px] dark:invert'>{t('form_title')}</h2>
            
            <div className='block'>
                <input
                    className='block my-5'
                    type="text"
                    placeholder={t('email_placeholder')}
                />
                <input
                    className='block my-5'
                    type="password"
                    placeholder={t('password_placeholder')}
                />
            </div>

            <div className='flex w-full justify-between'>
                <div className='flex'>
                    <input type="checkbox" className='mr-2' /> <p>{t('remember_login')}</p>
                </div>
                <Link href="/recover" className='text-[#FBAA4D] underline hover:text-[#926027]'>{t('forget_password')}</Link>
            </div>

            <button className='primary-gradient my-10 py-4'>{t('submit')}</button>

            <div className='flex justify-between'>
                <div>
                    <p>{t('dont_have_account')}</p>
                    <Link href="/signup" className='text-[#FBAA4D] underline hover:text-[#926027]'>{t('signup_link')}</Link>
                </div>

                <div className='flex'>
                    <p className='mr-1'>{t('free_message')}</p>
                    ❤️
                </div>
            </div>
        </div>
      </div>
    );
}

export default LoginForm;