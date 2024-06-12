import React, { useState } from 'react'
import './Category.css'
import ProductData from '../../ProductData.json'

const Category = () => {
    const [items, setItems] = useState(ProductData)
    const filterItem = (CartItem) => {
        const updateItem = ProductData.filter((crtItem) => {
            return (
                crtItem.category === CartItem
            )
        });
        setItems(updateItem);
    }




    return (
        <>
            <div className='Category-container'>
                <div className="Category-heading-section">
                    <h1 className="Category-heading">Browse By Category</h1>
                    <div className="Category-button-section">
                        <button type="button" className='btn Category-button btn-primary' onClick={() => setItems(ProductData)} >All product</button>
                        <button type="button" className='btn Category-button btn-primary' onClick={() => filterItem("men's clothing")} >Men's Clothing</button>
                        <button type="button" className='btn Category-button btn-primary' onClick={() => filterItem("electronics")}>Electronics</button>
                        <button type="button" className='btn Category-button btn-primary' onClick={() => filterItem("jewelery")}>Jewellary</button>
                        <button type="button" className='btn Category-button btn-primary' onClick={() => filterItem("women's clothing")}>women's clothing</button>
                    </div>
                </div>
                <div className="Category-row row">
                    {items.map((val) => {
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
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Category
