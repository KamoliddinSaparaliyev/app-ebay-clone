import React from 'react'
import { Link } from 'react-router-dom'
import './Products.scss'
import { Scrollbar, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import { Swiper, SwiperSlide, Pagination } from "swiper/react";
import Container from '../../hooks/Container';
import useFetchData from "../../hooks/useFetchData";


const Products = () => {
    const [data, isLoader] = useFetchData('/products/?categoryId=2&offset=10&limit=30')
    return (
        <Container>
            <div className='products-wrapper'>
                <div className='product_info-box'>
                    <h2 className='product_info-title'>Up to 60% off home must-haves</h2>
                    <p className='product_info-desc'>Shop mattresses, toppers, and more.</p>
                    <Link to='/category/2' className='product_info-btn'>
                        <p style={{ width: '200px' }} >Shop Now</p>
                        <p style={{
                            fontSize: '24px'
                        }}> ➔</p>
                    </Link>
                </div>
                <Swiper scrollbar={{
                    hide: true,
                }}
                    slidesPerView={4}
                    freeMode={true}
                    modules={[FreeMode, Scrollbar]}
                    className='mySwiper-1'
                >

                    {data.map(product =>
                        <SwiperSlide className='product_swiper' key={product.id}>
                            <div className='product_inner-box'>
                                <Link className='product_inner' to={`/product/${product.id}`} >
                                    <img width={208} height={208} className='product_image' src={product.images[0]} alt={product.title} />
                                </Link>
                                <strong className='product_price'>
                                    ${product.price}
                                </strong>
                                <div className='product_prices'>
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

export default Products