import React from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import SingleSwiper from './SingleSwiper'
import useFetchData from '../../hooks/useFetchData'
import { FiHeart } from 'react-icons/fi'
import { FaHeart } from 'react-icons/fa'
import { Scrollbar, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import './SingleProduct.scss'
import SingleFooter from './SingleFooter'
import { useDispatch, useSelector } from 'react-redux'
import { CgShoppingCart } from 'react-icons/cg'

const SingleProduct = () => {
    const productId = useParams()
    const dispatch = useDispatch()
    const basketData = useSelector(state => state.basket)
    const wishlistData = useSelector(state => state.like)
    const [data, isLoading] = useFetchData(`/products/${productId.id}`)
    const [productData, loading] = useFetchData(`/products/?categoryId=${data?.category?.id}&offset=0&limit=10 `)
    function addWishlist(product) {
        dispatch({ product, type: "ADD_TO_WISHLIST" })
    }
    function removeWishlist(product) {
        dispatch({ id: product.id, type: "REMOVE_TO_WISHLIST" })
    }
    const handleAddToBasket = (product) => {
        dispatch({
            type: "ADD_TO_BASKET",
            product
        });
    };
    return (
        <div className='product-container'>
            <div className='single-main'>
                <div className='single_wrapper'>
                    <p style={{
                        fontWeight: '700',
                        fontSize: '19px',
                        lineHeight: '23px',
                    }}>EXTRA $10 OFF 3+ ITEMS WITH CODE 10OFF2023TECH</p>
                    <SingleSwiper data={data.images} />
                </div>
                <div className='single-inner'>
                    <Link to={`/ category / ${data?.category?.id}`}>
                        See all eligble items and terms ➤
                    </Link>
                    <div className='single-info'>
                        <h3 className='single-title'>{data.title}</h3>
                        <div className='features_wrapper'>
                            <ul className='params_box'>
                                <li>
                                    <p>Condition:</p>
                                </li>
                                <li style={{ marginTop: '25px' }}>
                                    <p>Model:</p>
                                </li>
                                <li>
                                    <p>Carrier:</p>
                                </li>
                                <li>
                                    <p>Storage Capacity:</p>
                                </li>
                                <li>
                                    <p>Color:</p>
                                </li>
                                <li>
                                    <p>Cosmetic:</p>
                                </li>
                                <li>
                                    <p>Quantity:</p>

                                </li>

                            </ul>
                            <ul className='values_box'>
                                <li className='single_desc'>
                                    <div>
                                        <h6>Open box</h6>
                                        <p>"{data.description}"</p>
                                    </div>
                                </li>
                                <li>
                                    <p>Apple iPhone 11</p>
                                </li>
                                <li>
                                    <p>Apple iPhone 11</p>
                                </li>
                                <li>
                                    <p>Storage Capacity:</p>
                                </li>
                                <li>
                                    <p>Apple iPhone 11</p>
                                </li>
                                <li>
                                    <p>Heavy use</p>
                                </li>
                                <li className='product_number' style={{

                                }}>
                                    <input type="number" defaultValue={1} min={0} />
                                    <p>Last one / 86 sold</p>
                                </li>

                            </ul>

                        </div>
                        <ul className='prices_wrapper'>
                            <li >
                                <p>Price:</p>

                            </li>
                            <li className='single_price'>
                                <div>
                                    <h4 >US ${data.price}</h4>
                                </div>
                                <div className='btn-group'>
                                    <button className='now_btn'>Buy It Now</button>
                                    {basketData.basketProducts.find(p => p.id === data.id) ? <Link className='add-to-card-single' to='/basket' >
                                        View to Cart
                                    </Link> : <button className='add-to-card-single' onClick={() => handleAddToBasket(data)}>
                                        <CgShoppingCart className='shop_icon' />
                                        Add to Cart
                                    </button>}
                                    {wishlistData?.likedProducts?.find(p => p.id === data.id) ? <button onClick={() => removeWishlist(data)} className='like_btn'> <FaHeart className='like_svg' /> Watching</button>
                                        : <button onClick={() => addWishlist(data)} className='like_btn'> <FiHeart className='like_svg' /> Add to Watchlist</button>}
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className='single-swiper-box'>
                <h3 className='add_stuget'>Sponsored items customers also bought</h3>
                <Swiper
                    slidesPerView={5}
                    freeMode={true}
                    modules={[FreeMode, Scrollbar]}
                    scrollbar={{
                        hide: true,
                    }}

                >
                    {productData?.map(product =>
                        <SwiperSlide key={product.id}>
                            <div className='single__category-card'>
                                <Link className='single__category-title' onClick={() => window.location.pathname = (`/product/${product.id}`)} to={`/product/${product.id}`} >
                                    <img width={260} height={200} className='single__category-image' src={product.images[0]} alt={product.title} />
                                </Link>
                                <div style={{ marginBottom: '12px' }} className='single__category-box'>
                                    <h4 className='single__category-title'>{product.title}</h4>
                                    <small>New</small>
                                    <strong className='single__category-price'>
                                        ${product.price}
                                    </strong>
                                </div>
                            </div>
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
            <SingleFooter />
        </div >
    )
}
//SingleSwiper

export default SingleProduct