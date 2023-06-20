
import React from "react";
import './HeroSectionStyle.css';
import { NavLink } from "react-router-dom";
import { Button, styled } from "@mui/material";

const ShowBtn = styled(Button)`
      margin-top: 10px;
      font-weight: 550;
      font-size: 0.9rem;
      border-radius: 1px;
`;

const HeroSection = ({ title }) => {
    const { name } = title
    return (

        <div className="hero_container">
            <div className="text_section">
                <div className="section">
                    <p style={{ fontSize: '2.3rem', textTransform: 'uppercase' }}>Welcome</p>
                    <h2 id="heading"><span style={{ color: '#FCA510' }}>Amazon</span> {name}</h2>
                    <p id="description">Zoho Commerce comes with a drag-and-drop store builder, product, inventory,
                        order and shipping management tools, multiple payment gateways, and real-time reports.
                        Your dream website is just a click away.
                    </p>
                    <NavLink>
                        <ShowBtn variant='contained' >Show now</ShowBtn>
                    </NavLink>
                </div>

            </div>



            <div className="img_section">
                <img src="./shopping.jpg" alt='family_img' />
            </div>
        </div>
    )
}

export default HeroSection;