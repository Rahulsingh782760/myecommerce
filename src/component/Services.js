
import React from "react";
import './ServicesStyle.css';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SecurityIcon from '@mui/icons-material/Security';

// react icons
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Services = () => {
    return (
        <div className="services_container">
            <div id='row_box'>
                <LocalShippingIcon id="Icons" />
                <p>Supper Fast and Free Delivery</p>
            </div>

            <div className="row_section" >
                <div id='row_box' style={{ padding: 7, borderRadius: 8 }}>
                    <SecurityIcon id="Icons" />
                    <p style={{ margin: 0 }}>Non-Contact Shipping</p>
                </div>

                <div id='row_box' style={{ padding: 7, borderRadius: 8}}>
                    <GiReceiveMoney id="Icons" />
                    <p style={{ margin: 0 }}>Money-back Guaranteed</p>
                </div>
            </div>

            <div id='row_box'>
                <RiSecurePaymentLine id="Icons" />
                <p>Super Secure Payment System</p>
            </div>
        </div>
    )
}

export default Services;