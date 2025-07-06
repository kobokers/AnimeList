import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/bundle';
import animeData from './data/animeData';

function App() {

  return (
    <div className="bg-white rounded-xl select-none shadow-lg w-3/4 mx-auto mt-8 mb-8 p-8">
      {/* Swiper Section */}
      <div className="h-[40vh]">
        <Swiper
          className="h-full w-full"
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={1}
          navigation={true}
        >
          <SwiperSlide>
            <img src="https://placehold.co/1000x300" className="h-full w-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://placehold.co/1000x300" className="h-full w-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://placehold.co/1000x300" className="h-full w-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://placehold.co/1000x300" className="h-full w-full object-cover" />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Section Title */}
      <div className="text-center mt-10">
        <h1 className="text-2xl font-bold text-gray-800">Welcome to the Anime List</h1>
        <p className="text-gray-600 mt-4">Here’s the anime listing below:</p>
      </div>

      {/* Anime Grid Listing */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {animeData.map((anime) => (
          <div key={anime.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={anime.poster} alt={anime.title} className="w-full h-auto" />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{anime.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
