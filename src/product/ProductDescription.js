
import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { productItem } from "../DataContainer/data";
import './productDescriptionStyle.css';
import StarsRating from "./StarsRating";
import AddProduct from "../component/AddProduct";

import FormatePrice from "../component/ConvertToPrice/FormatePrice";

// React icons 
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";

import { Button, styled } from "@mui/material";


const Btn = styled(Button)`
      margin: 15px 0px;
      font-size: 1.2rem;
      font-weight: 600;
`;

const ProductDescription = ({ handleClick }) => {

    const { id } = useParams();
    const data = productItem.find((ele) => {
        return ele.id === id
    });


    return (
        <div className="description_container">
            <h2 id="head_tag">{data.brand}</h2>
            <StarsRating stars={data.stars} reviews={data.reviews} />
            <p id='descrip_para' style={{ textDecoration: 'line-through' }}>MRP: {data.fakeprice}</p>
            <p id='descrip_para' style={{ fontWeight: '650', color: "blue" }}>Deal of the Day: {<FormatePrice price={data.price} />}</p>

            <p className='read_detail'>
                Technology is a very amazing thing that scientists create. Scientists look at all the things that we as human beings will need in our lives,
                then make a cool gadget or object. For example, scientists knew that we needed a way to communicate with each other even when we are not together.
                Because of this, they created a telephone which we can use to talk to other people even when we are not with them.
            </p>



            <div className="service">
                <div id='service_icons'>
                    <TbTruckDelivery id='delivery' />
                    <p >Free Delivery</p>
                </div>
                <div id='service_icons'>
                    <TbReplace id='delivery' />
                    <p>30 Days Replacement</p>
                </div>
                <div id='service_icons'>
                    <TbTruckDelivery id='delivery' />
                    <p>Amazon Delivered</p>
                </div>
                <div id='service_icons'>
                    <MdSecurity id='delivery' />
                    <p>2 Years Warranty</p>
                </div>
            </div>

            <div className="dynamic_info">
                <p>Available:
                    <span id='span-tag'>{(data.stock > 0) ? " In Stock " : " Out of Stock "}</span>
                </p>

                <p>ID: <span id='span-tag'>{data.id}</span></p>
                <p>Brand: <span id='span-tag'>{data.brand}</span></p>
            </div>


            {/* AddToCart  ==> this same */}
            <AddProduct data={data} />


            <NavLink to={'/cart'} >
                <Btn variant="contained" onClick={() => handleClick(data)}>Add To Cart</Btn>
            </NavLink>


        </div>

    )
};

export default ProductDescription;