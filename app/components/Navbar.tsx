"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '../../public/logo.png';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('about');

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, sectionId: string) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
      });
      // Set timeout for the 4-second scroll duration
      setTimeout(() => {
        setActiveSection(sectionId);
      }, 4000); // 4 seconds (4000ms)
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3, // Trigger when 30% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('id');
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
          <Image src={logo} alt="Logo" width={52} height={52}  />
          <p >For Fund</p>
        </a>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {/* This div will show on larger screens */}
          <div className="hidden md:flex bg-primary text-white px-5 py-2 rounded-3xl items-center space-x-2">
            <Link href="/resume.pdf" download className="flex items-center space-x-2">
              <span>Download now</span>
            </Link>
          </div>

          {/* Menu button */}
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
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

        {/* Navbar items */}
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1  ${isMenuOpen ? 'block' : 'hidden'}`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-blue md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#about"
                onClick={(e) => handleSmoothScroll(e, 'about')}
                className={`block py-2 px-3 rounded ${activeSection === 'Home' ? 'font-bold' : 'text-black'} md:bg-transparent md:p-0 dark:text-white`}
              >
                Home 
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => handleSmoothScroll(e, 'about')}
                className={`block py-2 px-3 rounded ${activeSection === 'About' ? 'font-bold' : 'text-black'} md:bg-transparent md:p-0 dark:text-white`}
              >
                About 
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => handleSmoothScroll(e, 'about')}
                className={`block py-2 px-3 rounded ${activeSection === 'How it work' ? 'font-bold' : 'text-black'} md:bg-transparent md:p-0 dark:text-white`}
              >
                How it work 
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => handleSmoothScroll(e, 'about')}
                className={`block py-2 px-3 rounded ${activeSection === 'Challenges' ? 'font-bold' : 'text-black'} md:bg-transparent md:p-0 dark:text-white`}
              >
                Challenges 
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={(e) => handleSmoothScroll(e, 'skills')}
                className={`block py-2 px-3 rounded ${activeSection === 'Fundraising' ? 'font-bold' : 'text-black'} md:bg-transparent md:p-0 dark:text-white`}
              >
                Fundraising
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={(e) => handleSmoothScroll(e, 'projects')}
                className={`block py-2 px-3 rounded ${activeSection === 'FAQ' ? 'font-bold' : 'text-black'} md:bg-transparent md:p-0 dark:text-white`}
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, 'contact')}
                className={`block py-2 px-3 rounded ${activeSection === 'contact' ? 'font-bold' : 'text-black'} md:bg-transparent md:p-0 dark:text-white`}
              >
                Contact 
              </a>
            </li>
            {/* This resume link will show in the menu when the screen is less than 768px */}
            <li className="md:hidden ">
              <Link
                href="/resume.pdf"
                download
                className="block  bg-primary text-white px-4 py-4 rounded-lg items-center space-x-2 w-40"
              >
                <span>Download now</span>
                {/* <FaFileDownload className="inline ml-2" /> */}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;