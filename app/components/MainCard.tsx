"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; 
import RideCard from './RideCard'; 
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation'; // Import the navigation module styles

const Home = () => {
  // Array of card data
  const rides = [
    {
      imageUrl: '/card1.png',
      title: 'Tokyo Moonlight Marathon - Colle San Giorgio',
      location: 'Aviano, Friuli-Venezia Giulia, Italy',
      rating: 4.8,
      reviews: 80,
      distance: '8.6 km',
      duration: 'Est. 2h 40m',
      price: '4,99 €',
      cardPosition: 'left',
    },
    {
      imageUrl: '/card2.png',
      title: 'Gislon Botanical Garden - Colle San Giorgio',
      location: 'Cortina, Veneto, Italy',
      rating: 4.7,
      reviews: 60,
      distance: '12 km',
      duration: 'Est. 3h 20m',
      price: '6,99 €',
      cardPosition: 'mid',
    },
    {
      imageUrl: '/card3.png',
      title: 'New York Fun Ride - Colle San Giorgio',
      location: 'California, USA',
      rating: 4.9,
      reviews: 100,
      distance: '5 km',
      duration: 'Est. 1h 50m',
      price: '3,99 €',
      cardPosition: 'right',
    },
    {
      imageUrl: '/card1.png',
      title: 'Tokyo Moonlight Marathon - Colle San Giorgio',
      location: 'Aviano, Friuli-Venezia Giulia, Italy',
      rating: 4.8,
      reviews: 80,
      distance: '8.6 km',
      duration: 'Est. 2h 40m',
      price: '4,99 €',
      cardPosition: 'left',
    },
    {
      imageUrl: '/card2.png',
      title: 'Gislon Botanical Garden - Colle San Giorgio',
      location: 'Cortina, Veneto, Italy',
      rating: 4.7,
      reviews: 60,
      distance: '12 km',
      duration: 'Est. 3h 20m',
      price: '6,99 €',
      cardPosition: 'mid',
    },
    {
      imageUrl: '/card3.png',
      title: 'New York Fun Ride - Colle San Giorgio',
      location: 'California, USA',
      rating: 4.9,
      reviews: 100,
      distance: '5 km',
      duration: 'Est. 1h 50m',
      price: '3,99 €',
      cardPosition: 'right',
    },
  ];

  return (
    <div>
      <h1 className='text-3xl font-extrabold font-tomorrow text-center text-primary mt-20 mb-10' id='challenges'>
        Featured Challenges
      </h1>
      <main className="flex justify-center p-10">
        <div className="w-full flex justify-center">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            centeredSlides={true}
            pagination={{ clickable: true }}
            navigation={true}  // Ensure navigation is enabled
            modules={[Navigation]} 
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            {rides.map((ride, index) => (
              <SwiperSlide key={index} >
                <div className="flex justify-center w-full">
                  <RideCard
                    imageUrl={ride.imageUrl}
                    title={ride.title}
                    location={ride.location}
                    rating={ride.rating}
                    reviews={ride.reviews}
                    distance={ride.distance}
                    duration={ride.duration}
                    price={ride.price}
                    cardPosition={ride.cardPosition}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </main>
    </div>
  );
};

export default Home;











//-------------------------------------------------finaly--------
// // pages/index.tsx
// "use client";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css'; 
// import RideCard from './RideCard'; 
// import { Navigation } from 'swiper/modules';
// import 'swiper/css/navigation'; // Import the navigation module styles

// const Home = () => {
//   // Array of card data
//   const rides = [
//     {
//       imageUrl: '/card1.png',
//       title: 'Tokyo Moonlight Marathon - Colle San Giorgio',
//       location: 'Aviano, Friuli-Venezia Giulia, Italy',
//       rating: 4.8,
//       reviews: 80,
//       distance: '8.6 km',
//       duration: 'Est. 2h 40m',
//       price: '4,99 €',
//       cardPosition: 'left',
//     },
//     {
//       imageUrl: '/card2.png',
//       title: 'Gislon Botanical Garden - Colle San Giorgio',
//       location: 'Cortina, Veneto, Italy',
//       rating: 4.7,
//       reviews: 60,
//       distance: '12 km',
//       duration: 'Est. 3h 20m',
//       price: '6,99 €',
//       cardPosition: 'mid',
//     },
//     {
//       imageUrl: '/card3.png',
//       title: 'New York Fun Ride - Colle San Giorgio',
//       location: 'California, USA',
//       rating: 4.9,
//       reviews: 100,
//       distance: '5 km',
//       duration: 'Est. 1h 50m',
//       price: '3,99 €',
//       cardPosition: 'right',
//     },
//     {
//       imageUrl: '/card1.png',
//       title: 'Tokyo Moonlight Marathon - Colle San Giorgio',
//       location: 'Aviano, Friuli-Venezia Giulia, Italy',
//       rating: 4.8,
//       reviews: 80,
//       distance: '8.6 km',
//       duration: 'Est. 2h 40m',
//       price: '4,99 €',
//       cardPosition: 'left',
//     },
//     {
//       imageUrl: '/card2.png',
//       title: 'Gislon Botanical Garden - Colle San Giorgio',
//       location: 'Cortina, Veneto, Italy',
//       rating: 4.7,
//       reviews: 60,
//       distance: '12 km',
//       duration: 'Est. 3h 20m',
//       price: '6,99 €',
//       cardPosition: 'mid',
//     },
//     {
//       imageUrl: '/card3.png',
//       title: 'New York Fun Ride - Colle San Giorgio',
//       location: 'California, USA',
//       rating: 4.9,
//       reviews: 100,
//       distance: '5 km',
//       duration: 'Est. 1h 50m',
//       price: '3,99 €',
//       cardPosition: 'right',
//     },
//   ];

//   return (
//     <div>
//       <h1 className='text-3xl font-extrabold font-tomorrow text-center text-primary mt-20 mb-10' id='challenges'>Featured Challenges</h1>
//       <main className="flex justify-center p-10">
//         <div className="w-full flex justify-center">
//           <Swiper
//             spaceBetween={20}
//             slidesPerView={1}
//             centeredSlides={true}
//             pagination={{ clickable: true }}
//             navigation={true}  // Ensure navigation is enabled
//             modules={[Navigation]} 
//             loop={true}
//             breakpoints={{
//               640: {
//                 slidesPerView: 1,
//                 spaceBetween: 20,
//               },
//               768: {
//                 slidesPerView: 2,
//                 spaceBetween: 30,
//               },
//               1024: {
//                 slidesPerView: 3,
//                 spaceBetween: 40,
//               },
//             }}
//           >
//             {rides.map((ride, index) => (
//               <SwiperSlide key={index} >
//                 <div className="flex justify-center">
//                   <RideCard
//                     imageUrl={ride.imageUrl}
//                     title={ride.title}
//                     location={ride.location}
//                     rating={ride.rating}
//                     reviews={ride.reviews}
//                     distance={ride.distance}
//                     duration={ride.duration}
//                     price={ride.price}
//                     cardPosition={ride.cardPosition}
//                   />
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Home;










// ------------------------------------original card
// // pages/index.tsx
// "use client";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css'; 
// import RideCard from './RideCard'; 
// import { Navigation } from 'swiper/modules';

// const Home = () => {
//   // Array of card data
//   const rides = [
//     {
//       imageUrl: '/card1.png',
//       title: 'Tokyo Moonlight Marathon - Colle San Giorgio',
//       location: 'Aviano, Friuli-Venezia Giulia, Italy',
//       rating: 4.8,
//       reviews: 80,
//       distance: '8.6 km',
//       duration: 'Est. 2h 40m',
//       price: '4,99 €',
//       cardPosition: 'left',
//     },
//     {
//       imageUrl: '/card2.png',
//       title: 'Gislon Botanical Garden - Colle San Giorgio',
//       location: 'Cortina, Veneto, Italy',
//       rating: 4.7,
//       reviews: 60,
//       distance: '12 km',
//       duration: 'Est. 3h 20m',
//       price: '6,99 €',
//       cardPosition: 'mid',
//     },
//     {
//       imageUrl: '/card3.png',
//       title: 'New York Fun Ride - Colle San Giorgio',
//       location: 'California, USA',
//       rating: 4.9,
//       reviews: 100,
//       distance: '5 km',
//       duration: 'Est. 1h 50m',
//       price: '3,99 €',
//       cardPosition: 'right',
//     },
//   ];

//   return (
//     <div>
//      <h1 className='text-3xl font-extrabold font-tomorrow text-center text-primary mt-20 mb-10' id='challenges'>Featured Challenges</h1>
//       <main className="flex justify-center p-10">
//         <div className="w-full flex justify-center ">
//           <Swiper
//             spaceBetween={20}
//             slidesPerView={1}
//             centeredSlides={true} 
//             pagination={{ clickable: true }}
//             navigation={true}
//             modules={[Navigation]} 
//             loop={true}
//           >
//             {rides.map((ride, index) => (
//               <SwiperSlide key={index}  >
//                 <div className="flex justify-center"> 
//                   <RideCard
//                     imageUrl={ride.imageUrl}
//                     title={ride.title}
//                     location={ride.location}
//                     rating={ride.rating}
//                     reviews={ride.reviews}
//                     distance={ride.distance}
//                     duration={ride.duration}
//                     price={ride.price}
//                     cardPosition={ride.cardPosition}
//                   />
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Home;






// "use client";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css'; 
// import RideCard from './RideCard'; 
// import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

// const Home = () => {
//   // Array of card data
//   const rides = [
//     {
//       imageUrl: '/card1.png',
//       title: 'Tokyo Moonlight Marathon - Colle San Giorgio',
//       location: 'Aviano, Friuli-Venezia Giulia, Italy',
//       rating: 4.8,
//       reviews: 80,
//       distance: '8.6 km',
//       duration: 'Est. 2h 40m',
//       price: '4,99 €',
//       cardPosition: 'left',
//     },
//     {
//       imageUrl: '/card2.png',
//       title: 'Gislon Botanical Garden - Colle San Giorgio',
//       location: 'Cortina, Veneto, Italy',
//       rating: 4.7,
//       reviews: 60,
//       distance: '12 km',
//       duration: 'Est. 3h 20m',
//       price: '6,99 €',
//       cardPosition: 'mid',
//     },
//     {
//       imageUrl: '/card3.png',
//       title: 'New York Fun Ride - Colle San Giorgio',
//       location: 'California, USA',
//       rating: 4.9,
//       reviews: 100,
//       distance: '5 km',
//       duration: 'Est. 1h 50m',
//       price: '3,99 €',
//       cardPosition: 'right',
//     },
//   ];

//   return (
//     <div>
//      <h1 className='text-3xl font-extrabold font-tomorrow text-center text-primary mt-20 mb-10' id='challenges'>Featured Challenges</h1>
//       <main className="flex justify-center p-10">
//         <div className="w-full flex justify-center ">
//           <Swiper
//             spaceBetween={20}
//             slidesPerView={1}
//             centeredSlides={true}
//             pagination={{ clickable: true }}
//             navigation={true}
//             effect={'coverflow'}  
//             grabCursor={true}
//             coverflowEffect={{
//               rotate: 50,
//               stretch: 0,
//               depth: 100,
//               modifier: 1,
//               slideShadows: true,
//             }}
            // breakpoints={{
            //   640: {
            //     slidesPerView: 1,
            //     spaceBetween: 20,
            //   },
            //   768: {
            //     slidesPerView: 2,
            //     spaceBetween: 30,
            //   },
            //   1024: {
            //     slidesPerView: 3,
            //     spaceBetween: 40,
            //   },
            // }}
//             loop={true}
//             modules={[EffectCoverflow, Navigation, Pagination]}  
//           >
//             {rides.map((ride, index) => (
//               <SwiperSlide key={index}  >
//                 <div className="flex justify-center"> 
//                   <RideCard
//                     imageUrl={ride.imageUrl}
//                     title={ride.title}
//                     location={ride.location}
//                     rating={ride.rating}
//                     reviews={ride.reviews}
//                     distance={ride.distance}
//                     duration={ride.duration}
//                     price={ride.price}
//                     cardPosition={ride.cardPosition}
//                   />
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Home;




// --------------------------------------------------------same mode
// "use client";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css'; 
// import RideCard from './RideCard'; 
// import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

// const Home = () => {
//   // Array of card data
//   const rides = [
//     {
//       imageUrl: '/card1.png',
//       title: 'Tokyo Moonlight Marathon - Colle San Giorgio',
//       location: 'Aviano, Friuli-Venezia Giulia, Italy',
//       rating: 4.8,
//       reviews: 80,
//       distance: '8.6 km',
//       duration: 'Est. 2h 40m',
//       price: '4,99 €',
//       cardPosition: 'left',
//     },
//     {
//       imageUrl: '/card2.png',
//       title: 'Gislon Botanical Garden - Colle San Giorgio',
//       location: 'Cortina, Veneto, Italy',
//       rating: 4.7,
//       reviews: 60,
//       distance: '12 km',
//       duration: 'Est. 3h 20m',
//       price: '6,99 €',
//       cardPosition: 'mid',
//     },
//     {
//       imageUrl: '/card3.png',
//       title: 'New York Fun Ride - Colle San Giorgio',
//       location: 'California, USA',
//       rating: 4.9,
//       reviews: 100,
//       distance: '5 km',
//       duration: 'Est. 1h 50m',
//       price: '3,99 €',
//       cardPosition: 'right',
//     },
//   ];

//   return (
//     <div>
//       <h1 className='text-3xl font-extrabold font-tomorrow text-center text-primary mt-20 mb-10' id='challenges'>Featured Challenges</h1>
//       <main className="flex justify-center p-10">
//         <div className="w-full flex justify-center ">
//           <Swiper
//             effect={'coverflow'}
//             grabCursor={true}
//             centeredSlides={true}
//             slidesPerView={1}
//             initialSlide={1}
//             slideActiveClass="active-slide"
//             coverflowEffect={{
//               rotate: 0,
//               stretch: 0,
//               depth: 100,
//               modifier: 2.5,
//             }}
//             pagination={{ clickable: true }}
//             navigation={true}
//             loop={true}
//             breakpoints={{
//               640: {
//                 slidesPerView: 1,
//                 spaceBetween: 20,
//               },
//               768: {
//                 slidesPerView: 2,
//                 spaceBetween: 40,
//               },
//               1024: {
//                 slidesPerView: 2.8,
//                 spaceBetween: 50,
//               },
//             }}
//             modules={[EffectCoverflow, Navigation, Pagination]}
//           >
//             {rides.map((ride, index) => (
//               <SwiperSlide key={index}>
//                 <div className="flex justify-center"> 
//                   <RideCard
//                     imageUrl={ride.imageUrl}
//                     title={ride.title}
//                     location={ride.location}
//                     rating={ride.rating}
//                     reviews={ride.reviews}
//                     distance={ride.distance}
//                     duration={ride.duration}
//                     price={ride.price}
//                     cardPosition={ride.cardPosition}
//                   />
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Home;












// -------------------------------------yi okay ha liken one card ky sath ha

// "use client";
// import { useState, useRef } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css'; 
// import RideCard from './RideCard'; 
// import { Navigation } from 'swiper/modules';

// const Home = () => {
//   const swiperRef = useRef(null);
  
//   // Array of card data
//   const initialRides = [
//     {
//       imageUrl: '/card1.png',
//       title: 'Tokyo Moonlight Marathon - Colle San Giorgio',
//       location: 'Aviano, Friuli-Venezia Giulia, Italy',
//       rating: 4.8,
//       reviews: 80,
//       distance: '8.6 km',
//       duration: 'Est. 2h 40m',
//       price: '4,99 €',
//       cardPosition: 'left',
//     },
//     {
//       imageUrl: '/card2.png',
//       title: 'Gislon Botanical Garden - Colle San Giorgio',
//       location: 'Cortina, Veneto, Italy',
//       rating: 4.7,
//       reviews: 60,
//       distance: '12 km',
//       duration: 'Est. 3h 20m',
//       price: '6,99 €',
//       cardPosition: 'mid',
//     },
//     {
//       imageUrl: '/card3.png',
//       title: 'New York Fun Ride - Colle San Giorgio',
//       location: 'California, USA',
//       rating: 4.9,
//       reviews: 100,
//       distance: '5 km',
//       duration: 'Est. 1h 50m',
//       price: '3,99 €',
//       cardPosition: 'right',
//     },
//   ];

//   const [rides, setRides] = useState(initialRides);
//   const [appendNumber, setAppendNumber] = useState(3); // Initial append number
//   const [prependNumber, setPrependNumber] = useState(0); // Initial prepend number

//   const handlePrependSlide = () => {
//     setPrependNumber(prev => prev - 1); // Update prepend number
//     const newSlide = {
//       imageUrl: '/new-slide.png',
//       title: `New Prepend Slide ${prependNumber - 1}`,
//       location: 'Unknown Location',
//       rating: 4.0,
//       reviews: 0,
//       distance: '0 km',
//       duration: 'Est. 0h 0m',
//       price: '0,00 €',
//       cardPosition: 'left',
//     };
//     setRides([newSlide, ...rides]);
//   };

//   const handleAppendSlide = () => {
//     setAppendNumber(prev => prev + 1); // Update append number
//     const newSlide = {
//       imageUrl: '/new-slide.png',
//       title: `New Append Slide ${appendNumber + 1}`,
//       location: 'Unknown Location',
//       rating: 4.0,
//       reviews: 0,
//       distance: '0 km',
//       duration: 'Est. 0h 0m',
//       price: '0,00 €',
//       cardPosition: 'right',
//     };
//     setRides([...rides, newSlide]);
//   };

//   return (
//     <div>
//       <h1 className='text-3xl font-extrabold font-tomorrow text-center text-primary mt-20 mb-10' id='challenges'>Featured Challenges</h1>
      
//       <main className="flex justify-center p-10">
//         <div className="w-full flex justify-center ">
//           <Swiper
//             ref={swiperRef}
//             spaceBetween={20}
//             slidesPerView={1}
//             centeredSlides={true} 
//             pagination={{ clickable: true }}
//             navigation={true}
//             modules={[Navigation]} 
//             loop={true}
//           >
//             {rides.map((ride, index) => (
//               <SwiperSlide key={index}>
//                 <div className="flex justify-center"> 
//                   <RideCard
//                     imageUrl={ride.imageUrl}
//                     title={ride.title}
//                     location={ride.location}
//                     rating={ride.rating}
//                     reviews={ride.reviews}
//                     distance={ride.distance}
//                     duration={ride.duration}
//                     price={ride.price}
//                     cardPosition={ride.cardPosition}
//                   />
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </main>

//       {/* Prepend and Append Buttons */}
//       <div className="flex justify-center mt-6 space-x-4">
//         <button
//           className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
//           onClick={handlePrependSlide}
//         >
//           Prepend Slide
//         </button>
//         <button
//           className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
//           onClick={handleAppendSlide}
//         >
//           Append Slide
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Home;
















// ------------------------------------------------yi aise he bas

// "use client";
// import { useState, useRef } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css'; 
// import RideCard from './RideCard'; 
// import { Navigation } from 'swiper/modules';

// const Home = () => {
//   const swiperRef = useRef(null);
  
//   // Array of card data
//   const initialRides = [
//     {
//       imageUrl: '/card1.png',
//       title: 'Tokyo Moonlight Marathon - Colle San Giorgio',
//       location: 'Aviano, Friuli-Venezia Giulia, Italy',
//       rating: 4.8,
//       reviews: 80,
//       distance: '8.6 km',
//       duration: 'Est. 2h 40m',
//       price: '4,99 €',
//       cardPosition: 'left',
//     },
//     {
//       imageUrl: '/card2.png',
//       title: 'Gislon Botanical Garden - Colle San Giorgio',
//       location: 'Cortina, Veneto, Italy',
//       rating: 4.7,
//       reviews: 60,
//       distance: '12 km',
//       duration: 'Est. 3h 20m',
//       price: '6,99 €',
//       cardPosition: 'mid',
//     },
//     {
//       imageUrl: '/card3.png',
//       title: 'New York Fun Ride - Colle San Giorgio',
//       location: 'California, USA',
//       rating: 4.9,
//       reviews: 100,
//       distance: '5 km',
//       duration: 'Est. 1h 50m',
//       price: '3,99 €',
//       cardPosition: 'right',
//     },
//   ];

//   const [rides, setRides] = useState(initialRides);
//   const [appendNumber, setAppendNumber] = useState(3); // Initial append number
//   const [prependNumber, setPrependNumber] = useState(0); // Initial prepend number

//   const handlePrependSlide = () => {
//     setPrependNumber(prev => prev - 1); // Update prepend number
//     const newSlide = {
//       imageUrl: '/new-slide.png',
//       title: `New Prepend Slide ${prependNumber - 1}`,
//       location: 'Unknown Location',
//       rating: 4.0,
//       reviews: 0,
//       distance: '0 km',
//       duration: 'Est. 0h 0m',
//       price: '0,00 €',
//       cardPosition: 'left',
//     };
//     setRides([newSlide, ...rides]);
//   };

//   const handleAppendSlide = () => {
//     setAppendNumber(prev => prev + 1); // Update append number
//     const newSlide = {
//       imageUrl: '/new-slide.png',
//       title: `New Append Slide ${appendNumber + 1}`,
//       location: 'Unknown Location',
//       rating: 4.0,
//       reviews: 0,
//       distance: '0 km',
//       duration: 'Est. 0h 0m',
//       price: '0,00 €',
//       cardPosition: 'right',
//     };
//     setRides([...rides, newSlide]);
//   };

//   return (
//     <div>
//       <h1 className='text-3xl font-extrabold font-tomorrow text-center text-primary mt-20 mb-10' id='challenges'>Featured Challenges</h1>
      
//       <main className="flex justify-center p-10">
//         <div className="w-full flex justify-center ">
//           <Swiper
//             ref={swiperRef}
//             spaceBetween={20}
//             slidesPerView={1}
//             centeredSlides={true} 
//             pagination={{ clickable: true }}
//             navigation={true}
//             modules={[Navigation]} 
//             loop={true}
//             breakpoints={{
//               640: {
//                 slidesPerView: 1,
//                 spaceBetween: 20,
//               },
//               768: {
//                 slidesPerView: 2,
//                 spaceBetween: 40,
//               },
//               1024: {
//                 slidesPerView: 3,
//                 spaceBetween: 50,
//               },
//             }}
//           >
//             {rides.map((ride, index) => (
//               <SwiperSlide key={index}>
//                 <div className="flex justify-center"> 
//                   <RideCard
//                     imageUrl={ride.imageUrl}
//                     title={ride.title}
//                     location={ride.location}
//                     rating={ride.rating}
//                     reviews={ride.reviews}
//                     distance={ride.distance}
//                     duration={ride.duration}
//                     price={ride.price}
//                     cardPosition={ride.cardPosition}
//                   />
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </main>

//       {/* Prepend and Append Buttons */}
//       <div className="flex justify-center mt-6 space-x-4">
//         <button
//           className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
//           onClick={handlePrependSlide}
//         >
//           Prepend Slide
//         </button>
//         <button
//           className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
//           onClick={handleAppendSlide}
//         >
//           Append Slide
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Home;
