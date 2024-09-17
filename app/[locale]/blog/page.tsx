import CardArticle from './_assets/components/CardArticle';
import CardCategory from './_assets/components/CardCategory';
import config from '@/config';
import { getSEOTags } from '@/libs/seo';
import { loadCategories, categoryType, authorType, loadAuthors, loadArticles } from '@/libs/articles';
import { unstable_setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations({
        namespace: 'Config',
    });
    return await getSEOTags({
        title: t('blogTitle'),
        description: t('blogDescription'),
        canonicalUrlRelative: '/blog',
    });
}

export default async function Blog({ params: { locale } }: { params: { locale: string } }) {
    unstable_setRequestLocale(locale);
    const allArticles = await loadArticles();
    const articlesToDisplay = allArticles.sort((a, b) => new Date(b.publishedAt).valueOf() - new Date(a.publishedAt).valueOf()).slice(0, 6);

    const authors: authorType[] = await loadAuthors();
    articlesToDisplay.forEach((article) => {
        const author = authors.find((author) => author.slug === article.author.slug);
        article.author = author;
    });

    const categories: categoryType[] = await loadCategories();
    return (
        <>
            <section className='text-center max-w-xl mx-auto mt-12 mb-24 md:mb-32'>
                <h1 className='font-extrabold text-3xl lg:text-5xl tracking-tight mb-6'>Le blog {config.appName}</h1>
                <p className='text-lg opacity-80 leading-relaxed'>
                    Toutes les informations nécessaires pour vous aider à trouver le programme PDF qui vous correspond.
                </p>
            </section>

            <section className='grid lg:grid-cols-2 mb-24 md:mb-32 gap-8'>
                {articlesToDisplay.map((article) => (
                    <CardArticle article={article} key={article.slug} />
                ))}
            </section>

            <section>
                <p className='font-bold text-2xl lg:text-4xl tracking-tight text-center mb-8 md:mb-12'>Naviguez en cherchant par catégorie</p>

                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {categories.map((category) => (
                        <CardCategory key={category.slug} category={category} tag='div' />
                    ))}
                </div>
            </section>
        </>
    );
}
