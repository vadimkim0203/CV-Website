'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { Switch } from './ui/switch';
import { Label } from './ui/label';
import { useTranslations } from 'next-intl';

export default function About() {
  const { ref } = useSectionInView('About');
  const t = useTranslations('about');
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{t('title')}</SectionHeading>

      <p>
        {t.rich('paragraph1', {
          degree: (chunks) => <span className="font-medium">{chunks}</span>,
          position: (chunks) => <span className="font-bold">{chunks}</span>,
          industry: (chunks) => <span className="font-medium">{chunks}</span>,
          learning: (chunks) => <span className="italic">{chunks}</span>,
          favorite: (chunks) => <span className="italic">{chunks}</span>,
          love: (chunks) => <span className="underline">{chunks}</span>,
          stack: (chunks) => <span className="font-medium">{chunks}</span>,
          seeking: (chunks) => <span className="font-medium">{chunks}</span>,
        })}
      </p>

      <p>
        {t.rich('paragraph2', {
          notCoding: (chunks) => <span className="italic">{chunks}</span>,
          learning: (chunks) => <span className="font-medium">{chunks}</span>,
          studying: (chunks) => <span className="font-medium">{chunks}</span>,
        })}
      </p>
    </motion.section>
  );
}
