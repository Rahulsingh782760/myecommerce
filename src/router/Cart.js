
import { useState, useEffect } from "react";
import './CartStyle.css'
import Cards from '../component/Cards';
import { NavLink } from "react-router-dom";

import FormatePrice from "../component/ConvertToPrice/FormatePrice";

import { styled, Button } from '@mui/material';

const CartBtn = styled(Button)`
    padding: 10px 15px;
    font-size: 1.2rem;
    letter-spacing: 0.8px;
    border-radius: 1px;

`;



const Cart = ({ cart, setCart, handleChange }) => {
    const [number, setNumber] = useState(0);

    const handlePrice = () => {
        let ans = 0;
        cart.map((item) => (
            ans += (item.price * item.quantity)
        ));
        setNumber(ans)
    };

    useEffect(() => {
        handlePrice()
    });


    if (cart.length === 0) {
        return (
            <div className="cartEmpty">
                <img src="../cartEmpty.webp" alt=""/>
            </div>

        )
    };

    const clearCart = () => {
        setCart([])
    };


    // shipping fee
    let num = 50.0

    return (

        <div className="cart_container" style={{ marginTop: 100}}>
            <div className="row_line">
                <span style={{ marginLeft: 35 }}>item</span>
                <p>Quantity</p>
                <p>Price</p>
                <p>Subtotal</p>
                <p>Remove</p>
            </div>
            <hr width='85%' />

            <section>
                {
                    cart.map((data) => {
                        return <Cards key={data.id} data={data} cart={cart} setCart={setCart} handleChange={handleChange} />
                    })

                }
            </section>

            <hr width='85%' />

            <div className="price_container">

                <div className="clear_btn">

                    <NavLink to='/products'>
                        <CartBtn variant="contained">continue shopping</CartBtn>
                    </NavLink>

                    <div>
                        <CartBtn style={{ background: '#EF5350' }} variant="contained" onClick={clearCart}>clear cart</CartBtn>
                    </div>

                </div>


                <div className="total_container">
                    <div className='total'>

                        <div Id='rupees'>
                            <p>Subtotal :</p>
                            <p><FormatePrice price={number} /></p>
                        </div>
                        <div Id='rupees'>
                            <p>Shipping Fee :</p>
                            <p><FormatePrice price={num} /></p>
                        </div>
                        <hr width='160px' />
                        <div Id='rupees'>
                            <p>Total Order :</p>
                            <p><FormatePrice price={number + num} /></p>
                        </div>

                    </div>
                </div>


            </div>


        </div>

    )
};

export default Cart;
