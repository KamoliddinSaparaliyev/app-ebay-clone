import React from 'react'
import Logo from '../../assets/images/ebay-logo.svg'
import { Link, useHistory } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import Svg from '../../assets/images/Vector.svg'
import instance from '../../api'
import { auth, provider } from './Config'
import { useDispatch } from 'react-redux'




const AuthLogin = () => {
    const history = useHistory()
    const dispatch = useDispatch()


    function loginUser(e) {
        e.preventDefault()
        instance.post('/auth/login/', {
            "email": `${e.target[0].value}`,
            "password": `${e.target[1].value}`
        })
            .then(res => {
                if (res.data.access_token) {
                    localStorage.setItem('token', res.data.access_token);
                    history.push('/')
                }
            })
            .catch(err => console.error(err))
    }
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

    return (
        <div className='auth-container'>
            <div className='auth_login'>
                <img src={Logo} alt="ebay logo" />
                <a href="https://www.ebay.com">Tell us what you think</a>
            </div>
            <div>
                <center>
                    <h4 className='hello_title'>Hello</h4>
                    <p>Sign in to eBay or <Link to='/auth/create'>create an account</Link></p>
                </center>
                <div className='login_box'>
                    <div>
                        <form onSubmit={(e) => loginUser(e)} className='auth_form login_form'>
                            <input defaultValue={"john@mail.com"} required type="text" placeholder='Email or username' />
                            <input defaultValue={"changeme"} required type="password" placeholder='Password' />
                            <button className='create_btn'> Continue</button>
                            <div className='or_line'>
                                <hr />
                                <p>or</p>
                                <hr />
                            </div>
                        </form>
                        <div onClick={cerateAccountWithGoogle} className='google_custom google_box'>
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
        </div >
    )
}

export default AuthLogin