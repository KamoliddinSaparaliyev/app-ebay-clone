import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Container from '../../hooks/Container'
import { FaTrash } from 'react-icons/fa'

import './Basket.scss'

const Basket = () => {
    const dispatch = useDispatch()
    const basketData = useSelector(state => state.basket);
    const wishlistData = useSelector(state => state.like);
    console.log(basketData);

    const handleRemoveFromBasket = (product) => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: product.id
        });
    };
    const handleClearBasket = () => {
        dispatch({
            type: "CLEAR_BASKET"
        });
    };
    function addToWishlist(product) {
        dispatch({ product, type: "ADD_TO_WISHLIST" })
    }
    const totalPrice = basketData.basketProducts.reduce((accumulator, product) => {
        return accumulator + product.price;
    }, 0);
    return (
        <div>
            <Container>
                <div className="cart-bucket-lineitem">
                    {totalPrice === 0 ? <></> : <div>
                        <strong>Total price: ${totalPrice}</strong>
                        <button className='romove_all-btn' onClick={handleClearBasket}>Remove All</button>
                    </div>}
                    {
                        basketData.basketProducts.map(product =>
                            <div key={product.id} className="listsummary-content">
                                <div className="list-group">
                                    <div>
                                        <div className='image-display'>
                                            <img src={product.images[0]} alt={product.title} />
                                        </div>
                                    </div>
                                    <div className='title-text'>
                                        <Link className='title-link' to={`/product/${product.id}`}>
                                            {product.title}
                                        </Link>

                                    </div>
                                    <div className='basket-product-current'>
                                        {wishlistData.likedProducts.find(p => p.id === product.id) ? <Link to='/wishlist' className='card_btn'>Liked</Link> : < button onClick={() => addToWishlist(product)} className='card_btn'>
                                            Like
                                        </button>}
                                    </div>
                                    <div>
                                        <strong className='basket-product-price'>US ${product.price}</strong>
                                        <button onClick={() => handleRemoveFromBasket(product)} className='trash_btn'>
                                            <FaTrash className='trash-icon' />
                                        </button>
                                    </div>
                                </div>
                            </div>)
                    }
                </div>
                <ul className='single-footer-first basket-footer'>
                    <li><a href="https://www.ebay.com">About eBay</a></li>
                    <li><a href="https://www.ebay.com">Announcements</a></li>
                    <li><a href="https://www.ebay.com">Community</a></li>
                    <li><a href="https://www.ebay.com">Security Center</a></li>
                    <li><a href="https://www.ebay.com">Seller Center</a></li>
                    <li><a href="https://www.ebay.com">Policies</a></li>
                    <li><a href="https://www.ebay.com">Affiliates</a></li>
                    <li><a href="https://www.ebay.com">Help & Contact</a></li>
                    <li><a href="https://www.ebay.com">Site Map</a></li>
                </ul>
            </Container>
        </div>
    )
}

export default Basket