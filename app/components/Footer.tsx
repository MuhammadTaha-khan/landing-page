import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white shadow-inner w-full p-6">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row lg:justify-between items-center gap-5">
        {/* Logo */}
        <a href="#" className="flex items-center justify-center space-x-2">
          <Image src={logo} alt="Logo" width={52} height={52} />
          <p className="text-black font-bold">For Fund</p>
        </a>
        
        {/* Navigation Links */}
        <ul className="flex flex-col md:flex-row md:space-x-8 font-semibold text-black text-center mt-4 gap-5 md:gap-0 md:mt-0 md:bg-gray-100 md:px-4 md:py-2 md:rounded-3xl">
          <li><Link href="#home">Home</Link></li>
          <li><Link href="#about">About</Link></li>
          <li><Link href="#how-it-works">How it works</Link></li>
          <li><Link href="#challenges">Challenges</Link></li>
          <li><Link href="#fundraising">Fundraising</Link></li>
          <li><Link href="#faq">FAQ</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>

        {/* Social Icons */}
        <div className="flex justify-center space-x-4 mt-8 md:mt-0 ">
          <FaXTwitter className="text-2xl text-black hover:text-orange-500" />
          <AiOutlineInstagram className="text-2xl text-black hover:text-orange-500" />
          <FaYoutube className="text-2xl text-black hover:text-orange-500" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
