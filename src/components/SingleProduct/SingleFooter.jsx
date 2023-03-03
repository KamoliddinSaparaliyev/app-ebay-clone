import React from 'react'
import Svg from '../../assets/images/Vector.svg'


const SingleFooter = () => {
    return (
        <div className='single-footer'>
            <ul className='single-footer-first'>
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
    )
}

export default SingleFooter