import React from "react";
import { NavLink } from "react-router-dom";
import './Amazon.css';

import FormatePrice from "./ConvertToPrice/FormatePrice";

const Amazon = ({searchItem}) => {

    return (
        <section className="product_view">

            {
                searchItem.map((item) => {

                    const { id, img, price, productname } = item;
        
                    return (
                        <NavLink key={id} to={`/SingleProduct/${id}`} className='anchorTag'>
                            <img src={img} alt="img" height='300' width='220' />

                            <div className="details_components">
                                <p>{<FormatePrice price={price}/>}</p>
                                <p>{productname}</p>
                            </div>
                        </NavLink>
                    )
                })
            }
            
        </section>
    )
};

export default Amazon;