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
import { loadUser } from './actions/userActions';
import store from './store'


function App() {

    // TODO: add loading for the footer
    // const { isAuthenticated, user, loading } = useSelector(state => state.auth)

    // const [stripeApiKey, setStripeApiKey] = useState('');

    useEffect(() => {
        store.dispatch(loadUser())

        // async function getStripeApiKey() {
        //     const { data } = await axios.get('/api/v1/stripeapi');
        //     setStripeApiKey(data.stripeApiKey);
        // }

        // getStripeApiKey();
    }, [])

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

                        <Route path="/shipping" element={<Shipping />} />

                        <Route path="/order/confirm" element={<ConfirmOrder />} />

                    </Routes>
                </div>


                <Footer />

            </div>
        </Router >
    )
}

export default App;