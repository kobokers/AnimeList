import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/bundle';

function App() {

  return (
    <>
      <div className="bg-purple-900 min-h-screen flex items-start justify-center p-4 h-[30vh]">
        <div className="bg-white rounded-xl select-none swiper flex flex-col shadow-lg w-full h-[30vh] p-8">
          <Swiper
            className='h-full w-full'
            modules={[Navigation, Pagination]}
            loop={true}
            pagination={{ clickable: true }}
            spaceBetween={50}
            slidesPerView={1}
            navigation={true}
          >
            <SwiperSlide className='h-full flex'><img src='https://placehold.co/1000x300' className="h-full w-full object-cover" /></SwiperSlide>
            <SwiperSlide className='h-full flex'><img src='https://placehold.co/1000x300' className="h-full w-full object-cover" /></SwiperSlide>
            <SwiperSlide className='h-full flex'><img src='https://placehold.co/1000x300' className="h-full w-full object-cover" /></SwiperSlide>
            <SwiperSlide className='h-full flex'><img src='https://placehold.co/1000x300' className="h-full w-full object-cover" /></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default App
