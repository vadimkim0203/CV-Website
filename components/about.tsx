"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from "framer-motion"
import { useSectionInView } from '@/lib/hooks'

export default function About() {

  const { ref } = useSectionInView("About");


  return (
    <motion.section
      ref={ref}
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'>
      <SectionHeading>About Me</SectionHeading>
      <p>
        After graduating with a degree in{" "}
        <span className="font-medium">Government and Municipal Management</span>, I spent 7 years at Uniqlo, working my way up to{" "}
        <span className="font-bold">store manager</span>. Later, I moved into the{" "}
        <span className="font-medium">Korean skincare industry as a sales manager</span>, where I discovered an interest in web development. While working in cosmetics, I{" "}
        <span className="italic">started learning to code</span> and completed multiple free courses and bootcamps.{" "}
        <span className="italic">My favorite part of programming</span> is the problem-solving aspect. I{" "}
        <span className="underline">love</span> the feeling of finally figuring out a solution to a problem. My core stack includes{" "}
        <span className="font-medium">React, Next.js, Node.js, and MongoDB</span>. I am also familiar with TypeScript and Prisma, and I am always looking to learn new technologies.{" "}
        <span className="font-medium">I am currently seeking a full-time position as a software developer</span> to continue building my skills and experience.
      </p>



      <p>
        <span className="italic">When I'm not coding</span>, I love listening to music 🎼, traveling the world 🌎, and exploring new culinary concepts 🍣. I also enjoy{" "}
        <span className="font-medium">learning new things</span> and am currently diving into{" "}
        <span className="font-medium">fashion and design</span>.
      </p>
    </motion.section>
  )
}