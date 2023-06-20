
import React from "react";
import './ListViewStyle.css';
import { productItem } from "../DataContainer/data";
import { NavLink } from "react-router-dom";
import { Button, styled } from "@mui/material";

import FormatePrice from "./ConvertToPrice/FormatePrice";

const Btn = styled(Button)`
      color: #000;
      border: 1px solid #000;
      font-size: 1.1rem;
      font-weight: 550;

      &:hover{
          background-color: #0064FF;
          color: #fff;
      }
`;

const description = 'The moble is compact and more useally, i cant say tremendous phone and at the same time user friendly, if you kept 5G continuously then it will drain faster than expected, everytime you need change to 4G if you are not using 5G, battery optimization is worrying factor. OS is also an issue in this phone not so so smooth, shutters are here and there. Camera snaps pics with over exposure you need edit before posting, selfie is better than rear camera. 4k video is good. if you are real gamer you need to look snapdragon processor. this is some mixed results in gaming';

const ListView = () => {
    return (

        <div className="listView_wrapper" >
            <div className="listView">

                {
                    productItem.map((ele) => {
                        const { id, img, price, brand } = ele;
                        return (

                            <div key={id} className='list-component'>
                                <img src={img} alt="name" height='250' width='200' />

                                <div style={{ textAlign: 'justify' }}>
                                    <h2 style={{ fontWeight: 400 }}>{brand}</h2>
                                    <p>{<FormatePrice price={price} />}</p>
                                    <p id="listview_para">{description.slice(0, 270)}</p>
                                    <NavLink to={`/SingleProduct/${id}`}>
                                        <Btn variant="outlined" >Read More</Btn>
                                    </NavLink>
                                </div>

                            </div>
                        )
                    })
                }
            </div>

        </div>

    )
};


export default ListView;