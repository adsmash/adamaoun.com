"use client";
import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const About: React.FC<{}> = () => {
  return (
    <motion.section
      id="about"
      className="flex flex-col items-center justify-center h-full relative px-4 md:px-10 py-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
      }}
    >
      <motion.div
        className="flex flex-col justify-around flex-wrap items-center max-w-[900px]"
        variants={fadeInUp}
      >
        <motion.h1
          className="text-white font-semibold text-4xl md:text-6xl"
          variants={fadeInUp}
        >
          ABOUT ME
        </motion.h1>
        <motion.p
          className="tracking-[0.2em] md:tracking-[0.5em] text-transparent font-light pb-3 md:pb-5 bg-clip-text bg-gradient-to-r from-blue-500 to-orange-400 text-sm md:text-1xl"
          variants={fadeInUp}
        >
          EXPLORE NOW
        </motion.p>
        <motion.p
          className="text-gray-300 text-center text-sm md:text-lg"
          variants={fadeInUp}
        >
          I am an aspiring software engineer with a passion for learning and solving complex problems.
          My goal is to become an SDE/Software Engineer, with a strong focus on AI/ML. I enjoy building
          efficient and scalable solutions, always exploring new technologies to expand my skill set.
          <br />
          <br />
          With a solid foundation in Python, TypeScript, C++, C#, JavaScript, Java, and R, I am eager to apply
          my knowledge to real-world projects that create meaningful impact.
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default About;
