import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./SingleSwiper.scss";
import { FreeMode, Navigation, Thumbs } from "swiper";

export default function SingleSwiper({ data }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className="single-swiper">
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={0}
                slidesPerView={10}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="last-swiper">
                {
                    data?.map((src, index) =>
                        <SwiperSlide key={index}>
                            <img src={src} alt="image" />
                        </SwiperSlide>
                    )
                }

            </Swiper>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2">
                {
                    data?.map((src, index) =>
                        <SwiperSlide key={index}>
                            <img src={src} alt="image" />
                        </SwiperSlide>
                    )
                }

            </Swiper>

        </div>
    );
}
