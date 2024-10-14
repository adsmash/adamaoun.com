"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

const Experience: React.FC<{}> = () =>
{
  return (
    <motion.section
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-6 md:py-8"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
      }}
    >
      {/* Heading */}
      <motion.h2
        className="text-white font-semibold text-center text-4xl md:text-6xl"
        variants={fadeInUp}
      >
        EXPERIENCE
      </motion.h2>
      <motion.p
        className="tracking-[0.2em] md:tracking-[0.5em] text-center text-transparent font-light pb-3 md:pb-5 bg-clip-text bg-gradient-to-r from-blue-500 to-orange-400 text-sm md:text-1xl"
        variants={fadeInUp}
      >
        EXPLORE NOW
      </motion.p>

      {/* Content */}
      <div className="container mx-auto max-w-screen-lg px-4 md:px-8">
        <motion.div
          className="flex flex-col md:flex-row md:justify-between pt-3 md:pt-5"
          variants={fadeInUp}
        >
          <div className="flex flex-col items-start gap-1">
            <div className="flex items-center gap-2 md:gap-3">
              <Image
                src={"/bestbuy.svg"}
                height={30}
                width={30}
                alt={"bestbuy"}
              />
              <p className="text-gray-300 font-semibold">Best Buy</p>
            </div>
            <p className="text-gray-300">Geek Squad Agent</p>
          </div>
          <p className="text-gray-300 md:pt-0 pt-2">September 2023 - Present</p>
        </motion.div>

        <motion.p className="text-gray-300 pt-3 md:pt-5" variants={fadeInUp}>
          • Developed strong technical knowledge and proficiency in a range of computer hardware and software, facilitating
          effective communication of complex technical information to customers with diverse levels of expertise.
        </motion.p>
        <motion.p className="text-gray-300 pt-3 md:pt-5" variants={fadeInUp}>
          • Enhanced problem-solving skills by collaborating with tech professionals to diagnose and troubleshoot common
          computer issues, providing tailored solutions to meet individual customer needs.
        </motion.p>
        <motion.p className="text-gray-300 pt-3 md:pt-5" variants={fadeInUp}>
          • Gained valuable experience through interacting with customers honing interpersonal and communication skills.
        </motion.p>

        {/* Skill Tags */}
        <motion.div className="mt-4 md:mt-5" variants={fadeInUp}>
          <div className="flex flex-wrap gap-2">
            <div className="bg-transparent rounded-3xl text-white text-sm py-2 px-3 border border-[#2E2E2E] w-max">
              Customer Service
            </div>
            <div className="bg-transparent rounded-3xl text-white text-sm py-2 px-3 border border-[#2E2E2E] w-max">
              Troubleshooting hardware and software issues
            </div>
            <div className="bg-transparent rounded-3xl text-white text-sm py-2 px-3 border border-[#2E2E2E] w-max">
              Data backup and recovery
            </div>
            <div className="bg-transparent rounded-3xl text-white text-sm py-2 px-3 border border-[#2E2E2E] w-max">
              Installing and configuring software
            </div>
            <div className="bg-transparent rounded-3xl text-white text-sm py-2 px-3 border border-[#2E2E2E] w-max">
              Time management and multitasking
            </div>
            <div className="bg-transparent rounded-3xl text-white text-sm py-2 px-3 border border-[#2E2E2E] w-max">
              Team collaboration and coordination
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Experience;
