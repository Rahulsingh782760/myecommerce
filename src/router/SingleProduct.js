
import React from "react";
import './SingleProductStyle.css';
import ProductDetails from "../product/ProductDetails";
import ProductDescription from "../product/ProductDescription";


const SingleProduct = ({handleClick}) =>{
      return(
          <div className='product_container'>
            <ProductDetails />
            <ProductDescription handleClick={handleClick} />
          </div>
      )
};

export default SingleProduct;