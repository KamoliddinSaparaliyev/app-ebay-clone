import React, { useEffect, useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import Container from '../../hooks/Container'
import { FiHeart } from 'react-icons/fi'
import { CgShoppingCart } from 'react-icons/cg'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsChevronDown } from 'react-icons/bs'
import instance from '../../api/index'
import './Header.scss'
import inastance from '../../api/index'
import { useSelector } from 'react-redux'


const Header = () => {
    const cretedUserData = useSelector(state => state)
    const location = useLocation()
    const [suggetionData, setSuggetionData] = useState([])
    const [value, setValue] = useState('')
    const [userName, setUserName] = useState('')
    const token = localStorage.getItem('token')
    const wishlist = useSelector(state => state.like)
    const basketlist = useSelector(state => state.basket)
    console.log()
    useEffect(() => {
        if (token) {
            instance.get('/auth/profile', {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }).then(res => setUserName(res.data.name))
                .catch(err => console.log(err))
        }
    }, [token])

    function suggetionSearch(e) {
        setValue(e.target.value)
        instance.get(`/products/?title=${value}&offset=0&limit=10`)
            .then(res => setSuggetionData(res.data))
            .catch(err => console.log(err))
    }
    function searchProducts(e) {
        e.preventDefault()
        window.location.pathname = `/search/${value}`
    }
    return (
        location.pathname.includes('/auth') ? <></> : <header className='header'>
            <div style={{
                maxWidth: location.pathname.includes('/product') ? '1500px' : '1240px',
                margin: '0 auto'
            }}>
                <div className='header_box'>
                    <div className='header_one'>
                        <ul className='hero_header'>
                            {userName || cretedUserData.login.name?.name ? <li>Hi! <strong style={{ fontWeight: '700' }}>{userName || cretedUserData.login.name?.name}</strong></li> : <li>
                                Hi!
                                <Link className='hero_header-link' to='/auth/login'>Sign in</Link>
                                or
                                <Link className='hero_header-link' to='/auth/create'>Registr</Link>
                            </li>}
                            <li >
                                <a className='default-link' href='https://www.ebay.com/globaldeals'>Daily Deals</a>
                            </li>
                            <li>
                                <a className='default-link' href='https://www.ebay.com'>Brand Outlet</a>
                            </li>
                            <li>
                                <a className='default-link' href='https://ocsnext.ebay.com/ocs/home'>Help & Contact</a>
                            </li>
                        </ul>
                        <ul className='hero_header-last'>
                            <li>
                                <a className='' to='/auth/create'>SHip to</a>
                            </li>
                            <li>
                                <a href='https://www.ebay.com/sl/sell' to='/auth/login' >Sell</a>
                            </li>
                            <li>
                                <a href='#' to='/auth/create'>Watchlist</a>
                            </li>
                            <li>
                                <a href='#' to='/auth/create'>My eBay</a>
                            </li>
                            <li className='wishlist-item'>
                                <Link to='/wishlist' className='heart_icon' ><FiHeart />
                                    {wishlist.likedProducts.length > 0 ? < div className='wishlist-number'>
                                        <p>{wishlist.likedProducts.length}</p>
                                    </div> : <></>}
                                </Link>
                            </li>
                            <li className='basket-item'>
                                <Link className='header_icons' to='/basket'><CgShoppingCart />
                                    {basketlist.basketProducts.length > 0 ? < div className='basket-number'>
                                        <p>{basketlist.basketProducts.length}</p>
                                    </div> : <></>}</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className='header_main'>
                            <li>
                                <Link to='/'>
                                    <img className='ebay_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/2560px-EBay_logo.svg.png' alt='Ebay logo' />
                                </Link>
                            </li>
                            <li className='category_select'>
                                <p>Shop By Category</p>
                                <BsChevronDown />
                            </li>
                            <li className='main_list'>
                                <form onSubmit={(e) => searchProducts(e)} className='header_form'>
                                    <div className='form_box'>
                                        <label htmlFor="search">
                                            <AiOutlineSearch className='search_icon' />
                                        </label>
                                        <input onChange={(e) => suggetionSearch(e)} placeholder='Search for anything' id='search' className='header_input' type="text" />
                                        {value && suggetionData.length > 0 ? < div className='suggetion-box'>
                                            {suggetionData?.map(p =>
                                                <Link key={p.id} to={`/product/${p.id}`}>
                                                    <h2> {p.title}</h2>
                                                </Link>
                                            )}
                                        </div> : <></>}
                                        <div className='form_categories'>
                                            <p className='form_title'>All Catigories</p>
                                            <BsChevronDown />
                                        </div>
                                    </div>
                                    <button className='search_btn'>Search</button>
                                </form>
                            </li>
                            <li>
                                <p className='header_last-title'>Advenced</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header >
    )
}

export default Header