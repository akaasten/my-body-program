'use client';

import React, { useState, useRef } from 'react';
import { toast } from 'react-hot-toast';
import apiClient from '@/libs/api';
import { useTranslations } from 'next-intl';

// This component is used to collect the emails from the landing page
// You'd use this if your product isn't ready yet or you want to collect leads
// For instance: A popup to send a freebie, joining a waitlist, etc.
// It calls the /api/lead/route.js route and store a Lead document in the database
const ButtonLead = ({ extraStyle }: { extraStyle?: string }) => {
    const inputRef = useRef(null);
    const [email, setEmail] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isDisabled, setIsDisabled] = useState<boolean>(false);
    const t = useTranslations('ButtonLead');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e?.preventDefault();

        setIsLoading(true);
        try {
            await apiClient.post('/lead', { email });

            toast.success(t('success'));

            // just remove the focus on the input
            inputRef.current.blur();
            setEmail('');
            setIsDisabled(true);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <form className={`w-full max-w-xs space-y-3 ${extraStyle ? extraStyle : ''}`} onSubmit={handleSubmit}>
            <input
                required
                type='email'
                value={email}
                ref={inputRef}
                autoComplete='email'
                placeholder='john@doe.com'
                className='input input-bordered w-full placeholder:opacity-60'
                onChange={(e) => setEmail(e.target.value)}
            />

            <button className='btn btn-primary btn-block ' type='submit' disabled={isDisabled}>
                {t('cta')}
                {isLoading ? <span className='loading loading-spinner loading-xs'></span> : <></>}
            </button>
        </form>
    );
};

export default ButtonLead;
