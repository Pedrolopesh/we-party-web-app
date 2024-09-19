'use client'
import {useTranslations} from 'next-intl';
// // import {Link} from '@/i18n/routing';
// import styles from './styles.module.css';
// import LoginForm from '../components/LoginForm';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import { useState } from 'react'

const SignupForm = () => {
    const t = useTranslations('signup');

    const [showPassword, setShowPassword] = useState(false);
    
    return (
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
                type="text"
                placeholder={t('email_placeholder')}
            />
            <input
                className='block my-5'
                type="password"
                placeholder={t('password_placeholder')}
            />
            <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                // endAdornment={
                // <InputAdornment position="end">
                //     <IconButton
                //     aria-label="toggle password visibility"
                //     onClick={handleClickShowPassword}
                //     onMouseDown={handleMouseDownPassword}
                //     onMouseUp={handleMouseUpPassword}
                //     edge="end"
                //     >
                //     {showPassword ? <VisibilityOff /> : <Visibility />}
                //     </IconButton>
                // </InputAdornment>
                // }
                label="Password"
            />
        </div>
      </div>
    );
}

export default SignupForm;