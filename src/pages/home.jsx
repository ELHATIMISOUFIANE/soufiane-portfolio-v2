import React from "react";
import { NavBar } from "../layouts/NavBar/NavBar";
import { About } from "./About/About";
import { Contact } from "./Contact/Contact";
import { Projects } from "./Projects/Projects";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

export const Home = () => {
  return (
    // bg-gradient-to-r from-[#000000] via-[#3E065F]  to-[#700B97]
    //bg-[#100416]
    <div className="min-h-screen bg-gradient-to-r from-[#000000] via-[#11021b]  to-[#700B97] flex flex-col gap-[7vh] ">
      <NavBar />
      <div
        id="home"
        className="px-5 sm:px-[10vw] lg:px-[15vw] py-[10vh] lg:py-[15vh] mt-[10vh] lg:mt-[25vh] w-full ">
        <motion.h1
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#72249f] font-semibold">
          Full Stack
        </motion.h1>
        <motion.h1
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-semibold mt-4 lg:ms-[20vw]">
          Developer
        </motion.h1>
      </div>
      <About />
      <Projects />
      <Contact />
    </div>
  );
};
