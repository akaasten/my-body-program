import { type NextRequest } from 'next/server';
import { updateSession } from '@/libs/supabase/middleware';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export async function middleware(request: NextRequest) {
    const response = await intlMiddleware(request);
    return await updateSession(request, response);
}

export const config = {
    matcher: [
        // Match internationalized pathnames
        '/',
        '/(en|fr)/:path*',
        // Match all request paths except for the ones starting with:
        // - _next/static (static files)
        // - _next/image (image optimization files)
        // - favicon.ico (favicon file)
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|xml)$).*)',
    ],
};
