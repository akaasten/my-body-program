'use client';

import TestimonialsAvatars from './TestimonialsAvatars';
import ButtonLead from '@/components/ButtonLead';
import coachImage from '@/public/home/image.webp';
import Image from 'next/image';

interface HeroProps {
    title: {
        part1: string;
        part2: string;
    };
    description: string;
    testimonialsAvatarSentence: string;
}

/**
 * Hero component for the landing page.
 * Displays a headline, description, CTA button, testimonials, and an auto-playing video.
 */
const Hero = (hero: HeroProps) => {
    return (
        <section className='max-w-screen-xl mx-auto bg-base-100 flex flex-col my-12 lg:flex-row items-center justify-between gap-16 lg:gap-20 px-6 py-10 lg:py-12'>
            <div
                className='absolute inset-0 max-w-md mx-auto h-72 blur-[118px]'
                style={{
                    background:
                        'linear-gradient(152.92deg, rgba(10, 153, 237, 0.2) 4.54%, rgba(10, 153, 237, 0.26) 34.2%, rgba(10, 153, 237, 0.1) 77.55%)',
                }}
            ></div>
            {/* Left column: Text content */}
            <div className='flex flex-col gap-10 lg:gap-12 text-center lg:text-left lg:w-3/5'>
                <h1 className='text-5xl text-primary font-extrabold mx-auto md:text-6xl'>
                    {hero.title.part1}{' '}
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#083358] to-[#0a99ed] animate-shimmer'>
                        {hero.title.part2}
                    </span>
                </h1>
                <p className='max-w-2xl mx-auto'>{hero.description}</p>
                {/* CTA button for larger screens */}
                <div className='text-center mx-auto md:mx-0 hidden md:block'>
                    <ButtonLead />
                </div>
                {/* Testimonials component */}
                <TestimonialsAvatars priority={true} sentence={hero.testimonialsAvatarSentence} />
            </div>
            {/* Right column: Video */}
            <div className='lg:w-2/5 flex justify-center flex-col'>
                <Image src={coachImage} alt='coach' width={500} height={500} />
            </div>
            {/* CTA button for mobile screens */}
            <div className='text-center mx-auto md:mx-0 block md:hidden'>
                <ButtonLead />
            </div>
        </section>
    );
};

export default Hero;
