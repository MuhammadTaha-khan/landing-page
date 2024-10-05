"use client";
import React, { useEffect, useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Smooth Scroll Function
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

  // ScrollSpy Implementation using IntersectionObserver
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3, 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute("id");
          if (sectionId) {
            setActiveSection(sectionId);
          }
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    // Cleanup the observer when the component is unmounted
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-b-gray-300" >
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
        <ul className="flex flex-col px-4 py-2 rounded-full font-medium border border-gray-100 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 dark:bg-gray-800 lg:dark:bg-gray-200 dark:border-gray-200 md:px-4 md:py-2 md:rounded-3xl lg:bg-gray-100">
          <li>
            <a
              href="#home"
              onClick={(e) => handleSmoothScroll(e, "home")}
              className={`block py-2 px-3 rounded ${activeSection === 'home' ? 'text-primary font-bold' : 'text-black'} lg:bg-transparent lg:p-0 dark:text-white`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={(e) => handleSmoothScroll(e, "about")}
              className={`block py-2 px-3 rounded ${activeSection === 'about' ? 'text-primary font-bold' : 'text-black'} lg:bg-transparent lg:p-0 dark:text-white`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#works"
              onClick={(e) => handleSmoothScroll(e, "works")}
              className={`block py-2 px-3 rounded ${activeSection === 'works' ? 'text-primary font-bold' : 'text-black'} lg:bg-transparent lg:p-0 dark:text-white`}
            >
              How it works
            </a>
          </li>
          <li>
            <a
              href="#challenges"
              onClick={(e) => handleSmoothScroll(e, "challenges")}
              className={`block py-2 px-3 rounded ${activeSection === 'challenges' ? 'text-primary font-bold' : 'text-black'} lg:bg-transparent lg:p-0 dark:text-white`}
            >
              Challenges
            </a>
          </li>
          <li>
            <a
              href="#fundraising"
              onClick={(e) => handleSmoothScroll(e, "fundraising")}
              className={`block py-2 px-3 rounded ${activeSection === 'fundraising' ? 'text-primary font-bold' : 'text-black'} lg:bg-transparent lg:p-0 dark:text-white`}
            >
              Fundraising
            </a>
          </li>
          <li>
            <a
              href="#faq"
              onClick={(e) => handleSmoothScroll(e, "faq")}
              className={`block py-2 px-3 rounded ${activeSection === 'faq' ? 'text-primary font-bold' : 'text-black'} lg:bg-transparent lg:p-0 dark:text-white`}
            >
              FAQ
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "contact")}
              className={`block py-2 px-3 rounded ${activeSection === 'contact' ? 'text-primary font-bold' : 'text-black'} lg:bg-transparent lg:p-0 dark:text-white`}
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
