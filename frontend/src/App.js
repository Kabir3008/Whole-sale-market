import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/Home";
import ProductDetails from './components/product/ProductDetails';
import Cart from './components/cart/Cart';
import Shipping from './components/cart/Shipping';
import ConfirmOrder from './components/cart/ConfirmOrder';
import Login from './components/user/Login';
// import { isAuthenticated }
import { Navigate } from 'react-router-dom';
import Payment from './components/cart/Payment';
import { useSelector } from 'react-redux';

function App() {

    const { isAuthenticated, user, loading } = useSelector(state => state.auth)
    return (
        <Router>
            <div className="App">
                <Header />
                <div className="container container-fluid">
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="search/:keyword" element={<Home />} />
                        <Route exact path="/product/:id" element={<ProductDetails />} />

                        <Route path="login" element={<Login />} />


                        <Route exact path="/cart" element={<Cart />} />

                        <Route path="/shipping" element={isAuthenticated ? (<Shipping />) : (<Navigate replace to="/login" />)} />
                        <Route path="/order/confirm" element={isAuthenticated ? (<ConfirmOrder />) : (<Navigate replace to="/login" />)} />
                        <Route path="/payment" element={isAuthenticated ? (<Payment />) : (<Navigate replace to="/login" />)} />

                    </Routes>
                </div>


                <Footer />

            </div>
        </Router >
    )
}

export default App;