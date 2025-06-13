import './styles/globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/header';
import ActiveSectionContextProvider from '@/context/active-section-context';
import Footer from '@/components/footer';
import ThemeSwitch from '@/components/theme-switch';
import ThemeContextProvider from '@/context/theme-context';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { routing } from '../src/i18n/routing';
import { notFound } from 'next/navigation';
import { headers } from 'next/headers';
import { getMessages } from 'next-intl/server';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Vadim Kim CV',
  description: 'Vadim Kim front-end developer',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
   const headersList = await headers();
  const requestedLocale: string = headersList.get('accept-language')?.split(',')[0]?.split('-')[0] || 'en';

  const locale = hasLocale(routing.locales, requestedLocale)
  ? (requestedLocale as typeof routing.locales[number])
  : routing.defaultLocale;

  const messages = await getMessages({ locale });
  return (
    <html lang={locale} className="!scroll-smooth">
      <NextIntlClientProvider>
        <body className="min-h-screen bg-gray-50 text-gray-950 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90">
          <div className={`${inter.className} relative pt-28 sm:pt-36`}>
            <div className="bg-[#b0c4de] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#283447]"></div>
            <div className="bg-[#a3b4cc] absolute -z-10 top-[-6rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.7rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[15rem] 2xl:left-[-5rem] dark:bg-[#2b3b51]"></div>
            <ThemeContextProvider>
              <ActiveSectionContextProvider>
                <Header />
                {children}
                <Footer />
                <ThemeSwitch />
              </ActiveSectionContextProvider>
            </ThemeContextProvider>
          </div>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
