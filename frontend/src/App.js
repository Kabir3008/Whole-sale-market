// import './App.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/Home";
import ProductDetails from './components/product/ProductDetails';
import Cart from './components/cart/Cart';
import Login from './components/user/Login';


function App() {
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

                    </Routes>
                </div>


                <Footer />

            </div>
        </Router >
    )
}

export default App;