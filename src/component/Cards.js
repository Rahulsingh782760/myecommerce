
import React from 'react';
import './CardsStyle.css';
import { FaTrash } from "react-icons/fa";

import FormatePrice from './ConvertToPrice/FormatePrice';

const Cards = ({ data, cart, setCart, handleChange }) => {
    const { id, img, productname, price, quantity } = data;

    const handleRemove = (id) => {
        const removeItem = cart.filter((cum) => {
            return cum.id !== id;
        });
        setCart(removeItem);
    };


    return (
        <>
            <div className="cart_component">
                <div className='img_text'>
                    <img src={img} alt="" width='80' height='50'/>
                    <p>{productname}</p>

                </div>


                {/* price */}
                <div>
                    <p>{<FormatePrice price={price} />}</p>
                </div>

                {/* Quantity */}
                <div>
                    <button onClick={() => handleChange(data, + 1)}>+</button>
                    <button>{data.quantity}</button>
                    <button onClick={() => handleChange(data, - 1)}>-</button>
                </div>

                {/* Subtotal */}
                <div>
                    <p> <FormatePrice price={price * quantity} /> </p>
                </div>

                {/* Remove */}
                <FaTrash onClick={() => handleRemove(id)} id='cart_remove' />

            </div>

        </>


    )
};

export default Cards;

