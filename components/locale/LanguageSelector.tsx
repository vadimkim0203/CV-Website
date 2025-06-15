'use client';

import { usePathname, useRouter } from '../../src/i18n/navigation';
import { useLocale } from 'next-intl';
import { RiEnglishInput } from 'react-icons/ri';
import { TbAlphabetKorean } from 'react-icons/tb';

const languages = [
  {
    code: 'en',
    logo: <RiEnglishInput />,
  },
  { code: 'ko', logo: <TbAlphabetKorean /> },
];

export default function LanguageSelector() {
  const router = useRouter();
  const currentLocale = useLocale();
  const pathname = usePathname();

  const currentIndex = languages.findIndex(
    (lang) => lang.code === currentLocale,
  );
  const nextLanguage = languages[(currentIndex + 1) % languages.length];
  const handleLanguageChange = () => {
    router.replace(pathname, { locale: nextLanguage.code });
  };

  return (
    <button
      className="fixed bottom-20 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={handleLanguageChange}
      aria-label={`Switch to ${nextLanguage.code}`}
    >
      {nextLanguage.logo}
    </button>
  );
}
