import React from "react";
import images from "../../constant/images";
import { IoLogoJavascript } from "react-icons/io";
import { FaGitAlt, FaLaravel, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { SiSpring } from "react-icons/si";

export const About = () => {
  return (
    <div
      id="about"
      className="mt-[15vh] flex flex-col gap-y-[5vh] text-white p-10">
      <div className="flex flex-col lg:flex-row items-center px-[5vw] lg:px-[8vw] justify-between gap-10">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex flex-col gap-y-4 w-full lg:w-[40vw]">
          <h1 className="text-4xl lg:text-6xl">About Me</h1>
          <p className="text-lg lg:text-2xl">
            Hi I’m Walid Cadi, a full-stack web developer with a strong focus on
            building web applications. I have expertise in both front-end and
            back-end technologies, allowing me to develop seamless user
            experiences from design to deployment.
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="w-full lg:w-auto">
          <img className="w-full lg:w-auto" src={images.dall} alt="" />
        </motion.div>
      </div>

      <div className="flex mt-[15vh] flex-col items-center gap-y-7">
        <motion.h1
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-3xl lg:text-4xl font-bold">
          Skills
        </motion.h1>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex flex-wrap justify-center items-center gap-5 lg:gap-x-10">
          <div className="bg-transparent border-2 border-white p-5 lg:p-7 w-[45vw] sm:w-[25vw] lg:w-[15vw] rounded-xl flex flex-col items-center gap-y-2 ">
            <div className="flex flex-col items-center hover:scale-110 duration-300">
              <IoLogoJavascript className="text-white text-6xl lg:text-7xl" />
              <h1 className="text-white text-lg lg:text-xl cursor-default font-semibold">
                JavaScript
              </h1>
            </div>
          </div>

          <div className="bg-transparent border-2 border-white p-5 lg:p-7 w-[45vw] sm:w-[25vw] lg:w-[15vw] rounded-xl flex flex-col items-center gap-y-2 ">
            <div className="flex flex-col items-center hover:scale-110 duration-300">
              <FaReact className="text-white text-6xl lg:text-7xl" />
              <h1 className="text-white text-lg lg:text-xl cursor-default font-semibold">
                React
              </h1>
            </div>
          </div>

          <div className="bg-transparent border-2 border-white p-5 lg:p-7 w-[45vw] sm:w-[25vw] lg:w-[15vw] rounded-xl flex flex-col items-center gap-y-2 ">
            <div className="flex flex-col items-center hover:scale-110 duration-300">
              <FaLaravel className="text-white text-6xl lg:text-7xl" />
              <h1 className="text-white text-lg lg:text-xl cursor-default font-semibold">
                Laravel
              </h1>
            </div>
          </div>
          <div className="bg-transparent border-2 border-white p-5 lg:p-7 w-[45vw] sm:w-[25vw] lg:w-[15vw] rounded-xl flex flex-col items-center gap-y-2 ">
            <div className="flex flex-col items-center hover:scale-110 duration-300">
              <SiSpring className="text-white text-6xl lg:text-7xl" />
              <h1 className="text-white text-lg lg:text-xl cursor-default font-semibold">
                Spring
              </h1>
            </div>
          </div>


          <div className="bg-transparent border-2 border-white p-5 lg:p-7 w-[45vw] sm:w-[25vw] lg:w-[15vw] rounded-xl flex flex-col items-center gap-y-2 ">
            <div className="flex flex-col items-center hover:scale-110 duration-300">
              <RiTailwindCssFill className="text-white text-6xl lg:text-7xl" />
              <h1 className="text-white text-lg lg:text-xl cursor-default font-semibold">
                Tailwind CSS
              </h1>
            </div>
          </div>

          <div className="bg-transparent border-2 border-white p-5 lg:p-7 w-[45vw] sm:w-[25vw] lg:w-[15vw] rounded-xl flex flex-col items-center gap-y-2 ">
            <div className="flex flex-col items-center hover:scale-110 duration-300">
              <FaGitAlt className="text-white text-6xl lg:text-7xl" />
              <h1 className="text-white text-lg lg:text-xl cursor-default font-semibold">
                Git
              </h1>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
