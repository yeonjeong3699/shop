import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react'; //스와이퍼 설치 방법: yarn add swiper
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { loadSlideImage, storage, auth } from "../api/firebase";

export default function SliderContent({ imgUrls }) {
    const [imgUrl, setImgUrl] = useState([]);

    useEffect(() => {
        if (auth) {
            async function loadImg() {
                try {
                    const urls = await Promise.all( //Promise: 비동기 데이터 처리, Promise.all: 여러개의 비동기 데이터 처리
                        imgUrls.map((imgPath) => loadSlideImage(imgPath, storage))
                    )
                    setImgUrl(urls);
                } catch (error) {
                    console.error(error);
                }
            }
            loadImg()
        }
    }, [imgUrls])

    const slider = {
        width: '1920px',
        height: '800px'
    }

    return (
        <>
            <Swiper
                style={slider}
                slidesPerView={1}
                loop={true}
                speed={2000}
                modules={[EffectFade, Autoplay]}
                effect={'fade'}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                }}
            >
                {Array.isArray(imgUrl) &&
                    imgUrls.map((url, index) => (
                        <SwiperSlide key={index} style={{ backgroundImage: `url(${url})` }}></SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    )
}