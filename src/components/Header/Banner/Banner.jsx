// import React, { useRef, useState } from 'react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

// import './styles.css';
const Banner = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper bg-[black] z-0"
            >
                <SwiperSlide className='relative'>
                    <img className='w-full h-[500px] bg-transparent opacity-50' src="https://i.ibb.co/PGT2zV0/toyota.jpg" alt="" />
                    <div className=' absolute top-1/2 left-1/2 transform -translate-x-1/2  -translate-y-1/2 space-y-5 text-white'>
                        <h1 className='md:text-5xl text-2xl font-bold text-[red] text-center'>Toyota</h1>
                        <p className='md:text-xl text-lg'>
                            Toyota cars are a part of the automotive lineup produced by Toyota Motor Corporation, one of the worlds largest automobile manufacturers. Known for their reliability, durability, and innovation.</p>
                        <button className='px-4 rounded py-2 text-center mx-auto flex bg-[red] text-xl font-bold text-white'>Details</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-[500px] bg-transparent opacity-50' src="https://i.ibb.co/WvsvVDm/ford.jpg" alt="" />
                    <div className=' absolute top-1/2 left-1/2 transform -translate-x-1/2  -translate-y-1/2 space-y-5 text-white'>
                        <h1 className='md:text-5xl text-2xl font-bold text-[red] text-center'>Ford</h1>
                        <p className='md:text-xl w-full text-lg'>
                            Ford Motor Company, established by Henry Ford in 1903, is one of the pioneering American automotive manufacturers. Known for its rich history, diverse vehicle lineup, and contributions to the automotive industry</p>
                        <button className='px-4 rounded py-2 text-center mx-auto flex bg-[red] text-xl font-bold text-white'>Details</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-[500px] bg-transparent opacity-50' src="https://i.ibb.co/Xk317xK/bmw-wallpaper-preview.jpg" alt="" />
                    <div className=' absolute top-1/2 left-1/2 transform -translate-x-1/2  -translate-y-1/2 space-y-5 text-white'>
                        <h1 className='md:text-5xl text-2xl font-bold text-[red] text-center'>BMW</h1>
                        <p className='md:text-xl w-full text-lg'>
                            BMW, short for Bayerische Motoren Werke AG, is a German multinational company known for manufacturing luxury vehicles and motorcycles. Renowned for its performance, craftsmanship, and innovation</p>
                        <button className='px-4 rounded py-2 text-center mx-auto flex bg-[red] text-xl font-bold text-white'>Details</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-[500px] bg-transparent opacity-50' src="https://i.ibb.co/VjNMD64/mercedes.jpg" alt="" />
                    <div className=' absolute top-1/2 left-1/2 transform -translate-x-1/2  -translate-y-1/2 space-y-5 text-white'>
                        <h1 className='md:text-5xl text-2xl font-bold text-[red] text-center'>Mercedes</h1>
                        <p className='md:text-xl w-full text-lg'>
                            Mercedes-Benz, a division of Daimler AG, is a renowned German luxury automobile manufacturer known for producing a wide range of high-end vehicles. Established in 1926. </p>
                        <button className='px-4 rounded py-2 text-center mx-auto flex bg-[red] text-xl font-bold text-white'>Details</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-[500px] bg-transparent opacity-50' src="https://i.ibb.co/7rgNKkY/6d96c42cfd3083bfb62f75476be5a57c.jpg" alt="" />
                    <div className=' absolute top-1/2 left-1/2 transform -translate-x-1/2  -translate-y-1/2 space-y-5 text-white'>
                        <h1 className='md:text-5xl text-2xl font-bold text-[red] text-center'>Tesla</h1>
                        <p className='md:text-xl w-full text-lg'>

                            Tesla, founded in 2003 by Elon Musk and others, is a pioneering American electric vehicle (EV) and clean energy company. Renowned for its innovation, technological advancements, and commitment to sustainability</p>
                        <button className='px-4 rounded py-2 text-center mx-auto flex bg-[red] text-xl font-bold text-white'>Details</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-[500px] bg-transparent opacity-50' src="https://i.ibb.co/tDKHkQX/face-honda-black-background-honda-wallpaper-preview.jpg" alt="" />
                    <div className=' absolute top-1/2 left-1/2 transform -translate-x-1/2  -translate-y-1/2 space-y-5 text-white'>
                        <h1 className='md:text-5xl text-2xl text-[red] font-bold text-center'>Honda</h1>
                        <p className='md:text-xl w-full text-lg'>
                            Honda Motor Co., Ltd., founded in 1948 by Soichiro Honda and Takeo Fujisawa, is a Japanese multinational conglomerate known for manufacturing automobiles, motorcycles, power equipment, and more.</p>
                        <button className='px-4 rounded py-2 text-center mx-auto flex bg-[red] text-xl font-bold text-white'>Details</button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banner;