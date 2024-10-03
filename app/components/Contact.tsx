"use client";

import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <div className="w-full">
      {/* Sign up section */}
      <div className=" p-6">
        <div className="fotertop max-w-4xl mx-auto flex flex-col bg-yellow-400 p-6 rounded-md ">
          <div className="flex flex-col md:flex-row justify-between mb-8 ">
            <h2 className="text-2xl font-bold md:w-6/12 ">
              Get running tips & tricks in your inbox every week.
            </h2>
            <div className="text-md md:text-end md:ml-4 mt-6 md:mt-0">
              <p>You can unsubscribe at any time.</p>
              <p>We respect your privacy.</p>
            </div>
          </div>
          <form className="flex flex-col md:flex-row items-center justify-between w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="p-3 rounded-md w-full md:w-9/12 mb-3 md:mb-0 md:mr-5"
            />
            <button
              type="submit"
              className="bg-orange-600 text-white md:w-3/12  py-3  w-full rounded-md font-bold hover:bg-orange-500 transition-colors duration-300"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>

      {/* Ready to Make a Difference section */}
      <div
        className="w-full h-[581px] px-4 bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/contactbg.png')" }}
      >
        <div className="max-w-4xl mx-auto pt-44">
          <h1 className="text-4xl md:text-5xl font-bold mb-7 md:mb-16">
            Ready to Make a Difference?
          </h1>
          <div className="flex flex-col md:flex-row justify-between">
          <p className="text-2xl mb-6 md:w-6/12">
            Download the app and start your first challenge today.
          </p>
          {/* <div className=" flex flex-col">
            <p className="font-semibold mb-3">Available on</p>
            <div className="flex justify-start gap-4 mb-4 ">
              <button className="flex justify-center items-center space-x-2 bg-gray-500 px-4 py-1 rounded-2xl">
                <FaApple className="" />
                <span>Apple</span>
              </button>
              <button className="flex justify-center items-center space-x-2 bg-gray-500 px-4 py-1 rounded-2xl">
                <FaGooglePlay />
                <span>Google Play</span>
              </button>
            </div>
          </div> */}
          <div className=" flex flex-col">
            <p className="font-bold mb-2 ml-2">Available on</p>
            <div className="flex justify-start gap-4 mb-8 ">
              <button className="flex justify-center items-center space-x-2 bg-white text-primary  font-bold px-6 py-1.5 rounded-3xl">
                <FaGooglePlay />
                <span>Google Play</span>
              </button>
              <button className="flex justify-center items-center space-x-2 text-white border-white border-2  font-bold px-6 py-1.5 rounded-3xl">
                <FaApple />
                <span>App Store</span>
              </button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
