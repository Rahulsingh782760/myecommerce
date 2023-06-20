
import React from "react";
import './TrustedStyle.css';
import { FaInstagram, FaApple, FaWhatsapp, FaAmazon, FaTwitter } from "react-icons/fa";
import { GrAndroid } from "react-icons/gr";

const Trusted = () => {
    return (
        <div className="trusted_container">
            <h1>Trusted By 1000+ Companies</h1>

            <div id='brand'>
                <FaApple id="brand" />
                <FaWhatsapp id="brand" />
                <FaAmazon id="brand" />
                <FaTwitter id="brand" />
                <FaInstagram id="brand" />
                <GrAndroid id="brand" />
            </div>

        </div>
    )
};

export default Trusted;



