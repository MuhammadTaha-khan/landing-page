// pages/index.tsx
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
    <div>
      <Head>
        <title>Ride Cards Example</title>
      </Head>
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
