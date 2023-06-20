
import React from 'react';
import './FooterStyle.css';
import { FaInstagram, FaApple, FaWhatsapp, FaAmazon, FaTwitter, } from "react-icons/fa";
import { GrAndroid } from "react-icons/gr";
import { NavLink } from 'react-router-dom';



const FooterSection = () => {
    const scrollEvent = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    };

    return (

        <div className='footer_section'>

            <img src='https://www.logodesignteam.com/images/portfolio-images/ecommerce-websites-logo-design/ecommerce-websites-logo-design20.jpg' alt='logo' />




            <div className='para_section'>
                <h1>E-Shopping Company</h1>

                <p className='para'>
                    The design that I have shown in this tutorial is very simple and easy.
                    Will be very suitable for different types of personal websites or business websites.
                    It is a very simple and simple design with a heading, some basic description, social media icons,
                    It is a very simple and simple design with a heading, some basic description, social media icons,
                    and a footer credit option.some basic description, social media icons,with a heading, some basic description
                </p>

            </div>

            <div className='Icons_section' >
                <FaApple id='icons' />
                <FaWhatsapp id='icons' />
                <FaAmazon id='icons' />
                <FaTwitter id='icons' />
                <FaInstagram id='icons' />
                <GrAndroid id='icons' />
            </div>

            <div className='scroll_box' onClick={scrollEvent}>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                <NavLink to='/about'>About</NavLink>
            </div>

            <p id='copyright' style={{ margin: '2rem 0px', wordSpacing: 1 }}>Copyright © 2023 Bookataxi Pvt Ltd. All Rights Reserved. Designed & Developed by Digital TopGuns</p>

        </div>
    );
};

export default FooterSection;




