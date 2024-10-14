"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

const fadeInDown = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Navbar: React.FC<{}> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string, offset: number) => {
    const element = document.querySelector(id);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.pageYOffset - offset,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsOpen(false);
  };

  return (
    <motion.div
      className="w-full h-[65px] fixed backdrop-blur-sm z-50 px-4 md:px-10"
      initial="hidden"
      animate="visible"
      variants={fadeInDown}
    >
      <div className="w-full h-full flex items-center justify-between m-auto px-[10px]">
        {/* Logo */}
        <div
          onClick={scrollToTop}
          className="h-auto w-auto flex items-center cursor-pointer"
        >
          <Image
            src="/logo.svg"
            alt="Adam Aoun Logo"
            width={50}
            height={50}
            className="w-[70px] h-auto md:w-[100px] md:h-auto transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
          />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="block md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none transition-transform duration-300 ease-in-out hover:scale-110"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-row gap-5">
          <motion.div
            onClick={() => scrollToSection("#about", 120)}
            className="z-[1] bg-transparent cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl text-white py-2 px-5 text-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            About
          </motion.div>

          <motion.div
            onClick={() => scrollToSection("#projects", 100)}
            className="z-[1] bg-transparent cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl text-white py-2 px-5 text-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Projects
          </motion.div>

          <motion.div
            onClick={() => scrollToSection("#experience", 100)}
            className="z-[1] bg-transparent cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl text-white py-2 px-5 text-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Experience
          </motion.div>

          <motion.div
            onClick={() => scrollToSection("#education", 100)}
            className="z-[1] bg-transparent cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl text-white py-2 px-5 text-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Education
          </motion.div>

          <motion.div
            onClick={() => window.open("mailto:michaelkhuri@gmail.com")}
            className="z-[1] bg-transparent cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl text-white py-2 px-5 text-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-[65px] left-0 w-full bg-black flex flex-col items-center gap-5 py-5 md:hidden">
            <motion.div
              onClick={() => scrollToSection("#about", 120)}
              className="z-[1] bg-transparent cursor-pointer text-white py-2 px-5 text-base"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              About
            </motion.div>

            <motion.div
              onClick={() => scrollToSection("#projects", 100)}
              className="z-[1] bg-transparent cursor-pointer text-white py-2 px-5 text-base"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Projects
            </motion.div>

            <motion.div
              onClick={() => scrollToSection("#experience", 100)}
              className="z-[1] bg-transparent cursor-pointer text-white py-2 px-5 text-base"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Experience
            </motion.div>

            <motion.div
              onClick={() => scrollToSection("#education", 100)}
              className="z-[1] bg-transparent cursor-pointer text-white py-2 px-5 text-base"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Education
            </motion.div>

            <motion.div
              onClick={() => window.open("mailto:michaelkhuri@gmail.com")}
              className="z-[1] bg-transparent cursor-pointer text-white py-2 px-5 text-base"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Navbar;
