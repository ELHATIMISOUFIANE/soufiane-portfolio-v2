import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { fadeIn } from "../../variants";
import { motion } from "framer-motion";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_58d5q6p", "template_0e3wodx", form.current, {
        publicKey: "HnsFyZCXu9-nkZFWG",
      })
      .then(
        () => {
          alert("SUCCESS!");
        },
        (error) => {
          alert("FAILED...", error.text);
        }
      );
  };
  return (
    // <div
    //   id="contact"
    //   className="flex flex-col items-center gap-y-5 text-white p-10">
    //   <h1 className="text-4xl font-bold">Contact Me</h1>
    //   <div className="flex items-start gap-x-4">
    //     <form
    //       className="flex flex-col gap-2 p-6 bg-transparent border-2 border-white rounded-xl"
    //       ref={form}
    //       onSubmit={sendEmail}>
    //       <input
    //         className="bg-transparent border-2 border-white rounded-lg p-5 focus:outline-none"
    //         required
    //         type="text"
    //         name="name"
    //         placeholder="Name..."
    //       />
    //       <div className="flex gap-3 items-center">
    //         <input
    //           className="bg-transparent border-2 border-white rounded-lg p-5 focus:outline-none"
    //           required
    //           type="email"
    //           name="user_email"
    //           placeholder="Email..."
    //         />
    //         <input
    //           className="bg-transparent border-2 border-white rounded-lg p-5 focus:outline-none"
    //           required
    //           type="text"
    //           name="user_phone"
    //           placeholder="Phone..."
    //         />
    //       </div>
    //       <textarea
    //         className="bg-transparent border-2 border-white rounded-lg p-5 focus:outline-none"
    //         required
    //         name="message"
    //         placeholder="Message"
    //         rows={6}
    //       />
    //       <button
    //         type="submit"
    //         value="Send"
    //         class="mb-6 inline-block w-full border-2 border-white rounded-lg bg-transparent px-6 py-2.5 font-medium uppercase leading-normal text-white hover:shadow-md hover:bg-[#8E05C2]">
    //         Send
    //       </button>
    //     </form>
    //     <div className="flex flex-col gap-y-5">
    //       <a
    //         target="_blank"
    //         href="https://www.linkedin.com/in/walid-cadi-532b38236/"
    //         className="overflow-hidden flex items-center justify-center bg-transparent border-2 border-white rounded-full w-[100px] h-[100px] ">
    //         <FaLinkedinIn className="text-6xl text-white hover:scale-110 duration-300" />
    //       </a>
    //       <a
    //         target="_blank"
    //         href="https://www.instagram.com/ca_waliiid/"
    //         className="overflow-hidden flex items-center justify-center bg-transparent border-2 border-white rounded-full w-[100px] h-[100px] ">
    //         <FaInstagram className="text-6xl text-white hover:scale-110 duration-300" />
    //       </a>
    //       <a
    //         target="_blank"
    //         href=""
    //         className="overflow-hidden flex items-center justify-center bg-transparent border-2 border-white rounded-full w-[100px] h-[100px] ">
    //         <SiGmail className="text-6xl text-white hover:scale-110 duration-300" />
    //       </a>
    //     </div>
    //   </div>
    // </div>
    <div
      id="contact"
      className="mt-[15vh] flex flex-col items-center gap-y-5 text-white p-5 lg:p-10">
      <motion.h1
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="text-3xl lg:text-4xl font-bold">
        Contact Me
      </motion.h1>

      {/* Contact form and social links container */}
      <div className="flex flex-col lg:flex-row items-start gap-5 lg:gap-x-10 w-full lg:w-auto">
        {/* Contact Form */}
        <motion.form
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex flex-col gap-2 p-6 bg-transparent border-2 border-white rounded-xl w-full lg:w-auto"
          ref={form}
          onSubmit={sendEmail}>
          <input
            className="bg-transparent border-2 border-white rounded-lg p-4 lg:p-5 focus:outline-none w-full"
            required
            type="text"
            name="name"
            placeholder="Name..."
          />
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-center">
            <input
              className="bg-transparent border-2 border-white rounded-lg p-4 lg:p-5 focus:outline-none w-full"
              required
              type="email"
              name="user_email"
              placeholder="Email..."
            />
            <input
              className="bg-transparent border-2 border-white rounded-lg p-4 lg:p-5 focus:outline-none w-full"
              required
              type="text"
              name="user_phone"
              placeholder="Phone..."
            />
          </div>
          <textarea
            className="bg-transparent border-2 border-white rounded-lg p-4 lg:p-5 focus:outline-none w-full"
            required
            name="message"
            placeholder="Message"
            rows={6}
          />
          <button
            type="submit"
            value="Send"
            className="mt-4 inline-block w-full border-2 border-white rounded-lg bg-transparent px-6 py-2.5 font-medium uppercase leading-normal text-white hover:shadow-md hover:bg-[#631f7e]">
            Send
          </button>
        </motion.form>

        {/* Social Media Icons */}
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex items-center gap-x-7 lg:flex-col gap-y-10">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/soufiane-el-hatimi-550927297/"
            className="overflow-hidden flex items-center justify-center bg-transparent border-2 border-white rounded-full w-[80px] h-[80px] lg:w-[100px] lg:h-[100px]">
            <FaLinkedinIn className="text-4xl lg:text-6xl text-white hover:scale-110 duration-300" />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/soufiane_elhatimi/"
            className="overflow-hidden flex items-center justify-center bg-transparent border-2 border-white rounded-full w-[80px] h-[80px] lg:w-[100px] lg:h-[100px]">
            <FaInstagram className="text-4xl lg:text-6xl text-white hover:scale-110 duration-300" />
          </a>
          <a
            target="_blank"
            href=""
            className="overflow-hidden flex items-center justify-center bg-transparent border-2 border-white rounded-full w-[80px] h-[80px] lg:w-[100px] lg:h-[100px]">
            <SiGmail className="text-4xl lg:text-6xl text-white hover:scale-110 duration-300" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};
