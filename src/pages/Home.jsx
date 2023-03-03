import React from 'react'
import SwipSection from '../components/Hero-section/SwipSection'
import HomeFooter from '../components/HomeFooter/HomeFooter'
import MainNavbar from '../components/Main-navbar/MainNavbar'
import ExtraProducts from '../components/ProductMain/Extraproducts'
import ProductFooter from '../components/ProductMain/ProductFooter'
import ProductMain from '../components/ProductMain/ProductMain'
import ProductAd from '../components/Products/ProductAd'
import Products from '../components/Products/Products'
import useFetchData from '../hooks/useFetchData'
import Loader from '../hooks/loader/Loader'

const Home = () => {
    const [data, isLoading] = useFetchData('/products')
    return (!isLoading ?
        <div>
            <MainNavbar />
            <SwipSection />
            <Products />
            <ProductMain />
            <ExtraProducts />
            <ProductAd />
            <ProductFooter />
            <HomeFooter />

        </div> : <Loader />
    )
}

export default Home