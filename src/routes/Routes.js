import React from 'react'
import Header from '../components/Header/Header'
import { Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Category from '../components/Category/Category'
import AuthSignUp from '../components/Auth/Auth-create'
import AuthLogin from '../components/Auth/Auth-login'
import Basket from '../components/Basket/Basket'
import SingleProduct from '../components/SingleProduct/SingleProduct'
import Search from '../pages/Search'
import Wishlist from '../components/Wishlist/Wishlist'

const Routes = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/category/:id'>
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
                <Route path='/product/:id'>
                    <SingleProduct />
                </Route>
                <Route path='/search/:text'>
                    <Search />
                </Route>
                <Route path='/wishlist'>
                    <Wishlist />
                </Route>
            </Switch>
        </div>
    )
}

export default Routes