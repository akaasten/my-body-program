import type { JSX } from 'react';
import Image from 'next/image';
import { unstable_setRequestLocale } from 'next-intl/server';
import CardArticle from '../../_assets/components/CardArticle';
import { getSEOTags } from '@/libs/seo';
import config from '@/config';
import { loadAuthors, authorType, articleType, loadArticles } from '@/libs/articles';

const socialIcons: {
    [key: string]: {
        name: string;
        svg: JSX.Element;
    };
} = {
    twitter: {
        name: 'Twitter',
        svg: (
            <svg
                version='1.1'
                id='svg5'
                x='0px'
                y='0px'
                viewBox='0 0 1668.56 1221.19'
                className='w-9 h-9'
                // Using a dark theme? ->  className="w-9 h-9 fill-white"
            >
                <g id='layer1' transform='translate(52.390088,-25.058597)'>
                    <path
                        id='path1009'
                        d='M283.94,167.31l386.39,516.64L281.5,1104h87.51l340.42-367.76L984.48,1104h297.8L874.15,558.3l361.92-390.99   h-87.51l-313.51,338.7l-253.31-338.7H283.94z M412.63,231.77h136.81l604.13,807.76h-136.81L412.63,231.77z'
                    />
                </g>
            </svg>
        ),
    },
    linkedin: {
        name: 'LinkedIn',
        svg: (
            <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 h-6'
                // Using a dark theme? ->  className="w-6 h-6 fill-white"
                viewBox='0 0 24 24'
            >
                <path d='M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z' />
            </svg>
        ),
    },
    github: {
        name: 'GitHub',
        svg: (
            <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 h-6'
                // Using a dark theme? ->  className="w-6 h-6 fill-white"
                viewBox='0 0 24 24'
            >
                <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
            </svg>
        ),
    },
};

export async function generateMetadata({ params }: { params: { authorId: string } }) {
    const authors: authorType[] = await loadAuthors();
    const author = authors.find((author) => author.slug === params.authorId);

    return getSEOTags({
        title: `${author.name}, Author at ${config.appName}'s Blog`,
        description: `${author.name}, Author at ${config.appName}'s Blog`,
        canonicalUrlRelative: `/blog/author/${author.slug}`,
    });
}

export default async function Author({ params }: { params: { locale: string; authorId: string } }) {
    unstable_setRequestLocale(params.locale);

    const authors: authorType[] = await loadAuthors();
    const articles: articleType[] = await loadArticles();

    const author = authors.find((author) => author.slug === params.authorId);
    const articlesByAuthor = articles
        .filter((article) => article.author.slug === author.slug)
        .sort((a, b) => new Date(b.publishedAt).valueOf() - new Date(a.publishedAt).valueOf());

    articlesByAuthor.forEach((article) => {
        const author = authors.find((author) => author.slug === article.author.slug);
        article.author = author;
    });

    return (
        <>
            <section className='max-w-3xl mx-auto flex flex-col md:flex-row gap-8 mt-12 mb-24 md:mb-32'>
                <div>
                    <p className='text-xs uppercase tracking-wide text-base-content/80 mb-2'>Authors</p>
                    <h1 className='font-extrabold text-3xl lg:text-5xl tracking-tight mb-2'>{author.name}</h1>
                    <p className='md:text-lg mb-6 md:mb-10 font-medium'>{author.job}</p>
                    <p className='md:text-lg text-base-content/80'>{author.description}</p>
                </div>

                <div className='max-md:order-first flex md:flex-col gap-4 shrink-0'>
                    <Image
                        src={author.avatar}
                        width={256}
                        height={256}
                        alt={author.name}
                        priority={true}
                        className='rounded-box w-[12rem] md:w-[16rem] '
                    />

                    {author.socials?.length > 0 && (
                        <div className='flex flex-col md:flex-row gap-4'>
                            {author.socials.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    className='btn btn-square'
                                    // Using a dark theme? -> className="btn btn-square btn-neutral"
                                    title={`Go to ${author.name} profile on ${social.name}`}
                                    target='_blank'
                                >
                                    {socialIcons[social.icon as string].svg}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <section>
                <h2 className='font-bold text-2xl lg:text-4xl tracking-tight text-center mb-8 md:mb-12'>Most recent articles by {author.name}</h2>

                <div className='grid lg:grid-cols-2 gap-8'>
                    {articlesByAuthor.map((article) => (
                        <CardArticle key={article.slug} article={article} />
                    ))}
                </div>
            </section>
        </>
    );
}
