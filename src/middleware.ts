// import createMiddleware from 'next-intl/middleware';
// import { routing } from './i18n/routing';

// export default createMiddleware({
//   ...routing,
//   localeDetection: true,
// });

// export const config = {
//   matcher: ['/((?!api|trpc|_next|_vercel|.*\\..*).*)'],
// };


import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n/routing';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'never'
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};