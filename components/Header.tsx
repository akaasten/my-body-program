'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import config from '@/config';
import Link from 'next/link';
import logo from '@/app/icon.png';
import React from 'react';
import { useTranslations } from 'next-intl';

const Header: React.FC = () => {
    const [state, setState] = useState<boolean>(false);
    const t = useTranslations('Header');

    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Replace javascript:void(0) paths with your paths
    const navigation: Array<{ title: string; path: string }> = [
        // { title: 'Features', path: 'javascript:void(0)' },
        // { title: 'Integrations', path: 'javascript:void(0)' },
        // { title: 'Customers', path: 'javascript:void(0)' },
        // { title: 'Pricing', path: 'javascript:void(0)' },
    ];

    return (
        <nav className={`border-b w-full fixed top-0 left-0 z-50 lg:text-sm lg:border-none ${isScrolled || state ? 'bg-white' : 'bg-transparent'}`}>
            <div className='items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8'>
                <div className='flex items-center justify-between py-3 md:py-5 md:block'>
                    <Link className='flex items-center gap-2 shrink-0 ' href='/' title={`${config.appName} homepage`}>
                        <Image src={logo} alt={`${config.appName} logo`} className='w-8' placeholder='blur' priority={true} width={32} height={32} />
                        <span className='font-extrabold text-lg'>{config.appName}</span>
                    </Link>
                    <div className='md:hidden'>
                        <button className='text-gray-500 hover:text-gray-800' onClick={() => setState(!state)}>
                            {state ? (
                                <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' viewBox='0 0 20 20' fill='currentColor'>
                                    <path
                                        fillRule='evenodd'
                                        d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                                        clipRule='evenodd'
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    strokeWidth={1.5}
                                    stroke='currentColor'
                                    className='w-6 h-6'
                                >
                                    <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
                <div className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
                    <ul className='justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0'>
                        {navigation.map((item, idx) => {
                            return (
                                <li key={idx} className='text-gray-700 hover:text-indigo-600'>
                                    <a href={item.path} className='block'>
                                        {item.title}
                                    </a>
                                </li>
                            );
                        })}
                        <span className='hidden w-px h-6 bg-gray-300 md:block'></span>
                        <div className='space-y-3 items-center gap-x-6 md:flex md:space-y-0'>
                            <li>
                                <button className='btn btn-primary btn-block' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                    {t('cta')}
                                </button>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
