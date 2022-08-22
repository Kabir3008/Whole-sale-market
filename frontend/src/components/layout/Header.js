//heading e kon kon information dicchi


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
            {/* logo image add */}
            {/* A navigation bar helps readers in selecting topics, links or sub-topics of their interest. */}
            <nav className="navbar row">
                <div className="col-12 col-md-3">
                    <div className="navbar-brand">
                        <img src="/images/Logo.png" />
                    </div>
                </div>
                {/* takes to search related things */}
                <div className="col-12 col-md-6 mt-2 mt-md-0">
                    <Search />
                </div>

                <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
                    {/* login er link e niye jabe */}
                    <Link to="/login" className="btn ml-4" id="login_btn">Login</Link>
                    {/* cart er link */}
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
