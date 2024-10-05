import Image from "next/image";
import animated1 from "../../public/animated1.png";
import animated2 from "../../public/animated2.png";
import animated3 from "../../public/animated3.png";
import heroimg from "../../public/heroimg.png";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

const Herosec: React.FC = () => {
  return (
    <div className="container mx-auto mt-5" id="home">
      <section className=" bg-white py-16 px-4 flex flex-col md:flex-row items-center justify-round">
        {/* Left Side  */}
        {/* <div className="text-center md:text-left md:w-1/2"> */}
        <div className="text-start md:w-1/2">
          <h1 className="text-4xl font-bold font-tomorrow leading-tight text-primary  mb-6">
            Challenge Yourself,
            <br /> Change the World
          </h1>
          <p className="text-gray-500 mb-6 w-10/12">
            Join our community to raise funds for causes you care about through
            exciting physical challenges.
          </p>
          {/* App store buttons */}
          <div className=" flex flex-col">
            <p className="font-bold mb-2 ml-2">Available on</p>
            <div className="flex justify-start gap-4 mb-8 ">
              <button className="flex justify-center items-center space-x-2 bg-primary text-white px-6 py-1.5 rounded-3xl">
                <FaGooglePlay />
                <span>Google Play</span>
              </button>
              <button className="flex justify-center items-center space-x-2 text-primary border border-primary px-6 py-1.5 rounded-3xl">
                <FaApple />
                <span>App Store</span>
              </button>
            </div>
          </div>
          {/* Active users info */}
          <div className="flex items-center justify-start gap-2">
            <div className="flex -space-x-2">
              <Image
                src={animated1}
                alt="User1"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <Image
                src={animated2}
                alt="User2"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <Image
                src={animated3}
                alt="User3"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
            </div>
            <p className="text-gray-600 text-lg"><span className="text-2xl font-bold text-black">128K+</span> Active User</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="mt-14 md:mt-10 md:w-1/2 flex justify-center relative">
          <Image
            src={heroimg} 
            alt="Mobile App"
            width={400}
            height={800}
            className="drop-shadow-2xl"
          />
        </div>
      </section>
    </div>
  );
};

export default Herosec;
