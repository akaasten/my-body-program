import { StaticImageData } from 'next/image';
import type { JSX } from 'react';
import alexImg from '@/app/[locale]/blog/_assets/images/authors/alex.png';
import React from 'react';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import Markdown from 'markdown-to-jsx';
import { getLocale } from 'next-intl/server';

// ==================================================================================================================================================================
// CONST 🔓
// ==================================================================================================================================================================

const articlesDirectory: string = path.join(process.cwd(), 'content', 'articles');

// ==================================================================================================================================================================
// BLOG CATEGORIES 🏷️
// ==================================================================================================================================================================

export type categoryType = {
    slug: string;
    title: string;
    titleShort?: string;
    description: string;
    descriptionShort?: string;
};

// All the blog categories data display in the /blog/category/[categoryI].js pages.
export const categories: categoryType[] = [
    {
        // The slug to use in the URL, from the categorySlugs object above.
        slug: 'feature',
        // The title to display the category title (h1), the category badge, the category filter, and more. Less than 60 characters.
        title: 'New Features',
        // A short version of the title above, display in small components like badges. 1 or 2 words
        titleShort: 'Features',
        // The description of the category to display in the category page. Up to 160 characters.
        description: "Here are the latest features we've added to ShipFast. I'm constantly improving our product to help you ship faster.",
        // A short version of the description above, only displayed in the <Header /> on mobile. Up to 60 characters.
        descriptionShort: 'Latest features added to ShipFast.',
    },
    {
        slug: 'tutorial',
        title: 'How Tos & Tutorials',
        titleShort: 'Tutorials',
        description: "Learn how to use ShipFast with these step-by-step tutorials. I'll show you how to ship faster and save time.",
        descriptionShort: 'Learn how to use ShipFast with these step-by-step tutorials.',
    },
];

// ==================================================================================================================================================================
// BLOG AUTHORS 📝
// ==================================================================================================================================================================

export type authorType = {
    slug: string;
    name: string;
    job: string;
    description: string;
    avatar: StaticImageData | string;
    socials?: {
        name: string;
        icon: JSX.Element | string;
        url: string;
    }[];
};

// Social icons used in the author's bio.
export const socialIcons: {
    [key: string]: {
        name: string;
        svg: JSX.Element;
    };
} = {
    twitter: {
        name: 'Twitter',
        svg: React.createElement(
            'svg',
            {
                version: '1.1',
                id: 'svg5',
                x: '0px',
                y: '0px',
                viewBox: '0 0 1668.56 1221.19',
                className: 'w-9 h-9',
            },
            React.createElement(
                'g',
                {
                    id: 'layer1',
                    transform: 'translate(52.390088,-25.058597)',
                },
                React.createElement('path', {
                    id: 'path1009',
                    d: 'M283.94,167.31l386.39,516.64L281.5,1104h87.51l340.42-367.76L984.48,1104h297.8L874.15,558.3l361.92-390.99   h-87.51l-313.51,338.7l-253.31-338.7H283.94z M412.63,231.77h136.81l604.13,807.76h-136.81L412.63,231.77z',
                })
            )
        ),
    },
    linkedin: {
        name: 'LinkedIn',
        svg: React.createElement(
            'svg',
            {
                xmlns: 'http://www.w3.org/2000/svg',
                className: 'w-6 h-6',
                viewBox: '0 0 24 24',
            },
            React.createElement('path', {
                d: 'M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z',
            })
        ),
    },
    github: {
        name: 'GitHub',
        svg: React.createElement(
            'svg',
            {
                xmlns: 'http://www.w3.org/2000/svg',
                className: 'w-6 h-6',
                viewBox: '0 0 24 24',
            },
            React.createElement('path', {
                d: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
            })
        ),
    },
};

// All the blog authors data display in the /blog/author/[authorId].js pages.
export const authors: authorType[] = [
    {
        // The slug to use in the URL, from the authorSlugs object above.
        slug: 'alexandre',
        // The name to display in the author's bio. Up to 60 characters.
        name: 'Alexandre',
        // The job to display in the author's bio. Up to 60 characters.
        job: 'Rédacteur',
        // The description of the author to display in the author's bio. Up to 160 characters.
        description: '',
        // The avatar of the author to display in the author's bio and avatar badge. It's better to use a local image, but you can also use an external image (https...)
        avatar: alexImg,
        // A list of social links to display in the author's bio.
        socials: [
            {
                name: socialIcons.twitter.name,
                icon: socialIcons.twitter.svg,
                url: 'https://twitter.com/akaasten',
            },
            {
                name: socialIcons.linkedin.name,
                icon: socialIcons.linkedin.svg,
                url: 'https://www.linkedin.com/in/alexandre.derocq/',
            },
            {
                name: socialIcons.github.name,
                icon: socialIcons.github.svg,
                url: 'https://github.com/Marc-Lou-Org/ship-fast',
            },
        ],
    },
];

// ==================================================================================================================================================================
// BLOG ARTICLES 📚
// ==================================================================================================================================================================

export type articleType = {
    slug: string;
    title: string;
    description: string;
    categories: categoryType[];
    author: authorType;
    publishedAt: string;
    image: {
        src?: StaticImageData;
        urlRelative: string;
        alt: string;
    };
    content: JSX.Element;
};

// These styles are used in the content of the articles. When you update them, all articles will be updated.
export const articleStyles: {
    [key: string]: string;
} = {
    h2: 'text-2xl lg:text-4xl font-bold tracking-tight mb-4 text-base-content',
    h3: 'text-xl lg:text-2xl font-bold tracking-tight my-4 text-base-content',
    p: 'text-base-content/90 leading-relaxed mb-4',
    ul: 'list-inside list-disc text-base-content/90 leading-relaxed my-4',
    li: 'list-item',
    img: 'my-12 rounded-box',
    a: 'link link-hover link-primary',
    // Altnernatively, you can use the library react-syntax-highlighter to display code snippets.
    code: 'text-sm font-mono bg-neutral text-neutral-content p-6 rounded-box my-4 overflow-x-scroll select-all',
    codeInline: 'text-sm font-mono bg-base-300 px-1 py-0.5 rounded-box select-all',
};

// ==================================================================================================================================================================
// FUNCTIONS 🧪
// ==================================================================================================================================================================

/**
 * Recursively loads articles, categories, or authors from the specified directory.
 * @param {string} directory - The directory to search.
 * @param {string} type - The type of data to load ('article', 'category', or 'author').
 * @returns {Promise<any[]>} A promise that resolves to an array of loaded data.
 */

async function loadRecursively(directory: string, type: 'article' | 'category' | 'author'): Promise<any[]> {
    const fileNames: string[] = fs.readdirSync(directory);

    const loadedData = await Promise.all(
        fileNames.map(async (fileName) => {
            const fullPath = path.join(directory, fileName);
            const isDirectory = fs.statSync(fullPath).isDirectory();

            if (isDirectory) {
                return loadRecursively(fullPath, type);
            }

            if (!fileName.endsWith('.md')) return null;

            const fileContent = fs.readFileSync(fullPath, 'utf8');
            const { data, content } = matter(fileContent);

            switch (type) {
                case 'article':
                    return {
                        ...data,
                        content: (
                            <Markdown
                                options={{
                                    overrides: {
                                        h2: { props: { className: articleStyles.h2 } },
                                        h3: { props: { className: articleStyles.h3 } },
                                        p: { props: { className: articleStyles.p } },
                                        ul: { props: { className: articleStyles.ul } },
                                        li: { props: { className: articleStyles.li } },
                                        img: { props: { className: articleStyles.img } },
                                        a: { props: { className: articleStyles.a } },
                                        code: { props: { className: articleStyles.code } },
                                    },
                                }}
                            >
                                {content}
                            </Markdown>
                        ),
                    };
                case 'category':
                    return data.categories;
                case 'author':
                    return data.author;
            }
        })
    );

    const flattenedData = loadedData.flat().filter(Boolean);

    // Remove duplicates based on the 'slug' property
    const uniqueData = Array.from(new Map(flattenedData.map((item) => [item.slug, item])).values());

    return uniqueData;
}

/**
 * Loads all articles from the specified articles directory.
 * @returns {Promise<articleType[]>} A promise that resolves to an array of articles.
 */
export async function loadArticles(): Promise<articleType[]> {
    const locale = await getLocale();
    return loadRecursively(path.join(articlesDirectory, locale), 'article');
}

/**
 * Loads all categories from the specified articles directory.
 * @returns {Promise<categoryType[]>} A promise that resolves to an array of categories.
 */
export async function loadCategories(): Promise<categoryType[]> {
    const locale = await getLocale();
    return loadRecursively(path.join(articlesDirectory, locale), 'category');
}

/**
 * Loads all authors from the specified articles directory.
 * @returns {Promise<authorType[]>} A promise that resolves to an array of authors.
 */
export async function loadAuthors(): Promise<authorType[]> {
    const locale = await getLocale();
    return loadRecursively(path.join(articlesDirectory, locale), 'author');
}
