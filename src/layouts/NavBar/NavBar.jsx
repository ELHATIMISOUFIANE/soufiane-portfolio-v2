import React, { useState } from "react";
import images from "../../constant/images";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";

export const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };
  return (
    <>
      {/* <div className="bg-gradient-to-r from-[#000000] via-[#11021b]  to-[#700B97] z-50 flex items-center justify-between p-8 fixed top-0 w-full">
        <a href="#home">
          <img className="w-28" src={images.logo} alt="" />
        </a>

        <div className="hidden md:flex items-center gap-x-10 text-white text-xl font-semibold">
          <a href="#about" className="hover:text-[#8E05C2]">
            About
          </a>
          <a href="#projects" className="hover:text-[#8E05C2]">
            Projects
          </a>
          <a href="#contact" className="hover:text-[#8E05C2]">
            Contact
          </a>
        </div>

        <div className="hidden md:flex items-center gap-x-3">
          <a
            href="https://www.linkedin.com/in/walid-cadi-532b38236/"
            target="_blank">
            <FaLinkedin className="text-white text-4xl hover:text-[#100416]" />
          </a>
          <a href="https://github.com/walid-cadi" target="_blank">
            <FaGithub className="text-white text-4xl hover:text-[#100416]" />
          </a>
        </div>

        <div className="flex md:hidden items-center">
          <button id="mobile-menu-button">
            <IoIosMenu className="w-8 h-8 text-white" />
          </button>
        </div>

        <div
          id="mobile-menu"
          className="hidden md:hidden absolute top-16 left-0 w-full bg-transparent">
          <div className="flex flex-col items-center gap-y-5 text-white text-xl font-semibold">
            <Link to="" className="hover:text-[#8E05C2]">
              About
            </Link>
            <Link to="" className="hover:text-[#8E05C2]">
              Projects
            </Link>
            <Link to="" className="hover:text-[#8E05C2]">
              Contact
            </Link>
            <div className="flex items-center gap-x-3 mt-4">
              <Link to="path">
                <FaLinkedin className="text-white text-4xl hover:text-[#8E05C2]" />
              </Link>
              <Link to="path">
                <FaGithub className="text-white text-4xl hover:text-[#8E05C2]" />
              </Link>
            </div>
          </div>
        </div>
      </div> */}
      <div className="bg-gradient-to-r from-[#000000] via-[#11021b] to-[#700B97] z-50 flex items-center justify-between p-8 fixed top-0 w-full">
        <a href="#home">
          {/* <img className="w-20" src={images.logo} alt="Logo" /> */}
        </a>

        <div className="hidden md:flex items-center gap-x-10 text-white text-xl font-semibold">
          <a href="#about" className="hover:text-[#8E05C2]">
            About
          </a>
          <a href="#projects" className="hover:text-[#8E05C2]">
            Projects
          </a>
          <a href="#contact" className="hover:text-[#8E05C2]">
            Contact
          </a>
        </div>

        <div className="hidden md:flex items-center gap-x-3">
          <a
            href="https://www.linkedin.com/in/soufiane-el-hatimi-550927297/"
            target="_blank"
            rel="noopener noreferrer">
            <FaLinkedin className="text-white text-4xl hover:text-[#100416]" />
          </a>
          <a
            href="https://github.com/ELHATIMISOUFIANE"
            target="_blank"
            rel="noopener noreferrer">
            <FaGithub className="text-white text-4xl hover:text-[#100416]" />
          </a>
        </div>

        <div className="flex md:hidden items-center">
          <button onClick={toggleMobileMenu} id="mobile-menu-button">
            <IoIosMenu className="w-8 h-8 text-white" />
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`absolute top-16 left-0 w-full transition-all duration-300 ${
            isMobileMenuOpen
              ? "bg-gradient-to-r from-[#000000] via-[#11021b] to-[#700B97] block"
              : "hidden"
          }`}>
          <div className="flex flex-col items-center gap-y-5 text-white text-xl font-semibold p-4">
            <Link
              to="#about"
              className="hover:text-[#8E05C2]"
              onClick={toggleMobileMenu}>
              About
            </Link>
            <Link
              to="#projects"
              className="hover:text-[#8E05C2]"
              onClick={toggleMobileMenu}>
              Projects
            </Link>
            <Link
              to="#contact"
              className="hover:text-[#8E05C2]"
              onClick={toggleMobileMenu}>
              Contact
            </Link>
            <div className="flex items-center gap-x-3 mt-4">
              <Link
                href="https://www.linkedin.com/in/soufiane-el-hatimi-550927297/"
                target="_blank">
                <FaLinkedin className="text-white text-4xl hover:text-[#8E05C2]" />
              </Link>
              <Link href="https://github.com/ELHATIMISOUFIANE" target="_blank">
                <FaGithub className="text-white text-4xl hover:text-[#8E05C2]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
