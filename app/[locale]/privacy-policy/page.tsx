import Link from 'next/link';
import { getSEOTags } from '@/libs/seo';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
// CHATGPT PROMPT TO GENERATE YOUR PRIVACY POLICY — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple privacy policy for my website. Here is some context:
// - Website: https://shipfa.st
// - Name: ShipFast
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Purpose of Data Collection: Order processing
// - Data sharing: we do not share the data with any other parties
// - Children's Privacy: we do not collect any data from children
// - Updates to the Privacy Policy: users will be updated by email
// - Contact information: marc@shipfa.st

// Please write a simple privacy policy for my site. Add the current date.  Do not add or explain your reasoning. Answer:

// This adds default SEO tags to all pages in our app.
// You can override them in each page passing params to getSOTags() function.

export const metadata = async () => {
    const t = await getTranslations({
        namespace: 'Config',
    });
    return await getSEOTags({
        title: t('privacyPolicyTitle'),
        canonicalUrlRelative: '/privacy-policy',
    });
};

const PrivacyPolicy = ({ params }: { params: { locale: string; authorId: string } }) => {
    unstable_setRequestLocale(params.locale);
    const t = useTranslations('PrivacyPolicy');
    return (
        <main className='max-w-xl mx-auto'>
            <div className='p-5'>
                <Link href='/' className='btn  text-black'>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='w-5 h-5'>
                        <path
                            fillRule='evenodd'
                            d='M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z'
                            clipRule='evenodd'
                        />
                    </svg>{' '}
                    Back
                </Link>
                <h1 className='text-3xl font-extrabold pb-6'>{t('title')}</h1>

                <pre className='leading-relaxed whitespace-pre-wrap' style={{ fontFamily: 'sans-serif' }}>
                    {t.rich('description', {
                        br: () => <br />,
                    })}
                </pre>
            </div>
        </main>
    );
};

export default PrivacyPolicy;
