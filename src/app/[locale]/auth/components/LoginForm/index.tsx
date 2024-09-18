'use client'

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';



const LoginForm = () => {
    const t = useTranslations('login');

    const [mounted, setMounted] = useState(false);
    const {setTheme, resolvedTheme} = useTheme();

    useEffect(() => setMounted(true), []);

    return (
      <div>
        <button onClick={() => setTheme('dark')}>test dark</button>
        <button onClick={() => setTheme('light')}>test light</button>

        {mounted && ( 'mounted' )}
        
        <div>
            <h2 className='text-[#32264D] text-[32px]'>{t('form_title')}</h2>
            
            <div className='block'>
                <input
                    className='block'
                    type="text"
                    placeholder={t('email_placeholder')}
                />
                <input
                    className='block'
                    type="password"
                    placeholder={t('password_placeholder')}
                />
            </div>

            <div className='flex'>
                <input type="checkbox" /> <p>{t('remember_login')}</p>
                <Link href="/recover">{t('forget_password')}</Link>
            </div>

            <button>{t('submit')}</button>

            <div>
                <div>
                    <p>{t('dont_have_account')}</p>
                    <Link href="/recover">{t('signup_link')}</Link>
                </div>

                <div>
                    <p>{t('free_message')}</p>
                </div>
            </div>
        </div>
      </div>
    );
}

export default LoginForm;