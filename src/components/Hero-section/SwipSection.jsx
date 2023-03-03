import React from 'react'
import './SwiperSection.scss'
import useFetchData from '../../hooks/useFetchData'
import { Link, NavLink } from 'react-router-dom'
import Container from '../../hooks/Container'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";


const SwipSection = () => {
    const [data, isLoader] = useFetchData('/categories')
    return (
        <Container>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                }}
                modules={[Autoplay, Pagination, Navigation]}>
                {
                    data.map(category =>
                        <SwiperSlide key={category.id}>
                            <div className='banner_link'>
                                <div className='banner'>
                                    <div className='banner_wrapper'>
                                        <h2 className='banner_title'>Super savings at </h2>
                                        <h2 className='banner_title'>{` the ${category.name}`}</h2>
                                        <p className='banner_desc'>Up to 60% off the brands you love.</p>
                                        <Link className='banner_btn' to={`/category/${category.id}`} >
                                            <p>{`Shop ${category.name}`}</p>
                                            <p style={{
                                                fontSize: '24px',
                                                marginTop: '5px'
                                            }}> ➔</p>
                                        </Link>
                                    </div>
                                    <Link to={`products/categoryId=${category.id}`} className='banner_inner'>
                                        <img className='banner_img' height={330} src={category.image} alt="" />
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    )}
            </Swiper>
        </Container>
    )
}

export default SwipSection