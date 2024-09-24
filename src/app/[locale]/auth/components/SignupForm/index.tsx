'use client'
import {useTranslations} from 'next-intl';
// // import {Link} from '@/i18n/routing';
// import styles from './styles.module.css';
// import LoginForm from '../components/LoginForm';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import { useState } from 'react'
import { FormControl, IconButton, InputLabel, TextField } from '@mui/material';

const SignupForm = () => {
    const t = useTranslations('signup');

    const [showPassword, setShowPassword] = useState(false);
    
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };
  
    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };

    return (
      <div>
        <h2 className='text-[#0c0914] text-[32px] dark:invert'>{t('form_title')}</h2>
        <p className='text-[#0c0914]'>{t('form_description')}</p>

        <form className='block'>
            <TextField className='block mt-5 w-full-input' id="outlined-basic" label={t('fullName_placeholder')} variant="outlined" />
            
            <TextField className='block mt-5 w-full-input' id="outlined-basic" label={t('email_placeholder')} variant="outlined" />
            
            <TextField
                className='block mt-5 w-full-input'
                id="outlined-basic" 
                label={t('password_placeholder')} 
                variant="outlined" 
                type='password' 
            />

            <TextField
                className='block mt-5 w-full-input'
                id="outlined-basic" 
                label={t('confirm_password_placeholder')} 
                variant="outlined" 
                type='password' 
            />

            <button className='btn primary-gradient my-6'>
                {t('submit')}
            </button>
        </form>

        <div className='flex'>
            <p className='dark:invert text-[#0c0914]'>{t('already_have_account')}</p><p className='text-[#FBAA4D] font-[700]'>{t('click_to_sign')}</p>
        </div>
      </div>
    );
}

export default SignupForm;