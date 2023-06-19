import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import "./style.css"


export default function Slider({
    className = "",
    autoplay = {},
    spaceBetween = 0,
    slidesPerView = 0,
    pagination = {},
    loop = false,
    speed = 1000,
    navigation = {},
    data = []
}) {
    return (
        <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={spaceBetween}
            slidesPerView={slidesPerView}
            autoplay={autoplay}
            pagination={pagination}
            loop={loop}
            speed={speed}
        >
            {
                data.map(img => <SwiperSlide key={img}><img src={img} alt="poster"/></SwiperSlide>)
            }
        </Swiper>
    )
}