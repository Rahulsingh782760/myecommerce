
import React from "react";
import { useParams } from "react-router-dom";
import { productItem } from "../DataContainer/data";
import './ProductDetailsStyle.css';

const ProductDetails = () => {
    const { id } = useParams();
    const data = productItem.find((val) => {
        return val.id === id
    });

    return (
        <div key={data.id} className="product_wrapper">
            <img src={data.img} alt="main" height='400' width='260' />
        </div>

    )
};

export default ProductDetails;