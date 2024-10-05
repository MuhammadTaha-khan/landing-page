// pages/index.tsx
"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; 
import RideCard from './RideCard'; 
import { Navigation } from 'swiper/modules';

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
  ];

  return (
    <div>
     <h1 className='text-3xl font-extrabold font-tomorrow text-center text-primary mt-20 mb-10' id='challenges'>Featured Challenges</h1>
      <main className="flex justify-center p-10">
        <div className="w-full flex justify-center ">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            centeredSlides={true} 
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Navigation]} 
            loop={true}
          >
            {rides.map((ride, index) => (
              <SwiperSlide key={index}  >
                <div className="flex justify-center"> 
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
