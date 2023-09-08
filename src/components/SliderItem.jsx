import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react'; //스와이퍼 설치 방법: yarn add swiper
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade } from 'swiper/modules';

export default function SliderItem() {
    return (
        <Swiper
            className="slider"
            slidesPerView={1}
            loop={true}
            speed={2000}
            modules={[Autoplay, EffectFade]}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false
            }}
            effect={'fade'}
        >
            <SwiperSlide><img src="https://firebasestorage.googleapis.com/v0/b/shop-e0774.appspot.com/o/slide_1.jpg?alt=media&token=74b96404-20bc-446b-ab72-348d30228ece" /></SwiperSlide>
            <SwiperSlide><img src="https://firebasestorage.googleapis.com/v0/b/shop-e0774.appspot.com/o/slide_2.jpg?alt=media&token=a74c24c6-f77e-4eb9-9d28-59adc0df1249" /></SwiperSlide>
            <SwiperSlide><img src="https://firebasestorage.googleapis.com/v0/b/shop-e0774.appspot.com/o/slide_3.jpg?alt=media&token=d0071b88-4be8-417b-8f4f-a602c8a4bb20" /></SwiperSlide>
            <SwiperSlide><img src="https://firebasestorage.googleapis.com/v0/b/shop-e0774.appspot.com/o/slide_4.jpg?alt=media&token=f3ae1712-a9f8-4f69-b63b-5356e43f788d" /></SwiperSlide>
        </Swiper>

        /*
        기본 슬라이드 적용 방법으로 슬라이드의 내용이 모든 페이지에서 똑같이 적용될 때에는 상관 없지만
        다른 페이지에서는 다른 슬라이드 이미지를 보여주고 싶다면 firebase에서 이미지를 가져오는 방식으로 바꿔주면 된다.
        */
    )
}