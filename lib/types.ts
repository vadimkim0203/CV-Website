import { StaticImageData } from 'next/image';
import { links } from './data';

export type SectionName = (typeof links)[number]['name'];

export interface ProjectData {
  title: string;
  location: string;
  description: string;
}

export interface LocalizedProjectData {
  translations: {
    en: { title: string; description: string };
    ko: { title: string; description: string };
  };
  tags: string[];
  imageUrl: StaticImageData;
  imageLink?: string
}



