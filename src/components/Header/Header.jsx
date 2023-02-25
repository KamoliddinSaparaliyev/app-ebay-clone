import React from 'react'
import { Link } from 'react-router-dom'
import LOGO from '../../assets/images/ebay-logo.png'
import Container from '../../hooks/Container'
import { MdNotificationsNone } from 'react-icons/md'
import { CgShoppingCart } from 'react-icons/cg'
import './Header.scss'
{/* <li>

  
</li> */}

const Header = () => {
    return (
        <header className='header'>
            <Container>
                <div className='header_one'>
                    <ul className='hero_header'>
                        <li>
                            Hi!
                            <Link className='hero_header-link' to='/auth/login'>Sign in</Link>
                            or
                            <Link className='hero_header-link' to='/auth/create'>Registr</Link>
                        </li>
                        <li>
                            <a href='https://www.ebay.com/globaldeals'>Daily Deals</a>
                        </li>
                        <li>
                            <a href='https://www.ebay.com'>Brand Outlet</a>
                        </li>
                        <li>
                            <a href='https://ocsnext.ebay.com/ocs/home'>Help & Contact</a>
                        </li>
                    </ul>
                    <ul className='hero_header-last'>
                        <li>
                            <a href='https://www.ebay.com/sl/sell' to='/auth/login' >Sell</a>
                        </li>
                        <li>
                            <a href='#' to='/auth/create'>Watchlist</a>
                        </li>
                        <li>
                            <a href='#' to='/auth/create'>My eBay</a>
                        </li>
                        <li>
                            <a to='/auth/create'><MdNotificationsNone /></a>
                        </li>
                        <li>
                            <Link to='/basket'><CgShoppingCart /></Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                            <Link to='/'>
                                <img src={LOGO} alt='Ebay logo' />
                            </Link>
                        </li>
                    </ul>
                </div>
                <hr />

            </Container>
        </header>
    )
}

export default Header