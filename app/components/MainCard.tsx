

// pages/Maincard.tsx
import Head from 'next/head';
import RideCard from './RideCard';

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
    },
  ];

  return (
    <div >
      <h1 className='text-3xl font-extrabold font-tomorrow text-center text-primary mt-20 mb-10' id='challenges'>Featured Challenges</h1>
      <main className="flex justify-center p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rides.map((ride, index) => (
            <RideCard
              key={index}
              imageUrl={ride.imageUrl}
              title={ride.title}
              location={ride.location}
              rating={ride.rating}
              reviews={ride.reviews}
              distance={ride.distance}
              duration={ride.duration}
              price={ride.price}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;






// "use client"
// import dynamic from 'next/dynamic';
// import Head from 'next/head';
// import RideCard from './RideCard';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/effect-coverflow';

// // Dynamically import Swiper and SwiperSlide with SSR disabled
// const Swiper = dynamic(() => import('swiper/react').then(mod => mod.Swiper), { ssr: false });
// const SwiperSlide = dynamic(() => import('swiper/react').then(mod => mod.SwiperSlide), { ssr: false });

// // Importing Swiper modules from 'swiper/modules'
// import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';

// const Home = () => {
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
//     },
//   ];

//   return (
//     <div>
//       <Head>
//         <title>Ride Cards Example</title>
//       </Head>
//       <h1 className='text-3xl font-extrabold font-tomorrow text-center text-primary mt-20 mb-10'>
//         Featured Challenges
//       </h1>
//       <main className="flex justify-center p-10">
//         <Swiper
//           effect={'coverflow'}
//           grabCursor={true}
//           centeredSlides={true}
//           slidesPerView={1}
//           initialSlide={1}
//           navigation
//           pagination={{ clickable: true }}
//           breakpoints={{
//             640: { slidesPerView: 1, spaceBetween: 20 },
//             768: { slidesPerView: 2, spaceBetween: 40 },
//             1024: { slidesPerView: 3, spaceBetween: 50 },
//           }}
//           coverflowEffect={{
//             rotate: 0,
//             stretch: 0,
//             depth: 100,
//             modifier: 2.5,
//           }}
//           modules={[EffectCoverflow, Navigation, Pagination]}
//         >
//           {rides.map((ride, index) => (
//             <SwiperSlide key={index}>
//               <RideCard
//                 imageUrl={ride.imageUrl}
//                 title={ride.title}
//                 location={ride.location}
//                 rating={ride.rating}
//                 reviews={ride.reviews}
//                 distance={ride.distance}
//                 duration={ride.duration}
//                 price={ride.price}
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </main>
//     </div>
//   );
// };

// export default Home;








