import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import rmtdevImg from '@/public/rmtdev.png';
import pocketwifi from '@/public/pocketwifi.png';
import tictactoe from '@/public/tictactoe.png';
import investmentcalculator from '@/public/investmentcalc.png';
import thinkStorm from '@/public/thinkStorm.png';
import proCharity from '@/public/proCharity.png';
import { LocalizedProjectData } from './types';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'ThinkStorm',
    location: 'Seoul, South Korea',
    description:
      'As a frontend developer my goal is to build a scalable web structure with fully reusable components and simple yet useful functionality.',
    icon: React.createElement(CgWorkAlt),
    date: '2025/03 - now',
  },
  {
    title: 'Ocean Store',
    location: 'Seoul, South Korea',
    description:
      'Ocean Store is a platform that connects buyers with Korean wholesale sellers, helping them build and grow their local retail businesses.',
    icon: React.createElement(CgWorkAlt),
    date: '2024/11 - now',
  },

  {
    title: 'K-Beauty and career at DINSO and HINATURE',
    location: 'Seoul, South Korea',
    description:
      'Have worked in the Korean cosmetics industry while simultaneously learning various frameworks and enhancing my coding skills.',
    icon: React.createElement(CgWorkAlt),
    date: '2022 - 2024',
  },

  {
    title: 'Uniqlo',
    location: 'Moscow, Russia',
    description:
      'Worked as a store manager, where I developed strong leadership and problem-solving skills, and learned how to manage a team effectively.',
    icon: React.createElement(FaReact),
    date: '2016 - 2022',
  },
] as const;

export const projectsData: LocalizedProjectData[] = [
  {
    translations: {
      en: {
        title: 'ThinkStorm',
        description:
          'A platform built for innovators, developers, and learners who are passionate about creating and sharing projects.',
      },
      ko: {
        title: 'ThinkStorm',
        description:
          '혁신가, 개발자, 그리고 프로젝트를 만들고 공유하는 데 열정을 가진 학습자들을 위한 플랫폼.',
      },
    },
    tags: [
      'TypeScript',
      'TailwindCSS',
      'Tanstack Query',
      'ShadCN',
      'NestJS',
      'i18n',
    ],
    imageUrl: thinkStorm,
    imageLink: 'https://github.com/Think-Storm',
  },
  {
    translations: {
      en: {
        title: 'Ocean Store',
        description:
          'E-commerce B2B website for Korean clothing brands and retailers around the world.',
      },
      ko: {
        title: 'Ocean Store',
        description:
          '전 세계 소매업체와 한국 의류 브랜드를 위한 B2B 전자상거래 웹사이트.',
      },
    },
    tags: [
      'Next.js',
      'TailwindCSS',
      'SupaBase',
      'ShadCN',
      'Tanstack Query',
      'NestJS',
      'Axios',
      'i18n',
    ],
    imageUrl: rmtdevImg,
    imageLink: 'https://projectx-kappa.vercel.app/en',
  },
  {
    translations: {
      en: {
        title: 'Procharity',
        description:
          'A platform for charitable organizations to manage donations and fundraising campaigns. It features a donation tracking, and campaign management tools.',
      },
      ko: {
        title: 'Procharity',
        description:
          '자선 단체들이 기부와 모금 캠페인을 관리할 수 있도록 도와주는 플랫폼입니다. 기부 추적 기능과 캠페인 관리 도구를 갖추고 있습니다.',
      },
    },
    tags: ['ReactJS', 'SCSS', 'Redux', 'Storybook'],
    imageUrl: proCharity,
    imageLink: 'https://procharity.ru/',
  },
  {
    translations: {
      en: {
        title: 'Pocket WiFi Korea',
        description:
          "First freelance project for a small Korean data provider. Built with ReactJS custom components, this website provides all the necessary information regarding provider's plans.",
      },
      ko: {
        title: 'Pocket WiFi Korea',
        description:
          '작은 한국 데이터 제공업체를 위한 첫 프리랜스 프로젝트입니다. ReactJS 커스텀 컴포넌트로 제작된 이 웹사이트는 제공업체의 요금제에 대한 모든 필요한 정보를 제공합니다.',
      },
    },
    tags: ['ReactJS', 'TailwindCSS'],
    imageUrl: pocketwifi,
    imageLink:
      'https://pocketwifikorea.com/?srsltid=AfmBOormPYdpaDQZjc8ueV5LDn5D7VbC5arTQ6wFtlINEGIeuXC43wU1',
  },
  {
    translations: {
      en: {
        title: 'Tic-Tac-Toe Game',
        description:
          'A simple Tic-Tac-Toe game built using the React framework and such concepts as immutability, 2 way data binding and lifting states.',
      },
      ko: {
        title: '틱택토 게임',
        description:
          '불변성, 양방향 데이터 바인딩, 상태 끌어올리기와 같은 개념을 활용하여 React 프레임워크로 만든 간단한 틱택토 게임입니다.',
      },
    },
    tags: ['ReactJS', 'JavaScript', 'CSS'],
    imageUrl: tictactoe,
  },
  {
    translations: {
      en: {
        title: 'Investment Calculator',
        description:
          'A web application built with ReactJS that helps users calculate potential returns on their investments.',
      },
      ko: {
        title: '투자 계산기',
        description:
          'ReactJS로 제작된 이 웹 애플리케이션은 사용자가 투자 수익을 계산하는 데 도움을 줍니다.',
      },
    },
    tags: ['ReactJS', 'TailwindCSS'],
    imageUrl: investmentcalculator,
  },
];


export const skillsData = [
  'JavaScript',
  'TypeScript',
  'ReactJS',
  'NextJS',
  'TailwindCSS',
  'Supabase',
  'Redux',
  'Framer Motion',
  'Vercel',
  'Docker',
  'ShadCN',
  'Tanstack Query',
  'Axios',
  'i18n',
  'Storybook',
] as const;

export const skillColors = [
  'bg-blue-200',
  'bg-green-200',
  'bg-purple-200',
  'bg-pink-200',
  'bg-orange-200',
  'bg-red-200',
  'bg-gray-200',
  'bg-teal-200',
  'bg-indigo-200',
  'bg-cyan-200',
  'bg-lime-200',
] as const;
