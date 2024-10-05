
























"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("about");

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSmoothScroll = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    sectionId: string
  ) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
      // Set timeout for the 4-second scroll duration
      setTimeout(() => {
        setActiveSection(sectionId);
      }, 4000); // 4 seconds (4000ms)
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3, // Trigger when 30% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute("id");
          if (sectionId) setActiveSection(sectionId);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center justify-center space-x-2">
          <Image src={logo} alt="Logo" width={52} height={52} />
          <p>For Fund</p>
        </a>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {/* This div will show on larger screens */}
          <div className="flex bg-primary text-white px-5 py-2 rounded-3xl items-center space-x-2">
            <Link
              href="/resume.pdf"
              download
              className="flex items-center space-x-2"
            >
              <span>Download now</span>
            </Link>
          </div>

          {/* Menu button */}
          <div className="lg:hidden">
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            // className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            // aria-controls="navbar-sticky"
            // aria-expanded={isMenuOpen}
            onClick={handleMenuToggle}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          </div>
          </div>

        {/* Navbar items */}
        <div
          // className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
          className={`items-center justify-between w-full lg:flex lg:w-auto md:order-2 ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
          {/* <ul className="flex flex-col md:py-2 mt-4 font-medium border border-gray-100 rounded-3xl md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-gray-300 md:px-6 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"> */}
              {/* <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-blue md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"> */}
              <ul className={`flex flex-col p-4 lg:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-blue lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700`}>
            <li>
              <a
                href="#home"
                onClick={(e) => handleSmoothScroll(e, "home")}
                className={`block py-2 px-3 rounded ${
                  activeSection === "Home" ? "font-bold" : "text-black"
                } lg:bg-transparent lg:p-0 dark:text-white`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => handleSmoothScroll(e, "about")}
                className={`block py-2 px-3 rounded ${
                  activeSection === "About" ? "font-bold" : "text-black"
                } lg:bg-transparent lg:p-0 dark:text-white`}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#how-it-works"
                onClick={(e) => handleSmoothScroll(e, "how-it-works")}
                className={`block py-2 px-3 rounded ${
                  activeSection === "How it works" ? "font-bold" : "text-black"
                } lg:bg-transparent lg:p-0 dark:text-white`}
              >
                How it works
              </a>
            </li>
            <li>
              <a
                href="#challenges"
                onClick={(e) => handleSmoothScroll(e, "challenges")}
                className={`block py-2 px-3 rounded ${
                  activeSection === "Challenges" ? "font-bold" : "text-black"
                } lg:bg-transparent lg:p-0 dark:text-white`}
              >
                Challenges
              </a>
            </li>
            <li>
              <a
                href="#fundraising"
                onClick={(e) => handleSmoothScroll(e, "fundraising")}
                className={`block py-2 px-3 rounded ${
                  activeSection === "Fundraising" ? "font-bold" : "text-black"
                } lg:bg-transparent lg:p-0 dark:text-white`}
              >
                Fundraising
              </a>
            </li>
            <li>
              <a
                href="#faq"
                onClick={(e) => handleSmoothScroll(e, "faq")}
                className={`block py-2 px-3 rounded ${
                  activeSection === "FAQ" ? "font-bold" : "text-black"
                } lg:bg-transparent lg:p-0 dark:text-white`}
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "contact")}
                className={`block py-2 px-3 rounded ${
                  activeSection === "Contact" ? "font-bold" : "text-black"
                } lg:bg-transparent lg:p-0 dark:text-white`}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

{
  /* This resume link will show in the menu when the screen is less than 768px */
}
{
  /* <li className="md:hidden ">
              <Link
                href="/resume.pdf"
                download
                className="block  bg-primary text-white px-4 py-4 rounded-lg items-center space-x-2 w-40"
              >
                <span>Download now</span>
              </Link>
            </li> */
}





























"use client";
import React, { useEffect, useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setIsMenuOpen(true);
    }
    if (window.innerWidth < 1024) {
      setIsMenuOpen(false);
    }
  }, [])

  const handleSmoothScroll = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    sectionId: string
  ) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-b-gray-300">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-2">
          <Image src={logo} alt="Logo" width={52} height={52} />
          <p>For Fund</p>
        </a>

        <div className="flex items-center space-x-4">
          <div className="bg-primary text-white px-5 py-2 rounded-3xl">
            <Link href="/resume.pdf" download className="flex items-center">
              <span>Download now</span>
            </Link>
          </div>
          <div className="lg:hidden">
            <button
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              onClick={handleMenuToggle}
            >
              <span className="sr-only">Open main menu</span>
              <CgMenuGridO className="text-2xl font-bold text-black dark:text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} -mt-16 py-3  max-sm:mt-0 max-lg:mt-0    max-sm:py-0 max-lg:py-0   lg:flex items-center justify-center w-full `}>
        <ul className="flex flex-col px-4  py-2 rounded-full font-medium border border-gray-100 max-sm:rounded-lg max-lg:rounded-lg lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0  dark:bg-gray-800 lg:dark:bg-gray-200 dark:border-gray-200  md:px-4 md:py-2 md:rounded-3xl lg:bg-gray-100">
          <li>
            <a
              href="#home"
              onClick={(e) => handleSmoothScroll(e, "home")}
              className="block py-2 px-3 rounded text-black lg:bg-transparent lg:p-0 dark:text-white"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={(e) => handleSmoothScroll(e, "about")}
              className="block py-2 px-3 rounded text-black lg:bg-transparent lg:p-0 dark:text-white"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#how-it-works"
              onClick={(e) => handleSmoothScroll(e, "how-it-works")}
              className="block py-2 px-3 rounded text-black lg:bg-transparent lg:p-0 dark:text-white"
            >
              How it works
            </a>
          </li>
          <li>
            <a
              href="#challenges"
              onClick={(e) => handleSmoothScroll(e, "challenges")}
              className="block py-2 px-3 rounded text-black lg:bg-transparent lg:p-0 dark:text-white"
            >
              Challenges
            </a>
          </li>
          <li>
            <a
              href="#fundraising"
              onClick={(e) => handleSmoothScroll(e, "fundraising")}
              className="block py-2 px-3 rounded text-black lg:bg-transparent lg:p-0 dark:text-white"
            >
              Fundraising
            </a>
          </li>
          <li>
            <a
              href="#faq"
              onClick={(e) => handleSmoothScroll(e, "faq")}
              className="block py-2 px-3 rounded text-black lg:bg-transparent lg:p-0 dark:text-white"
            >
              FAQ
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "contact")}
              className="block py-2 px-3 rounded text-black lg:bg-transparent lg:p-0 dark:text-white"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
