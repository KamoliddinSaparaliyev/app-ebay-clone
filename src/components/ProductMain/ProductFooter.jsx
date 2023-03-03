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

const ProductFooter = () => {
    const [data, isLoader] = useFetchData(`/products/?categoryId=1&offset=0&limit=30`)


    return (
        <Container>
            <div style={{
                marginBottom: '51px',
                marginTop: '64px'
            }}>
                <div className='score_box'>
                    <h3>Today's Deals - All With Free Shipping</h3>
                    <Link to={`/category/1`}>
                        <p>See all</p>
                        <GrFormNextLink className='next_icon' />
                    </Link>
                </div>
                <Swiper
                    slidesPerView={5}
                    freeMode={true}
                    modules={[FreeMode, Scrollbar]}
                    scrollbar={{
                        hide: true,
                    }}
                >
                    {data.map(product =>
                        <SwiperSlide key={product.id}>

                            <div className='product_inner-box'>
                                <Link className='product_inner' to={`/product/${product.id}`} >
                                    <img width={208} height={208} className='product_image' src={product.images[0]} alt={product.title} />
                                </Link>
                                <strong className='product_price'>
                                    ${product.price}
                                </strong>
                                <div style={{ marginBottom: '12px' }} className='product_prices'>
                                    <p className='product_price-muted'>
                                        ${product.price + 30}
                                    </p>
                                    <p className='product_price-prosent'>
                                        ·- {
                                            100 - Math.round((100 * (product.price - 30)) / product.price)
                                        }% OFF
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
        </Container>


    )
}

export default ProductFooter