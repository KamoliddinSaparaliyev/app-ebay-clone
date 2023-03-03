import React from 'react'
import { Link } from 'react-router-dom'
import { GrFormNextLink } from 'react-icons/gr'
import Logo from '../../assets/images/div.png'
import Container from '../../hooks/Container'
import './Products.scss'
import useFetchData from '../../hooks/useFetchData'
import Img from '../../assets/images/images.png'



const ProductAd = () => {
    const [data, isLoading] = useFetchData('products')
    return (
        <Container>
            <div className='feature_section'>
                <div className='feature_wrapper'>
                    <p className='feature_muted'>Featured</p>
                    <img width={100} src={Logo} alt="Logo blue" />
                    <h5 className='feature_title'>Deals made easy all year long.</h5>
                    <p className='feature_info'>Free shipping. Best prices</p>
                    <Link to='/category/1' className='feature_wrapper-link'>
                        <p style={{ marginRight: '5px' }}>Get your thing</p>
                        <p style={{
                            fontSize: '24px',
                            marginTop: '5px'
                        }}> ➔</p>
                    </Link>
                </div>
                <div className='product_ad'>
                    {
                        data.slice(0, 3).map(product =>
                            <img key={product.id} width={160} height={248} style={{ objectFit: 'cover' }} src={product.images[0]} alt={product.title} />
                        )
                    }
                </div>
                <img width={300} style={{
                    marginLeft: 'auto',
                    objectFit: 'cover'
                }} src={Img} height={248} alt="" />
            </div>
        </Container>
    )
}

export default ProductAd