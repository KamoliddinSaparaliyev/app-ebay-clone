import React from 'react'
import './Category.scss'
import Event from '../../assets/images/category.png'
import { useParams } from 'react-router-dom'
import useFetchData from '../../hooks/useFetchData'
import { Link, useHistory } from 'react-router-dom'
import { FiHeart } from 'react-icons/fi'
import { FaHeart } from 'react-icons/fa'
import { Scrollbar, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch, useSelector } from 'react-redux'


const Category = () => {
    const categoryId = useParams()
    const wishlistData = useSelector(state => state.like)
    const dispatch = useDispatch()
    const [data, isLoading] = useFetchData(`/products/?categoryId=${categoryId.id}&offset=0&limit=20`)
    const [categoryData, loading] = useFetchData(`/categories`)

    function addWishlist(product) {
        dispatch({ product, type: "ADD_TO_WISHLIST" })
    }
    function removeWishlist(product) {
        dispatch({ id: product.id, type: "REMOVE_TO_WISHLIST" })


    }

    console.log(categoryData);
    return (
        <div>
            <div className='category-container'>
                <div className='feature-section'>
                    <h4 className='feature-title'>Featured Event</h4>
                    <img src={Event} alt="img" />
                    <p className='feature-desc'>Up to 60% off Apple tech</p>
                    <p className='feature-desc-last'> Save on AirPods, iPhones, and more.</p>
                </div>
                <div>
                    <h4 className='feature-title'>Shop by Category</h4>
                    <Swiper
                        slidesPerView={4}
                        freeMode={true}
                        modules={[FreeMode, Scrollbar]}
                        scrollbar={{
                            hide: true,
                        }}
                    >
                        {categoryData?.map(category =>
                            <SwiperSlide key={category.id}>
                                <div className='single__category-card'>
                                    <Link className='single__category-title' onClick={() => window.location.pathname = (`/category/${category.id}`)} to={`/category/${category.id}`} >
                                        <img width={200} height={160} className='single__category-image' src={category.image} alt={category.title} />
                                    </Link>
                                    <div style={{ marginBottom: '12px' }} className='single__category-box'>
                                        <h4 className='single__category-title'>{category.name}</h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )}
                    </Swiper>

                </div>
                <div className='category-products-wrapper'>
                    {
                        data.map(product =>
                            <div className='category-products'>
                                <img width={241} height={241} src={product.images[0]} alt={product.title} />
                                <div className='category-products-info'>
                                    <h4>{product.title}</h4>
                                    <p>{product.description}</p>
                                    <div className='category-wrapper'>
                                        <strong>${product.price}</strong>
                                        <div className='category-iconns'>
                                            {wishlistData?.likedProducts?.find(p => p.id === product.id) ? <FaHeart onClick={() => removeWishlist(product)} className='heart_icon active-style' /> : < FiHeart onClick={() => addWishlist(product)} className='heart_icon' />}
                                        </div>
                                    </div>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Category