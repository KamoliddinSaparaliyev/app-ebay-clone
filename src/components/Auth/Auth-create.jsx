import React, { useState } from 'react'
import Logo from '../../assets/images/ebay-logo.svg'
import { Link, useHistory } from 'react-router-dom'
import './Auth.scss'
import { FcGoogle } from 'react-icons/fc'
import Svg from '../../assets/images/Vector.svg'
import instance from '../../api'
import { auth, provider } from './Config'
import { useDispatch } from 'react-redux'

const AuthSignUp = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const [fullName, setFullName] = useState({
        firstName: "",
        lastName: ""
    })
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjtvwlwzOSBslFOz2dk2sLygF7ws45e10HGg&usqp=CAU"

    })

    function cerateAccountWithGoogle() {
        auth.signInWithPopup(provider)
            .then(res => {
                console.log(res)
                if (res.additionalUserInfo.profile.name) {
                    dispatch({ name: res.additionalUserInfo.profile.name, type: "CREATE_USER" })
                    history.push('/')
                }
            })
            .catch(err => console.error(err))

    }
    function pushFirstName(e) {
        setFullName({
            ...fullName,
            firstName: e.target.value
        })
        setFormData({
            ...formData,
            name: `${fullName.firstName} ${fullName.lastName}`
        })
    }
    function pushLastName(e) {
        setFullName({
            ...fullName,
            lastName: e.target.value
        })
        setFormData({
            ...formData,
            name: `${fullName.firstName} ${fullName.lastName}`
        })
    }
    function createUser(e) {
        e.preventDefault()
        instance.post('/users/', formData)
            .then(res => {
                if (res.data.name) {
                    dispatch({ name: res.data.name, type: "CREATE_USER" })
                    history.push('/')
                }
            })
            .catch(err => console.log(err))


    }
    return (
        <>
            <div className='auth-container'>
                <div className='auth_header'>
                    <Link to='/'>
                        <img width={117} height={48} style={{ objectFit: 'cover' }} src={Logo} alt="ebay logo" />
                    </Link>
                    <div className=' auth_box'>
                        <p>Already a member? </p>
                        <Link to='/auth/login'>
                            Sign in
                        </Link>
                    </div>
                </div>
                <div>
                    <center>
                        <h3 className='auth_main-title'>Create an account</h3>
                    </center>
                    <div className='auth_wrapper'>
                        <form onSubmit={(e) => createUser(e)} className='auth_form'>
                            <div className='form-inner'>
                                <input onChange={(e) => pushFirstName(e)} required autoComplete='off' placeholder='First name' type="text" />
                                <input onChange={(e) => pushLastName(e)} required autoComplete='off' placeholder='Last name' type="text" />
                            </div>
                            <input onChange={(e) => setFormData({ ...formData, email: e.target.value })} required autoComplete='off' type="email" placeholder='Email' />
                            <input onChange={(e) => setFormData({ ...formData, password: e.target.value })} required type="password" placeholder='Password' />
                            <p className='auth_info'>By Creating an account, you agree to our User Agreement  and acknowledge reading our User Privacy Notice .</p>
                            <button className='create_btn'>Create account</button>
                            <small className='border-line'></small>

                        </form>
                        <small className='or'>or</small>
                        <div onClick={cerateAccountWithGoogle} className='google_box'>
                            <FcGoogle className='google_icon' />
                            <p>Continue with Google</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className='auth_footer'>
                <ul className='footer_last auth_list'>
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

        </>
    )
}

export default AuthSignUp