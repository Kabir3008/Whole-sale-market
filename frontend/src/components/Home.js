// import React, { useEffect } from 'react'
import React, { Fragment, useEffect } from 'react'
import MetaData from './layout/MetaData'

import { useDispatch, useSelector } from 'react-redux'

import { getProducts } from '../actions/productActions'
// import product from './product/product'
// 
const Home = () => {
    const dispatch = useDispatch();
    // const { loading, products, error, productsCount } = useSelector(state => state.products)

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])
    return (

        <Fragment>
            <MetaData title={'Buy Best Products Online'} />
            <h1 id="products_heading">Latest Products</h1>
            <section id="products" className="container mt-5">
                <div className="row">
                    {/* {products && products.map(product => (
                        < div className="col-sm-12 col-md-6 col-lg-3 my-3" >
                            <div className="card p-3 rounded">
                                <img
                                    className="card-img-top mx-auto"
                                    src="https://m.media-amazon.com/images/I/617NtexaW2L._AC_UY218_.jpg"
                                />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">
                                        <a href="">128GB SSD</a>
                                    </h5>
                                    <div className="ratings mt-auto">
                                        <div className="rating-outer">
                                            <div className="rating-inner"></div>
                                        </div>
                                        <span id="no_of_reviews">(5 Reviews)</span>
                                    </div>
                                    <p className="card-text">$45.67</p>
                                    <a href="#" id="view_btn" className="btn btn-block">View Details</a>
                                </div>
                            </div>
                        </div>
                    ))} */}

                    < div className="col-sm-12 col-md-6 col-lg-3 my-3" >
                        <div className="card p-3 rounded">
                            <img
                                className="card-img-top mx-auto"
                                src="/images/Bag.jpg"
                            />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">
                                    <a href="">Premiem leather Bag</a>
                                </h5>
                                <div className="ratings mt-auto">
                                    <div className="rating-outer">
                                        <div className="rating-inner"></div>
                                    </div>
                                    <span id="no_of_reviews">(89 Reviews)</span>
                                </div>
                                <p className="card-text">$45.67</p>
                                <a href="#" id="view_btn" className="btn btn-block">View Details</a>
                            </div>
                        </div>
                    </div>

                    < div className="col-sm-12 col-md-6 col-lg-3 my-3" >
                        <div className="card p-3 rounded">
                            <img
                                className="card-img-top mx-auto"
                                src="/images/Shoes.jpg"
                            />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">
                                    <a href="">Nike Shoe</a>
                                </h5>
                                <div className="ratings mt-auto">
                                    <div className="rating-outer">
                                        <div className="rating-inner"></div>
                                    </div>
                                    <span id="no_of_reviews">(187 Reviews)</span>
                                </div>
                                <p className="card-text">$30.67</p>
                                <a href="#" id="view_btn" className="btn btn-block">View Details</a>
                            </div>
                        </div>
                    </div>

                    < div className="col-sm-12 col-md-6 col-lg-3 my-3" >
                        <div className="card p-3 rounded">
                            <img
                                className="card-img-top mx-auto"
                                src="/images/Headphone.jpg"
                            />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">
                                    <a href="">Bose QuietComfort Wireless Headphone</a>
                                </h5>
                                <div className="ratings mt-auto">
                                    <div className="rating-outer">
                                        <div className="rating-inner"></div>
                                    </div>
                                    <span id="no_of_reviews">(112 Reviews)</span>
                                </div>
                                <p className="card-text">$299</p>
                                <a href="#" id="view_btn" className="btn btn-block">View Details</a>
                            </div>
                        </div>
                    </div>

                    < div className="col-sm-12 col-md-6 col-lg-3 my-3" >
                        <div className="card p-3 rounded">
                            <img
                                className="card-img-top mx-auto"
                                src="/images/Airpod.jpg"
                            />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">
                                    <a href="">Apple Airpods with Charging Case</a>
                                </h5>
                                <div className="ratings mt-auto">
                                    <div className="rating-outer">
                                        <div className="rating-inner"></div>
                                    </div>
                                    <span id="no_of_reviews">(2671 Reviews)</span>
                                </div>
                                <p className="card-text">$126.99</p>
                                <a href="#" id="view_btn" className="btn btn-block">View Details</a>
                            </div>
                        </div>
                    </div>




                </div>
            </section >

        </Fragment>
    )
}

export default Home
