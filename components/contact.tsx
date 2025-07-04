'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { useTranslations } from 'next-intl';

export default function Contact() {
  const { ref } = useSectionInView('Contact');
  const t = useTranslations('contact');

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>{t('Header')}</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        {t('Please')}{' '}
        <a className="underline" href="mailto:vadim.kim0203@gmail.com">
          vadim.kim0203@gmail.com
        </a>{' '}
      </p>
    </motion.section>
  );
}
