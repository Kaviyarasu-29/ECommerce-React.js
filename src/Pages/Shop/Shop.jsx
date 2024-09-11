import React, { useState } from 'react'
import CarouselFile from '../../Components/Carousel/Carousel.jsx'


// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Men from '../../Assets/Image/Filter-icon/Men.webp'
import Women from '../../Assets/Image/Filter-icon/Women.webp'
import Clothing from '../../Assets/Image/Filter-icon/Clothing.webp'
import Jewelley from '../../Assets/Image/Filter-icon/Jewellery.png'

import freeShipping from '../../Assets/Image/Footer/1.png'
import onlineSupport from '../../Assets/Image/Footer/2.png'
import returnproduct from '../../Assets/Image/Footer/3.png'
import paymentsecure from '../../Assets/Image/Footer/4.png'

import iPhone from '../../Assets/Image/Product/iPhone.png'

import './Shop.css'
import '../../Pages/ShoppingCard.css'
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'phosphor-react';


import ProductData from '../../ProductData.json'
import { Eye, Heart, SealPercent } from '@phosphor-icons/react';
import { IconDiamond, IconTruckDelivery } from '@tabler/icons-react';

const Shop = () => {
    const [items, setItems] = useState(ProductData)
    const featuredProduct = items.filter((item => item.useHome === "featured-products"))
    const newArraival = items.filter((item => item.NewArraival === "NewArraival"))




    return (
        <>

            <div className="Shop-page">

                <CarouselFile />

                <div className="home-layout-control">
                    <div className="Browse-by-category">
                        <div className="Browse-by-category-title">
                            <h2 className='heebo' style={{ fontWeight: "600" }}> Browse by Category </h2>

                            <div className="category-change-button">

                                <button className='btn btn-light'>
                                    <ArrowLeft size={32} />
                                </button>

                                <Link to='/Category'>
                                    <button className='btn btn-primary'>
                                        <ArrowRight size={32} />
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="Browse-by-category-card new-filter-alignment">
                            <div className="row">
                                <div className="col-md-3">
                                    <Link to='/Category' >
                                        <div className="card" style={{ width: "10rem" }}>
                                            <img src='https://i.pinimg.com/236x/90/f9/93/90f99396412b31bcf4ce3974000915ca.jpg' alt="" className='card-img-top' />
                                        </div>

                                    </Link>
                                    <h5 className='card-title'>Men</h5>
                                </div>

                                <div className="col-md-3">
                                    <Link to='/Category' >
                                        <div className="card" style={{ width: "10rem" }}>
                                            <img src='https://i.pinimg.com/564x/4d/08/68/4d086816ae5ea1358994435af896fc89.jpg' alt="" className='card-img-top adjust-padding' />
                                        </div>
                                    </Link>
                                    <h5 className='card-title'>Women</h5>
                                </div>

                                <div className="col-md-3">
                                    <Link to='/Category' >
                                        <div className="card" style={{ width: "10rem" }}>
                                            <img src='https://i.pinimg.com/236x/02/03/e5/0203e5be983d63baeee0cfb7aab0ac66.jpg' alt="" className='card-img-top adjust-padding' />
                                        </div>
                                    </Link>
                                    <h5 className='card-title'>Jewellery</h5>
                                </div>

                                <div className="col-md-3">
                                    <Link to='/Category' >
                                        <div className="card" style={{ width: "10rem" }}>
                                            <img src='https://i.pinimg.com/236x/6a/e2/b3/6ae2b3c8bd720ed3d21b80c7a3c86074.jpg' alt="" className='card-img-top adjust-padding-laptop' />
                                        </div>
                                    </Link>
                                    <h5 className='card-title'>Electronics</h5>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="Featured-products">
                        <div className="Browse-by-category-title">
                            <h2 className='inter' style={{ fontWeight: "600" }}> Featured Products </h2>

                            <div className="category-change-button">
                                <Link to='/Category'>
                                    <button className='btn btn-primary'>
                                        View all Products<ArrowRight size={28} />
                                    </button>
                                </Link>
                            </div>
                        </div>

                        <div className="featured-product-alter">
                            <div className="Category-row row">
                                {featuredProduct.map((val) => {

                                    return (
                                        <div className="col-3 Catgory-col-3">
                                            <div className="card Category-card">
                                                <div className="img">
                                                    <img src={val.image} alt="" className='card-img-top' />
                                                </div>
                                                <div className="card-body">
                                                    <p className="product-name card-text">{val.title.slice(0, 25)}</p>
                                                    <h6 className="product-price"> $ {val.price} </h6>
                                                    <h1 style={{ display: "none" }}> {val.featured} </h1>
                                                </div>
                                                <div className="add-to-cart-btn">
                                                    <button type="button" className='add-to-cart-width btn btn-primary' >Add to Cart</button>
                                                    <Eye className='add-to-cart-width add-to-cart-icons' size={26} />
                                                    <Heart className='add-to-cart-width add-to-cart-icons' size={26} />
                                                </div>

                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="New-Arrivals">
                        <div className="Browse-by-category-title new-arraival">
                            <h2 className='inter' style={{ fontWeight: "600" }}> New Arrivals </h2>
                            <div className="category-change-button">
                                <button className='btn btn-primary'>
                                    View all Products<ArrowRight size={28} />
                                </button>
                            </div>
                        </div>

                        <div className="new-ads">
                            {/* <div className="position-text">
                                <h3 className="item-name inter">
                                    iPhone 15 Pro
                                </h3>
                                <button type="button" className='btn btn-primary'>
                                    Shop Now<ArrowRight size={28} />
                                </button>
                            </div> */}

                            <div className="row-for-new-arraival row">
                                <div className="width-50-left">
                                    <div className="left-ads-image">
                                        <h1 className="ads-text-for-left">
                                            Samsung Galaxy Note20 Ultra 5G
                                        </h1>
                                        <button type="button" className='ads-shop-now-btn btn btn-primary'>
                                            Shop Now<ArrowRight size={28} />
                                        </button>
                                    </div>
                                </div>
                                <div className="width-50-right">
                                    <div className="row-for-new-arrival-card row">
                                        {newArraival.map((val) => {
                                            return (
                                                <div className="row newArraival-row">
                                                    <div className="card new-arraival-card-right">
                                                        <div className="card-img-right">
                                                            <img src={val.image} alt="" className='card-img-top' />
                                                        </div>
                                                        <div className="card-body">
                                                            <p className="product-name card-text card-text-width-fix">{val.title.slice(0, 38)}</p>
                                                            <h6 className="product-price card-text-width-fix"> $ {val.price} </h6>
                                                            <h1 style={{ display: "none" }}> {val.featured} </h1>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>











                            {/* <div className="row newArraival-split-row">
                                <div className="col-6 newArraival-shopping-ads">
                                    <div className="card newArraival-shopping-ads-relative">
                                        <img src={iPhone} alt="" srcset="" />
                                    </div>
                                </div>

                                <div className="col-6">
                                    {newArraival.map((val) => {
                                        return (

                                            <div className="row newArraival-row">
                                                <div className="card newArraival-card">
                                                    <img src={val.image} alt="" className='card-img-top' />
                                                    <div className="card-body">
                                                        <p className="product-name card-text">{val.title.slice(0, 38)}</p>
                                                        <h6 className="product-price"> $ {val.price} </h6>
                                                        <h1 style={{ display: "none" }}> {val.featured} </h1>
                                                    </div>
                                                </div>
                                            </div>

                                        )
                                    })}
                                </div>
                            </div> */}
                        </div>
                    </div>

                    <div className="carousel-ads-section">
                        <div className="carousel-background-image">

                            <div className="carousel-ads-text inter" >
                                <h5 className="discount-text inter">
                                    <SealPercent size={32} /> Weekend Discount
                                </h5>

                                <h3 className="offer-text inter">
                                    Up To 40% Off On Digital Items
                                </h3>

                                <p className="offer-discription inter">
                                    The exact percentage of the discount may very depending on the specific product or promothion being offered.
                                </p>

                                <button type="button" className='ads-shop-now-btn btn btn-primary'>
                                    Shop Now<ArrowRight size={28} />
                                </button>


                            </div>

                        </div>
                    </div>
                </div>

                <div class="container-footer">
                    <div class="row">
                        <div class="col-4">
                            <div class="card ">
                            <IconTruckDelivery className='delivery-icon-footer' stroke={1.5} />
                                <div class="card-body ">
                                    <h4 class=" card-delivery-heading">Free Shipping</h4>
                                    <p class="card-text card-delivery-Text">Free shipping on all US order or order above $99</p>
                                </div>

                            </div>
                        </div>

                        <div class="col-4">
                            <div class="card " >
                                {/* <svg className='delivery-icon-footer'  xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="black" d="M13.5 8H12v5l4.28 2.54l.72-1.21l-3.5-2.08zM13 3a9 9 0 0 0-9 9H1l3.96 4.03L9 12H6a7 7 0 0 1 7-7a7 7 0 0 1 7 7a7 7 0 0 1-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.9 8.9 0 0 0 13 21a9 9 0 0 0 9-9a9 9 0 0 0-9-9"></path></svg> */}
                                <svg className='delivery-icon-footer clock-arrow' xmlns="http://www.w3.org/2000/svg " width="1em" height="1em" viewBox="0 0 24 24"><path fill="black" d="M13.5 8H12v5l4.28 2.54l.72-1.21l-3.5-2.08zM13 3a9 9 0 0 0-9 9H1l3.96 4.03L9 12H6a7 7 0 0 1 7-7a7 7 0 0 1 7 7a7 7 0 0 1-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.9 8.9 0 0 0 13 21a9 9 0 0 0 9-9a9 9 0 0 0-9-9"></path></svg>
                                <div class="card-body ">
                                    <h4 class="card-delivery-heading">7 Days Return</h4>
                                    <p class="card-text card-delivery-Text">Free shipping on all US order or order above $99</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="card " >
                            <IconDiamond className='delivery-icon-footer' stroke={1.5} />
                                <div class="card-body ">
                                    <h4 class="lexend-ads-text card-delivery-heading">Payment Secure</h4>
                                    <p class="card-text lexend-ads-text card-delivery-Text">Free shipping on all US order or order above $99</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}

export default Shop
