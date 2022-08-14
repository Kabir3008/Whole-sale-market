// import React, { useEffect } from 'react'
import React, { Fragment, useState, useEffect } from 'react'
import Pagination from 'react-js-pagination'
import MetaData from './layout/MetaData'

import { useDispatch, useSelector } from 'react-redux'

import { getProducts } from '../actions/productActions'
import Product from './product/Product'
import Loader from './layout/Loader'
import { useAlert } from 'react-alert'
import { useParams } from "react-router-dom";

const Home = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const alert = useAlert();
    const dispatch = useDispatch();
    const { loading, products, error, productCount, resPerPage } = useSelector(state => state.products)
    const { keyword } = useParams();

    useEffect(() => {

        if (error) {
            // alert.success('Success')
            return alert.error(error)
        }
        dispatch(getProducts(keyword, currentPage));
    }, [dispatch, alert, error, keyword, currentPage])


    function setCurrentPageNo(pageNumber) {
        setCurrentPage(pageNumber)
    }


    return (
        < Fragment >

            {loading ? <Loader /> : (
                <Fragment>
                    <MetaData title={'Buy Best Products Online'} />
                    <h1 id="products_heading">Latest Products</h1>
                    <section id="products" className="container mt-5">
                        <div className="row">
                            {products && products.map(product => (
                                <Product key={product._id} product={product} />
                            ))}

                        </div>
                    </section >

                    {resPerPage <= productCount && (
                        <div className="d-flex justify-content-center mt-5">
                            <Pagination
                                activePage={currentPage}
                                itemsCountPerPage={resPerPage}
                                totalItemsCount={productCount}
                                onChange={setCurrentPageNo}
                                nextPageText={'Next'}
                                prevPageText={'Prev'}
                                firstPageText={'First'}
                                lastPageText={'Last'}
                                itemClass="page-item"
                                linkClass="page-link"
                            />
                        </div>
                    )}
                </Fragment>
            )}


        </Fragment >
    )
}

export default Home
