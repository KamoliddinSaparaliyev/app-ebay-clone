import React from 'react'
import Container from '../../hooks/Container'
import './product-main.scss'
import { Scrollbar, FreeMode, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import useFetchData from "../../hooks/useFetchData";
import { Link } from 'react-router-dom'
import { GrFormNextLink } from 'react-icons/gr'

const ExtraProducts = () => {
    const [data, isLoader] = useFetchData(`/products/?categoryId=3&offset=10&limit=30`)

    return (
        <Container>
            <div style={{ marginBottom: '51px' }}>
                <div className='score_box'>
                    <h3>Extra 20% off for Presidents' Day</h3>
                    <Link to={`/category/3`}>
                        <p>See all</p>
                        <GrFormNextLink className='next_icon' />
                    </Link>
                </div>
                <Swiper
                    navigation={true}
                    slidesPerView={6}
                    spaceBetween={30}
                    freeMode={true}
                    modules={[Navigation, FreeMode, Scrollbar]}
                >
                    {data.map(product =>
                        <SwiperSlide key={product.id}>

                            <Link to={`/product/${product.id}`}>
                                <img width={150} height={152} className='product-row' src={product.images[0]} alt="product.title" />
                            </Link>

                            <h4 style={{
                                paddingRight: '5px',
                                marginLeft: '0 auto'
                            }}>{product.title}</h4>
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
        </Container>
    )
}

export default ExtraProducts