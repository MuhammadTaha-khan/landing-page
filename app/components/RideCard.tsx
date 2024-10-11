// RideCard 
import React from "react";
import { FaStar, FaPlus, FaBookmark } from "react-icons/fa";
// import second from '../../public/animated1.png'
import animated1 from "../../public/animated1.png";
import animated2 from "../../public/animated2.png";
import animated3 from "../../public/animated3.png";
import Image from 'next/image'

interface RideCardProps {
  imageUrl: string;
  title: string;
  location: string;
  rating: number;
  reviews: number;
  distance: string;
  duration: string;
  price: string;
  cardPosition: string;
}

const RideCard: React.FC<RideCardProps> = ({
  imageUrl,
  title,
  location,
  rating,
  reviews,
  distance,
  duration,
  price,
  cardPosition
}) => {
  return (
    <div className="max-w-lg md:max-w-sm bg-white  rounded-lg overflow-hidden ">
      <div className=" rounded-lg">
        <img src={imageUrl} alt={title} className="w-full h-38 object-cover " />
      </div>
      <div className="relative border  bg-white  -mt-2 p-2 md:p-4 rounded-lg">
        <div className="flex flex-row justify-between items-center mb-2 ">
          <h3 className="text-md font-tomorrow font-bold md:w-9/12"
            dangerouslySetInnerHTML={{ __html: title }}
          ></h3>
          <FaBookmark className="text-2xl text-gray-300 "/>
        </div>
        <p className="text-sm text-gray-500 mt-0"
          dangerouslySetInnerHTML={{ __html: location }}
        ></p>
        {
          (cardPosition !== "mid") ?
            <div className="flex items-center space-x-3 mt-3 mb-3">
              <div className="flex items-center text-yellow-500">
                <FaStar />
                <span className="ml-1 text-sm text-black"
                  dangerouslySetInnerHTML={{ __html: rating }}
                ></span>
                <span className="ml-1 text-black"
                  dangerouslySetInnerHTML={{ __html: reviews }}
                ></span>
              </div>
              <span className="text-sm text-black bg-gray-200  px-4 py-2 rounded-lg font-semibold"
                dangerouslySetInnerHTML={{ __html: distance }}
              ></span>
              <span className="text-sm text-black bg-gray-200  px-4 py-2 rounded-lg font-semibold"
                dangerouslySetInnerHTML={{ __html: duration }}
              ></span>
            </div>
            :
            <div className="flex items-center space-x-7 mt-3 ">
              <div className="flex flex-col items-start justify-start mb-1" >
                <span className="text-sm">Distance</span>
                <span className="text-lg text-black bg-transparent    rounded-lg font-semibold"
                  dangerouslySetInnerHTML={{ __html: distance }}
                ></span>
              </div>

              <div className="flex flex-col items-start justify-start mb-1" >
                <span className="text-sm">Place</span>
                <span className="text-lg text-black bg-transparent    rounded-lg font-semibold"
                  dangerouslySetInnerHTML={{ __html: duration }}
                ></span>
              </div>

              <div className="flex flex-col items-start justify-start mb-1" >
                <span className="text-sm">Time</span>
                <span className="text-lg text-black bg-transparent    rounded-lg font-semibold"
                  dangerouslySetInnerHTML={{ __html: duration.split("Est.")[1] }}
                ></span>
              </div>
            </div>
        }
        <div className="flex items-center justify-between mt-3">
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
                className="w-10 h-10 rounded-full border-2 border-white "
              />
              <FaPlus className="w-9  h-9 rounded-full bg-yellow-500 p-2 mt-0.5 text-white " />
            </div>
          </div>
          {
            cardPosition == "left" ?
              <div className="bg-gray-200 text-black px-4 py-2 rounded-lg font-semibold">
                {"Free"}
              </div> :
              <div className="bg-primary text-white px-4 py-2 rounded-lg font-semibold"
                dangerouslySetInnerHTML={{ __html: price }}
              >
              </div>
          }

        </div>
      </div>
    </div>
  );
};

export default RideCard;








