import React from 'react';
// import Swiper from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const AddSlider = ({ sliderAdd }) => {
    const { advertisement1, advertisement2, advertisement3 } = sliderAdd;
    // console.log(advertisement1, advertisement2, advertisement3)
    return (
        <div>
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
                className="mySwiper z-0"
            >
                <SwiperSlide>
                    <img className='w-full h-[300px] bg-transparent' src={advertisement1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-[300px] bg-transparent' src={advertisement2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-[300px] bg-transparent' src={advertisement3} alt="" />
                </SwiperSlide>

            </Swiper>
        </div>

    );
};

export default AddSlider;