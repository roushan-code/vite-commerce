import React, { Fragment, useEffect, useState } from 'react';
import "./Home.css";
import { CgMouse } from "react-icons/cg";
import MetaData from "../layout/Metadata";
import { clearErrors, getProduct } from "../../actions/productAction.jsx";
import { useSelector, useDispatch } from "react-redux";
import Loader from '../layout/Loader/loader.jsx';
import { toast } from 'react-toastify';
import ProductCard from './ProductCard.jsx';



const Home = () => {
    
    const dispatch = useDispatch();
    const { loading, error, products } = useSelector((state) => state.products);
    
    
    useEffect(() => {
        if(error){
            toast.error(error);
            dispatch(clearErrors())
        }
        dispatch(getProduct())
    }, [dispatch, error]);
   



    return (
        <Fragment>
            { loading ? (<Loader/>) : (<Fragment>
            <MetaData title="ECOMMERCE" />
            <div className="banner">
                <p>Welcome to Ecommerce</p>
                <h1>FIND AMAZING PRODUCTS</h1>

                <a href="#container">
                    <button>
                        Scroll <CgMouse />
                    </button>
                </a>
            </div>

            <h2 className="homeHeading">Featured Products</h2>
            
            <div className="container" id='container'>
                {products && products.map(product => (
                    <ProductCard product={product} key={product._id}/>
                ))}
            </div>
            
        </Fragment>)}
        </Fragment>
        );
};

export default Home