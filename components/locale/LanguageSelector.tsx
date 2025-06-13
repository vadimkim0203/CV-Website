'use client';

import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'kr', name: '한국어', flag: '🇰🇷' },
];

export default function LanguageSelector() {
  const router = useRouter();
  const currentLocale = useLocale();

  const handleLanguageChange = (locale: string) => {
    router.push(`/${locale}`);
  };

  const currentLanguage = languages.find(
    (language) => language.code === currentLocale,
  );

  return (
    <Select value={currentLocale} onValueChange={handleLanguageChange}>
      <SelectTrigger
        className=" w-[140px] backdrop-blur-[0.5rem] bg-white bg-opacity-80 shadow-lg dark:bg-gray-950"
        aria-label="select language"
        onFocus={(e) => {
          e.target.scrollIntoView({ block: 'nearest', behavior: 'auto' });
        }}
        
      >
        <SelectValue>
          <div className="flex items-center gap-2">
            <span className="text-base">
              {currentLanguage?.flag}
            </span>
            <span className="text-sm">{currentLanguage?.name}</span>
          </div>
        </SelectValue>
      </SelectTrigger>

      <SelectContent side="bottom" >
        {languages.map((language) => (
          <SelectItem key={language.code} value={language.code}>
            <div className="flex items-center gap-1">
              <span className="text-base" >
                {language.flag}
              </span>
              <span className="text-sm">{language.name}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
