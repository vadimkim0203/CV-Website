import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import expensetracker from "@/public/expensetracker.png"
import pocketwifi from "@/public/pocketwifi.png";
import tictactoe from "@/public/tictactoe.png";
import investmentcalculator from "@/public/investmentcalc.png";
//import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated from Moscow State University of Management",
    location: "Moscow, Russia",
    description:
      "Bachelor degree in Government and Municipal Management",
    icon: React.createElement(LuGraduationCap),
    date: "2018",
  },
  {
    title: "UNIQLO Career Path",
    location: "Saint-Petersburg, Russia",
    description:
      "Started my career as a part timer. Through 7 years of work got promoted from Seller-Cashier to a Store Manager position.",
    icon: React.createElement(CgWorkAlt),
    date: "2014-2022",
  },

  {
    title: "Career Change and Front-End Skill Development",
    location: "Seoul, South Korea",
    description:
      "Relocated to South Korea, motivated by personal and family considerations. During this transition, I focused on adjusting to my new life and took courses to develop my skills in front-end development, setting myself up for a new career path in web development.",
    icon: React.createElement(FaReact),
    date: "2022 - 2023",
  },

  {
    title: "K-Beauty and career at DINSO and HINATURE",
    location: "Seoul, South Korea",
    description:
      "Have worked in the Korean cosmetics industry while simultaneously learning various frameworks and enhancing my coding skills.",
    icon: React.createElement(FaReact),
    date: "2023 - 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Amazon Clone Project",
    description:
      "This project is a full-featured Amazon clone website, built to showcase e-commerce functionality. Through this project, I trained my skills in JavaScript, HTML, CSS, and Object-Oriented Programming (OOP).",
    tags: ["JavaScript", "HTML", "CSS", "OOP"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Clothing B2B EC Platform",
    description:
      "Platform that's tailored for the clothing industry, focusing on the unique needs of business-to-business transactions.",
    tags: ["ReactJS", "TypeScript", "Next.js", "Tailwind", "SupaBase"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Incomes and expenses tracker",
    description:
      "This tracker helps you to manage your income and expenses. All data is saved to the local storage which makes this tool convenient and usable.",
    tags: ["VueJS", "JavaScript", "CSS", "Vue Toastification"],
    imageUrl: expensetracker,
  },
  {
    title: "Pocket WiFi plan page",
    description:
      "First freelance project for a small Korean data provider. Built with ReactJS custom components, this website provides all the necessary information regarding provider's plans.",
    tags: ["ReactJS", "JavaScript", "CSS"],
    imageUrl: pocketwifi,
  },
  {
    title: "Tic-Tac-Toe Game",
    description:
      "A simple Tic-Tac-Toe game built using the React framework and such concepts as immutability, 2 way data binding and lifting states.",
    tags: ["ReactJS", "JavaScript", "CSS"],
    imageUrl: tictactoe,
  },
  {
    title: "Investment Calculator",
    description:
      "A web application built with ReactJS that helps users calculate potential returns on their investments.",
    tags: ["ReactJS", "JavaScript", "CSS"],
    imageUrl: investmentcalculator,
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Framer Motion",
  "Vercel",
] as const;