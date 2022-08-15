import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import Search from './Search'
import '../../App.css'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {

    const { cartItems } = useSelector(state => state.cart);

    return (
        <Fragment>
            <nav className="navbar row">
                <div className="col-12 col-md-3">
                    <div className="navbar-brand">
                        <img src="/images/Logo.png" />
                    </div>
                </div>

                <div className="col-12 col-md-6 mt-2 mt-md-0">
                    <Search />
                </div>

                <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
                    <button className="btn" id="login_btn">Login</button>
                    <Link to="/cart" style={{ textDecoration: 'none' }}>
                        <span id="cart" className="ml-3">Cart</span>
                        <span className="ml-1" id="cart_count">{cartItems.length}</span>
                    </Link>
                    {/* <span id="cart" className="ml-3">Cart</span>
                    <span className="ml-1" id="cart_count">2</span> */}
                </div>
            </nav>
        </Fragment>
    )
}

export default Header
