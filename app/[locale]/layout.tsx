import React from 'react';
import { Inter } from 'next/font/google';
import { Viewport } from 'next';
import PlausibleProvider from 'next-plausible';
import { getSEOTags } from '@/libs/seo';
import ClientLayout from '@/components/LayoutClient';
import { GoogleAnalytics } from '@next/third-parties/google';
import config from '@/config';
import '@/app/globals.css';

//Internationalization
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Script from 'next/script';

const font = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
    // Will use the primary color of your theme to show a nice theme color in the URL bar of supported browsers
    themeColor: config.colors.main,
    width: 'device-width',
    initialScale: 1,
};

// This adds default SEO tags to all pages in our app.
// You can override them in each page passing params to getSOTags() function.
//export const metadata = getSEOTags();

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    return await getSEOTags();
}

export default async function LocaleLayout({ children, params: { locale } }: { children: React.ReactNode; params: { locale: string } }) {
    const messages = await getMessages();
    return (
        <html lang={locale} data-theme={config.colors.theme} className={font.className}>
            {config.domainName && (
                <head>
                    {process.env.NODE_ENV !== 'development' && (
                        <>
                            <PlausibleProvider
                                domain={config.domainName}
                                customDomain={'https://plausible-analytics-ce-production-216f.up.railway.app'}
                                scriptProps={{ defer: true, async: true }}
                                revenue={true}
                                trackOutboundLinks={true}
                                taggedEvents={true}
                            />
                            <Script
                                src='https://umami-production-a7e8.up.railway.app/script.js'
                                data-website-id='d3ab1dcd-8895-4c1f-80c2-52d2fffc9499'
                            />
                            <GoogleAnalytics gaId='G-YP5MYP4EQS' />
                        </>
                    )}
                </head>
            )}
            <body>
                {/* ClientLayout contains all the client wrappers (Crisp chat support, toast messages, tooltips, etc.) */}
                <NextIntlClientProvider messages={messages}>
                    <ClientLayout>{children}</ClientLayout>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
