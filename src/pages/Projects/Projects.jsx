import React from "react";
import images from "../../constant/images";
import { fadeIn } from "../../variants";
import { motion } from "framer-motion";

export const Projects = () => {
  return (
    // <div
    //   id="projects"
    //   className="p-10 mt-[15vh] flex flex-col items-center gap-y-10 text-white">
    //   <motion.h1
    //     variants={fadeIn("down", 0.2)}
    //     initial="hidden"
    //     whileInView={"show"}
    //     viewport={{ once: false, amount: 0.7 }}
    //     className="text-3xl lg:text-4xl font-bold">
    //     Projects
    //   </motion.h1>
    //   <div className="flex flex-wrap justify-center gap-8">
    //     <motion.div
    //       variants={fadeIn("right", 0.2)}
    //       initial="hidden"
    //       whileInView={"show"}
    //       viewport={{ once: false, amount: 0.7 }}
    //       className="group w-[35vw] h-[45vh] border-2 border-white rounded-2xl overflow-hidden relative">
    //       <img className="w-[100%] h-[100%]" src={images.delicious} alt="" />
    //       <div className="flex flex-col gap-y-5 p-10 absolute bg-[#10041677] w-[100%] h-[100%] top-[-100%] group-hover:top-0 transition-all duration-300 ">
    //         <h1 className="text-4xl font-bold">Delicious</h1>
    //         <p className="text-xl font-semibold">
    //           A Delicious Restaurant food website is a platform showcasing
    //           menus, special offers, and information about a restaurant,
    //           allowing users to browse dishes.
    //         </p>
    //         <button className="bg-transparent w-[100%] border-2 text-xl font-semibold border-white rounded-xl p-3 hover:text-black hover:bg-white  ">
    //           View Project
    //         </button>
    //       </div>
    //     </motion.div>
    //     <motion.div
    //       variants={fadeIn("left", 0.2)}
    //       initial="hidden"
    //       whileInView={"show"}
    //       viewport={{ once: false, amount: 0.7 }}
    //       className="group w-[35vw] h-[45vh] border-2 border-white rounded-2xl overflow-hidden relative">
    //       <img className="w-[100%] h-[100%]" src={images.yummy} alt="" />
    //       <div className="flex flex-col gap-y-5 p-10 absolute bg-[#10041677] w-[100%] h-[100%] top-[-100%] group-hover:top-0 transition-all duration-300 ">
    //         <h1 className="text-4xl font-bold">Yummy</h1>
    //         <p className="text-xl font-semibold">
    //           A Yummy food website highlights a restaurant's menu, promotions,
    //           and services, enabling users to explore dishes, make reservations,
    //           and enjoy a seamless dining experience.
    //         </p>
    //         <button className="bg-transparent w-[100%] border-2 text-xl font-semibold border-white rounded-xl p-3 hover:text-black hover:bg-white  ">
    //           View Project
    //         </button>
    //       </div>
    //     </motion.div>
    //     <motion.div
    //       variants={fadeIn("right", 0.2)}
    //       initial="hidden"
    //       whileInView={"show"}
    //       viewport={{ once: false, amount: 0.7 }}
    //       className="group w-[35vw] h-[45vh] border-2 border-white rounded-2xl overflow-hidden relative">
    //       <img className="w-[100%] h-[100%]" src={images.social_geek} alt="" />
    //       <div className="flex flex-col gap-y-5 p-10 absolute bg-[#10041677] w-[100%] h-[100%] top-[-100%] group-hover:top-0 transition-all duration-300 ">
    //         <h1 className="text-4xl font-bold">Social Geek</h1>
    //         <p className="text-xl font-semibold">
    //           Social Geek is a social media platform that connects users through
    //           posts, and multimedia sharing, fostering community engagement and
    //           online interaction.
    //         </p>
    //         <button className="bg-transparent w-[100%] border-2 text-xl font-semibold border-white rounded-xl p-3 hover:text-black hover:bg-white  ">
    //           View Project
    //         </button>
    //       </div>
    //     </motion.div>
    //     <motion.div
    //       variants={fadeIn("left", 0.2)}
    //       initial="hidden"
    //       whileInView={"show"}
    //       viewport={{ once: false, amount: 0.7 }}
    //       className="group w-[35vw] h-[45vh] border-2 border-white rounded-2xl overflow-hidden relative">
    //       <img className="w-[100%] h-[100%]" src={images.fashe} alt="" />
    //       <div className="flex flex-col gap-y-5 p-10 absolute bg-[#10041677] w-[100%] h-[100%] top-[-100%] group-hover:top-0 transition-all duration-300 ">
    //         <h1 className="text-4xl font-bold">Fashe</h1>
    //         <p className="text-xl font-semibold">
    //           Fashe is an online clothing store offering trendy and stylish
    //           apparel, allowing users to browse collections, shop for the latest
    //           fashion, and enjoy personalized shopping experiences.
    //         </p>
    //         <button className="bg-transparent w-[100%] border-2 text-xl font-semibold border-white rounded-xl p-3 hover:text-black hover:bg-white  ">
    //           View Project
    //         </button>
    //       </div>
    //     </motion.div>
    //   </div>
    // </div>
    <div
      id="projects"
      className="p-5 lg:p-10 mt-[15vh] flex flex-col items-center gap-y-10 text-white">
      <motion.h1
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="text-3xl lg:text-4xl font-bold">
        Projects
      </motion.h1>

      <div className="flex flex-wrap justify-center gap-5 lg:gap-8">
        {/* <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="group w-[90vw] sm:w-[70vw] md:w-[45vw] lg:w-[35vw] h-[40vh] sm:h-[45vh] border-2 border-white rounded-2xl overflow-hidden relative">
          <img
            className="w-[100%] h-[100%]"
            src={images.delicious}
            alt="Delicious Project"
          />
          <div className="flex flex-col gap-y-5 p-5 lg:p-10 absolute bg-[#10041677] w-[100%] h-[100%] top-[-100%] group-hover:top-0 transition-all duration-300">
            <h1 className="text-2xl lg:text-4xl font-bold">Delicious</h1>
            <p className="text-lg lg:text-xl font-semibold">
              A Delicious Restaurant food website showcasing menus, special
              offers, and information, allowing users to browse dishes.
            </p>
            <button className="bg-transparent w-[100%] border-2 text-lg lg:text-xl font-semibold border-white rounded-xl p-3 hover:text-black hover:bg-white">
              View Project
            </button>
          </div>
        </motion.div> */}

        {/* <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="group w-[90vw] sm:w-[70vw] md:w-[45vw] lg:w-[35vw] h-[40vh] sm:h-[45vh] border-2 border-white rounded-2xl overflow-hidden relative">
          <img
            className="w-[100%] h-[100%]"
            src={images.yummy}
            alt="Yummy Project"
          />
          <div className="flex flex-col gap-y-5 p-5 lg:p-10 absolute bg-[#10041677] w-[100%] h-[100%] top-[-100%] group-hover:top-0 transition-all duration-300">
            <h1 className="text-2xl lg:text-4xl font-bold">Yummy</h1>
            <p className="text-lg lg:text-xl font-semibold">
              A Yummy food website highlights a restaurant's menu, promotions,
              and services, enabling users to explore dishes.
            </p>
            <button className="bg-transparent w-[100%] border-2 text-lg lg:text-xl font-semibold border-white rounded-xl p-3 hover:text-black hover:bg-white">
              View Project
            </button>
          </div>
        </motion.div> */}

        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="group w-[90vw] sm:w-[70vw] md:w-[45vw] lg:w-[35vw] h-[40vh] sm:h-[45vh] border-2 border-white rounded-2xl overflow-hidden relative">
          <img
            className="w-[100%] h-[100%]"
            src={images.social_geek}
            alt="Social Geek Project"
          />
          <div className="flex flex-col gap-y-5 p-5 lg:p-10 absolute bg-[#10041677] w-[100%] h-[100%] top-[-100%] group-hover:top-0 transition-all duration-300">
            <h1 className="text-2xl lg:text-4xl font-bold">Social Geek</h1>
            <p className="text-lg lg:text-xl font-semibold">
              Social Geek is a social media platform that connects users through
              posts, fostering community engagement.
            </p>
            <a
              href="https://social-geek-kappa.vercel.app"
              target="_blank"
              className="bg-transparent w-[100%] border-2 text-lg lg:text-xl text-center font-semibold border-white rounded-xl p-3 hover:text-black hover:bg-white">
              View Project
            </a>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="group w-[90vw] sm:w-[70vw] md:w-[45vw] lg:w-[35vw] h-[40vh] sm:h-[45vh] border-2 border-white rounded-2xl overflow-hidden relative">
          <img
            className="w-[100%] h-[100%]"
            src={images.fashe}
            alt="Fashe Project"
          />
          <div className="flex flex-col gap-y-5 p-5 lg:p-10 absolute bg-[#10041677] w-[100%] h-[100%] top-[-100%] group-hover:top-0 transition-all duration-300">
            <h1 className="text-2xl lg:text-4xl font-bold">Fashe</h1>
            <p className="text-lg lg:text-xl font-semibold">
              Fashe is an online clothing store offering trendy and stylish
              apparel, allowing users to browse collections and shop.
            </p>
            <a
              href="https://fashe-peach.vercel.app/"
              target="_blank"
              className="bg-transparent w-[100%] border-2 text-lg lg:text-xl text-center font-semibold border-white rounded-xl p-3 hover:text-black hover:bg-white">
              View Project
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
