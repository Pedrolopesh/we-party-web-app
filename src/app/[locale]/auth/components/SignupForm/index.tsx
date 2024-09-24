'use client'
import {useTranslations} from 'next-intl';
import { useState } from 'react'
import { TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools'

export interface ISignupForm {
    fullname: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const SignupForm = () => {
    const t = useTranslations('signup');

    const form = useForm<ISignupForm>()
    const { register, control, handleSubmit } = form

    const [showPassword, setShowPassword] = useState(false);
    
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };
  
    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };

    const onSubmit = (data: ISignupForm) => {
        console.log('form submitted', data);
    }

    return (
      <div>
        <h2 className='text-[#0c0914] text-[32px] dark:invert'>{t('form_title')}</h2>
        <p className='text-[#0c0914]'>{t('form_description')}</p>

        <form className='block' onSubmit={handleSubmit(onSubmit)} noValidate>
            <TextField className='block mt-5 w-full-input' id="outlined-basic" label={t('fullName_placeholder')} variant="outlined" {...register('fullname')}/>
            
            <TextField className='block mt-5 w-full-input' id="outlined-basic" label={t('email_placeholder')} variant="outlined" {...register('email')} />
            
            <TextField
                className='block mt-5 w-full-input'
                id="outlined-basic" 
                label={t('password_placeholder')} 
                variant="outlined" 
                type='password'
                {...register('password')}
            />

            <TextField
                className='block mt-5 w-full-input'
                id="outlined-basic" 
                label={t('confirm_password_placeholder')} 
                variant="outlined" 
                type='password'
                {...register('confirmPassword')}
            />

            <button className='btn primary-gradient my-6'>
                {t('submit')}
            </button>
            <DevTool control={control} />
        </form>

        <div className='flex'>
            <p className='dark:invert text-[#0c0914]'>{t('already_have_account')}</p><p className='text-[#FBAA4D] font-[700]'>{t('click_to_sign')}</p>
        </div>
      </div>
    );
}

export default SignupForm;