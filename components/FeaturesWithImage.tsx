'use client';

import type { JSX } from 'react';
import Image from 'next/image';
import videoBuilder from '@/public/home/steps/video_builder.png';

interface Feature {
    icon?: JSX.Element;
    title: string;
    desc: string;
}

interface FeaturesWithImageProps {
    title: {
        part1: string;
        part2: string;
    };
    features: Feature[];
}

// A component to display 2 to 5 features in an accordion.
// By default, the first feature is selected. When a feature is clicked, the others are closed.
const FeaturesWithImage = (featuresWithImage: FeaturesWithImageProps) => {
    return (
        <section className='max-w-screen-xl mx-auto flex flex-col lg:flex-col items-center justify-between gap-16 lg:gap-20 px-6 py-10 lg:py-16'>
            <h2 className='font-extrabold text-4xl lg:text-6xl tracking-tight text-primary'>
                {featuresWithImage.title.part1}
                <span className='bg-secondary40 px-2 md:px-4 ml-1 md:ml-1.5 leading-relaxed lg:whitespace-nowrap'>
                    {featuresWithImage.title.part2}
                </span>
            </h2>
            <div className='relative z-10 max-w-screen-xl mx-auto px-4 justify-between gap-12 lg:flex md:px-8'>
                <div className='max-w-xl'>
                    <Image src={videoBuilder} alt='Step Creation' className='shadow-lg rounded-lg' />
                </div>
                <div className='mt-12 lg:mt-0'>
                    <ul className='grid gap-8 sm:grid-cols-2'>
                        {featuresWithImage.features.map((item, index) => (
                            <li key={index} className='flex items-center gap-x-4'>
                                <div className='flex-none w-12 h-12 bg-primary text-secondary40 rounded-lg flex items-center justify-center'>
                                    {item.icon}
                                </div>
                                <div>
                                    <p className='text-lg font-semibold'>{item.title}</p>
                                    <p className='mt-3'>{item.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default FeaturesWithImage;
