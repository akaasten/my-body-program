import React from 'react';
import { Inter } from 'next/font/google';
import { Viewport } from 'next';
import PlausibleProvider from 'next-plausible';
import { Analytics } from '@vercel/analytics/react';
import { getSEOTags } from '@/libs/seo';
import ClientLayout from '@/components/LayoutClient';
import { GoogleAnalytics } from '@next/third-parties/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import config from '@/config';

import '@/app/globals.css';

//Internationalization
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

const font = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
    // Will use the primary color of your theme to show a nice theme color in the URL bar of supported browsers
    themeColor: config.colors.main,
    width: 'device-width',
    initialScale: 1,
};

// This adds default SEO tags to all pages in our app.
// You can override them in each page passing params to getSOTags() function.
export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    return await getSEOTags();
}

export default async function LocaleLayout({ children, params: { locale } }: { children: React.ReactNode; params: { locale: string } }) {
    unstable_setRequestLocale(locale);
    const messages = await getMessages();
    return (
        <html lang={locale} data-theme={config.colors.theme} className={font.className}>
            {config.domainName && (
                <head>
                    <PlausibleProvider
                        domain={config.domainName}
                        customDomain={'https://plausible-analytics-ce-production-216f.up.railway.app'}
                        scriptProps={{ defer: true, async: true }}
                        revenue={true}
                        trackOutboundLinks={true}
                        taggedEvents={true}
                    />
                    <Analytics />
                    <GoogleAnalytics gaId='G-YP5MYP4EQS' />
                    <SpeedInsights />
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
