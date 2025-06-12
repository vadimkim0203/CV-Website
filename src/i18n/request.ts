import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

function hasLocale(locales: readonly string[], locale: string): boolean {
  return locales.includes(locale);
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested || '')
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
