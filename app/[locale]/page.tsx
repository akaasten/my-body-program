import { Suspense } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import FeaturesWithImage from '@/components/FeaturesWithImage';
import Testimonials3 from '@/components/Testimonials3';
import Stats from '@/components/Stats';
import FeedbackSlider from '@/components/FeedbackSlider';
import { useTranslations } from 'next-intl';

export default function Home() {
    const t = useTranslations('Home');

    const hero = {
        title: {
            part1: t('hero.title.part1'),
            part2: t('hero.title.part2'),
        },
        description: t('hero.description'),
        testimonialsAvatarSentence: t('hero.testimonialsAvatarSentence'),
    };

    const feedbackArray = [
        {
            name: t('feedback.0.name'),
            gender: 'Male',
            programName: t('feedback.0.programName'),
            feedback: t('feedback.0.feedback'),
            img: 'https://randomuser.me/api/portraits/men/13.jpg',
        },
        {
            name: t('feedback.1.name'),
            gender: 'Male',
            programName: t('feedback.1.programName'),
            feedback: t('feedback.1.feedback'),
            img: 'https://randomuser.me/api/portraits/men/42.jpg',
        },
        {
            name: t('feedback.2.name'),
            gender: 'Male',
            programName: t('feedback.2.programName'),
            feedback: t('feedback.2.feedback'),
            img: 'https://randomuser.me/api/portraits/men/25.jpg',
        },
        {
            name: t('feedback.3.name'),
            gender: 'Female',
            programName: t('feedback.3.programName'),
            feedback: t('feedback.3.feedback'),
            img: 'https://randomuser.me/api/portraits/women/31.jpg',
        },
        {
            name: t('feedback.4.name'),
            gender: 'Male',
            programName: t('feedback.4.programName'),
            feedback: t('feedback.4.feedback'),
            img: 'https://randomuser.me/api/portraits/men/18.jpg',
        },
        {
            name: t('feedback.5.name'),
            gender: 'Female',
            programName: t('feedback.5.programName'),
            feedback: t('feedback.5.feedback'),
            img: 'https://randomuser.me/api/portraits/women/50.jpg',
        },
        {
            name: t('feedback.6.name'),
            gender: 'Male',
            programName: t('feedback.6.programName'),
            feedback: t('feedback.6.feedback'),
            img: 'https://randomuser.me/api/portraits/men/39.jpg',
        },
        {
            name: t('feedback.7.name'),
            gender: 'Female',
            programName: t('feedback.7.programName'),
            feedback: t('feedback.7.feedback'),
            img: 'https://randomuser.me/api/portraits/women/21.jpg',
        },
        {
            name: t('feedback.8.name'),
            gender: 'Male',
            programName: t('feedback.8.programName'),
            feedback: t('feedback.8.feedback'),
            img: 'https://randomuser.me/api/portraits/men/35.jpg',
        },
        {
            name: t('feedback.9.name'),
            gender: 'Female',
            programName: t('feedback.9.programName'),
            feedback: t('feedback.9.feedback'),
            img: 'https://randomuser.me/api/portraits/women/11.jpg',
        },
        {
            name: t('feedback.10.name'),
            gender: 'Male',
            programName: t('feedback.10.programName'),
            feedback: t('feedback.10.feedback'),
            img: 'https://randomuser.me/api/portraits/men/44.jpg',
        },
        {
            name: t('feedback.11.name'),
            gender: 'Female',
            programName: t('feedback.11.programName'),
            feedback: t('feedback.11.feedback'),
            img: 'https://randomuser.me/api/portraits/women/27.jpg',
        },
        {
            name: t('feedback.12.name'),
            gender: 'Male',
            programName: t('feedback.12.programName'),
            feedback: t('feedback.12.feedback'),
            img: 'https://randomuser.me/api/portraits/women/39.jpg',
        },
        {
            name: t('feedback.13.name'),
            gender: 'Male',
            programName: t('feedback.13.programName'),
            feedback: t('feedback.13.feedback'),
            img: 'https://randomuser.me/api/portraits/men/33.jpg',
        },
        {
            name: t('feedback.14.name'),
            gender: 'Female',
            programName: t('feedback.14.programName'),
            feedback: t('feedback.14.feedback'),
            img: 'https://randomuser.me/api/portraits/women/46.jpg',
        },
        {
            name: t('feedback.15.name'),
            gender: 'Male',
            programName: t('feedback.15.programName'),
            feedback: t('feedback.15.feedback'),
            img: 'https://randomuser.me/api/portraits/men/49.jpg',
        },
        {
            name: t('feedback.16.name'),
            gender: 'Male',
            programName: t('feedback.16.programName'),
            feedback: t('feedback.16.feedback'),
            img: 'https://randomuser.me/api/portraits/men/22.jpg',
        },
        {
            name: t('feedback.17.name'),
            gender: 'Male',
            programName: t('feedback.17.programName'),
            feedback: t('feedback.17.feedback'),
            img: 'https://randomuser.me/api/portraits/men/14.jpg',
        },
        {
            name: t('feedback.18.name'),
            gender: 'Female',
            programName: t('feedback.18.programName'),
            feedback: t('feedback.18.feedback'),
            img: 'https://randomuser.me/api/portraits/women/38.jpg',
        },
        {
            name: t('feedback.19.name'),
            gender: 'Female',
            programName: t('feedback.19.programName'),
            feedback: t('feedback.19.feedback'),
            img: 'https://randomuser.me/api/portraits/women/41.jpg',
        },
    ];

    const featuresWithImage = {
        title: {
            part1: t('featuresWithImage.title.part1'),
            part2: t('featuresWithImage.title.part2'),
        },
        features: [
            {
                icon: (
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='w-6 h-6'
                    >
                        <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z' />
                    </svg>
                ),
                title: t('featuresWithImage.features.0.title'),
                desc: t('featuresWithImage.features.0.desc'),
            },
            {
                icon: (
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='size-6'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z'
                        />
                    </svg>
                ),
                title: t('featuresWithImage.features.1.title'),
                desc: t('featuresWithImage.features.1.desc'),
            },
            {
                icon: (
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='size-6'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42'
                        />
                    </svg>
                ),
                title: t('featuresWithImage.features.2.title'),
                desc: t('featuresWithImage.features.2.desc'),
            },
            {
                icon: (
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='size-6'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z'
                        />
                    </svg>
                ),
                title: t('featuresWithImage.features.3.title'),
                desc: t('featuresWithImage.features.3.desc'),
            },
        ],
    };

    const problem = {
        title: t('problem.problem_title'),
        description: t('problem.problem_description'),
        steps: [
            { emoji: '🔥', text: t('problem.problem_step_1') },
            { emoji: '😮‍💨', text: t('problem.problem_step_2') },
            { emoji: '😔', text: t('problem.problem_step_3') },
        ],
    };

    const stats = {
        sectionTitle: t('stats.sectionTitle'),
        sectionSubtitle: t('stats.sectionSubtitle'),
        stats: [
            { value: 28654, label: t('stats.stats.0.label') },
            { value: 97, unit: '%', label: t('stats.stats.1.label') },
            { value: 93, unit: '%', label: t('stats.stats.2.label') },
            { value: 128, unit: '+', label: t('stats.stats.3.label') },
        ],
    };

    const testimonials = {
        sectionTitle: t('testimonials.sectionTitle'),
        sectionSubtitle: t('testimonials.sectionSubtitle'),
        testimonials: [
            {
                avatar: 'https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg',
                name: t('testimonials.testimonials.0.name'),
                title: t('testimonials.testimonials.0.title'),
                quote: t('testimonials.testimonials.0.quote'),
            },
            {
                avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
                name: t('testimonials.testimonials.1.name'),
                title: t('testimonials.testimonials.1.title'),
                quote: t('testimonials.testimonials.1.quote'),
            },
            {
                avatar: 'https://randomuser.me/api/portraits/women/61.jpg',
                name: t('testimonials.testimonials.3.name'),
                title: t('testimonials.testimonials.3.title'),
                quote: t('testimonials.testimonials.3.quote'),
            },
            {
                avatar: 'https://randomuser.me/api/portraits/men/13.jpg',
                name: t('testimonials.testimonials.2.name'),
                title: t('testimonials.testimonials.2.title'),
                quote: t('testimonials.testimonials.2.quote'),
            },
            {
                avatar: 'https://randomuser.me/api/portraits/women/26.jpg',
                name: t('testimonials.testimonials.4.name'),
                title: t('testimonials.testimonials.4.title'),
                quote: t('testimonials.testimonials.4.quote'),
            },
            {
                avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
                name: t('testimonials.testimonials.5.name'),
                title: t('testimonials.testimonials.5.title'),
                quote: t('testimonials.testimonials.5.quote'),
            },
        ],
    };

    const faq = {
        title: t('faq.title'),
        questions: [
            {
                question: t('faq.questions.0.question'),
                answer: t('faq.questions.0.answer'),
            },
            {
                question: t('faq.questions.1.question'),
                answer: t('faq.questions.1.answer'),
            },
            {
                question: t('faq.questions.2.question'),
                answer: t('faq.questions.2.answer'),
            },
            {
                question: t('faq.questions.3.question'),
                answer: t('faq.questions.3.answer'),
            },
            {
                question: t('faq.questions.4.question'),
                answer: t('faq.questions.4.answer'),
            },
            {
                question: t('faq.questions.5.question'),
                answer: t('faq.questions.5.answer'),
            },
        ],
    };

    return (
        <>
            <Suspense>
                <Header />
            </Suspense>
            <main>
                <Hero {...hero} />

                <FeedbackSlider feedbackArray={feedbackArray} />

                <Problem {...problem} />

                <FeaturesWithImage {...featuresWithImage} />

                <Stats {...stats} />

                <Testimonials3 {...testimonials} />

                <FAQ {...faq} />
            </main>

            <Footer />
        </>
    );
}
