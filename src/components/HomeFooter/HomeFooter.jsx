import React from 'react'
import './HomeFooter.scss'
import Container from '../../hooks/Container'
import { AiFillTwitterSquare, AiFillFacebook } from 'react-icons/ai'
import Svg from '../../assets/images/Vector.svg'

const HomeFooter = () => {
    return (
        <div className='home_footer'>
            <Container>
                <div className='home-footer'>
                    <ul className='footer_list'>
                        <li >
                            <a href="#2" className='footer_main-title' >Buy</a>
                            <a href="#2">Registration</a>
                            <a href="#2">eBay Money Back Guarantee</a>
                            <a href="#2">Bidding & buying help</a>
                            <a href="#2">Stores</a>
                            <a href="#2">eBay for Charity</a>
                            <a href="#2">Charity Shop</a>
                            <a href="#2">Seasonal Sales and events</a>
                        </li>
                        <li>
                            <a className='footer_main-title' href="#2">Sell</a>
                            <a href="#2">Start selling</a>
                            <a href="#2">How to sell</a>
                            <a href="#2">Business sellers</a>
                            <a href="#2">Affiliates</a>
                            <a className='footer_main-title' href="#2">Tools & apps</a>
                            <a href="#2">Developers</a>
                            <a href="#2">Security center</a>
                            <a href="#2">Site map</a>
                        </li>
                        <li>
                            <a className='footer_main-title' href="#2">Stay connected</a>
                            <a className='brands_box' href="#2"><AiFillFacebook className='brands_icon' /> <p>Facebook</p></a>
                            <a className='brands_box' href="#2"><AiFillTwitterSquare className='brands_icon' /> <p>Twitter</p></a>
                        </li>
                        <li>
                            <a className='footer_main-title' href="#2">About eBay</a>
                            <a href="#2">News</a>
                            <a href="#2">Investors</a>
                            <a href="#2">Careers</a>
                            <a href="#2">Diversity & Inclusion</a>
                            <a href="#2">Global Impact</a>
                            <a href="#2">Government relations</a>
                            <a href="#2">Advertise with us</a>
                            <a href="#2">Policies</a>
                            <a href="#2">Verified Rights Owner (VeRO) Program</a>
                            <a href="#2">eCI Licenses</a>
                        </li>
                        <li>
                            <a className='footer_main-title' href="#2">Help & Contact</a>
                            <a href="#2">Seller Center</a>
                            <a href="#2">Contact Us</a>
                            <a href="#2">eBay Returns</a>
                            <a className='footer_main-title' href="#2">Community</a>
                            <a href="#2">Announcements</a>
                            <a href="#2">eBay Community</a>
                            <a href="#2">eBay for Business Podcast</a>
                            <a className='footer_main-title' href="#2">eBay Sites</a>

                        </li>
                    </ul>
                    <ul className='footer_last'>
                        <li>
                            Copyright © 1995-2023 eBay Inc. All Rights Reserved.
                        </li>
                        <li>
                            <a href="">Accessibility</a>
                        </li>
                        <li>
                            <a href="">User Agreement</a>
                        </li>
                        <li>
                            <a href="">Privacy</a>
                        </li>
                        <li>
                            <a href="">Payments Terms of Use</a>
                        </li>
                        <li>
                            <a href="">Cookies</a>
                        </li>
                        <li>
                            <a href="">Your Privacy Choices</a>
                        </li>
                        <li>and</li>
                        <li>
                            <a href="">AdChoice</a>
                        </li>
                        <li>
                            <img src={Svg} alt="" />
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
    )
}

export default HomeFooter