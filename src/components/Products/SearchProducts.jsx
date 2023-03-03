import React from 'react'
import { FiHeart } from 'react-icons/fi'
import { FaHeart } from 'react-icons/fa'
import './Products.scss'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { CgShoppingCart } from 'react-icons/cg'

const SearchProducts = ({ data }) => {
    const wishlistData = useSelector(state => state.like)
    const basketData = useSelector(state => state.basket)
    const dispatch = useDispatch()
    function addToBasket(product) {
        dispatch({ product, type: "ADD_TO_BASKET" })
    }

    function addWishlist(product) {
        dispatch({ product, type: "ADD_TO_WISHLIST" })
    }
    function removeWishlist(product) {
        dispatch({ id: product.id, type: "REMOVE_TO_WISHLIST" })


    }
    return (
        <div className='search-wrapper'>
            {
                data.map(product =>
                    <div key={product.id} className='search_product'>
                        <div className='search_product-box'>
                            <Link to={`/product/${product.id}`}>
                                <img className='search_product-img' src={product?.images[0]} alt={product.title} />
                            </Link>
                            <div className='search_iconns'>
                                {wishlistData?.likedProducts?.find(p => p.id === product.id) ? <FaHeart onClick={() => removeWishlist(product)} className='heart_icon active-style' /> : < FiHeart onClick={() => addWishlist(product)} className='heart_icon' />}
                            </div>
                        </div>
                        <div className='search_product-inner'>
                            <h3 className='search_product-title'>{product.title}</h3>
                            <p className='search_product-desc'>{product.description}</p>
                            <div className='search_product-price'>
                                <strong >${product.price}</strong>
                                {basketData.basketProducts?.find(p => p.id === product.id) ? <Link className='add-to-card' to='/basket' >
                                    View to Cart
                                </Link> : <button className='add-to-card' onClick={() => addToBasket(product)}>
                                    <CgShoppingCart className='shop_icon' />
                                    Add to Cart
                                </button>}
                            </div>
                        </div>
                    </div>
                )
            }
        </div >
    )
}

export default SearchProducts