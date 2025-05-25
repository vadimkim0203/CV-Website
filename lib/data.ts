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

export const projectsData = [
  {
    title: 'ThinkStorm',
    description:
      'A platform built for innovators, developers, and learners who are passionate about creating and sharing projects.',
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
    title: 'Ocean Store',
    description:
      'E-commerce B2B website for Korean clothing brands and retailers around the world.',
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
    title: 'Procharity',
    description:
      'A platform for charitable organizations to manage donations and fundraising campaigns. It features a donation tracking, and campaign management tools.',
    tags: ['ReactJS', 'SCSS', 'Redux', 'Storybook'],
    imageUrl: proCharity,
    imageLink: 'https://procharity.ru/',
  },
  {
    title: 'Pocket WiFi Korea',
    description:
      "First freelance project for a small Korean data provider. Built with ReactJS custom components, this website provides all the necessary information regarding provider's plans.",
    tags: ['ReactJS', 'TailwindCSS'],
    imageUrl: pocketwifi,
    imageLink:
      'https://pocketwifikorea.com/?srsltid=AfmBOormPYdpaDQZjc8ueV5LDn5D7VbC5arTQ6wFtlINEGIeuXC43wU1',
  },
  {
    title: 'Tic-Tac-Toe Game',
    description:
      'A simple Tic-Tac-Toe game built using the React framework and such concepts as immutability, 2 way data binding and lifting states.',
    tags: ['ReactJS', 'JavaScript', 'CSS'],
    imageUrl: tictactoe,
  },
  {
    title: 'Investment Calculator',
    description:
      'A web application built with ReactJS that helps users calculate potential returns on their investments.',
    tags: ['ReactJS', 'JavaScript', 'CSS'],
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
  // 'bg-yellow-200',
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
