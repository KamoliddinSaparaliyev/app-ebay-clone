import React from 'react'
import './MainNavbar.scss'
import useFetchData from '../../hooks/useFetchData'
import Container from '../../hooks/Container'
import { FaHeart } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'
const MainNavbar = () => {
    const [data, isLoader] = useFetchData('/categories')
    return (
        <Container>
            <div className='main_navbar'>
                <ul className='navbar_list'>
                    <li className='navbar_item'>
                        <NavLink to='/' activeClassName='navbar_item-activelink' className='navbar_item-link'>Home</NavLink >
                    </li>
                    <li>
                        <Link to='/wishlist' className='navbar_item-link'>
                            <FaHeart className='saved_icon' />
                            Saved
                        </Link>
                    </li>
                    {
                        data.slice(0, 6).map(category =>
                            <li className='navbar_item' key={category.id}>
                                <Link className='navbar_item-link' to={`/category/${category.id}`}>
                                    {category.name}
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </div>
        </Container>
    )
}

export default MainNavbar