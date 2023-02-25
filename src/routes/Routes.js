import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Category from '../pages/Category'
import AuthSignUp from '../pages/Auth-sign-up'
import AuthLogin from '../pages/Auth-login'
import Basket from '../pages/Basket'

const Routes = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/category'>
                    <Category />
                </Route>
                <Route path='/auth/login'>
                    <AuthLogin />
                </Route>
                <Route path='/auth/create'>
                    <AuthSignUp />
                </Route>
                <Route path='/basket'>
                    <Basket />
                </Route>
            </Switch>
            {/* <Footer /> */}
        </>
    )
}

export default Routes