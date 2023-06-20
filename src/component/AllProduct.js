
import React, { useState } from "react";
import './AllProductStyle.css';
// import { NavLink } from "react-router-dom";
import { productItem } from "../DataContainer/data";

import ListView from "./ListView";
import Amazon from "./Amazon";
import { AiFillAppstore, AiOutlineMenu } from "react-icons/ai";

import { Button, styled, Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Btn = styled(Button)`
      border: 1px solid #000;
      color: #000;
      font-weight: 600;
      margin-bottom: 15px;
`;

const Btn1 = styled(Button)`
      color: #000;
      font-size: 1rem;
      margin-top: 10px;
      text-transform: capitalize;
      
      

`;

const AllProduct = () => {
    const [search, setSearch] = useState('');
    const [view, setView] = useState(true);
    const [price, setPrice] = useState(productItem);


    const handleStore = () => {
        setView(true)
    };

    const handleList = () => {
        setView(false)
    };

    const handlePrice = (PH) => {
        const updatePrice = productItem.filter((ele) => {
            return ele.filterPrice === PH
        });

        setPrice(updatePrice)
    };

    // search function

    
    const searchItem = price.filter((item) => {
        if (item.productname.toLowerCase().includes(search)) {
              return item;
        }
            
        else if (search === '') {
            return item;
        }
    });



    const seprateProduct = (product) => {
        const updateSeprateProduct = productItem.filter((ele) => {
            return ele.category === product;
        });

        setPrice(updateSeprateProduct)
    };


    const handleBrand = (brand) => {
        const updateHandleBrand = productItem.filter((ele) => {
            return ele.brand === brand;
        });

        setPrice(updateHandleBrand)
    };


    return (

        <div className="all_wrapper">
            <div className="main_container">
                <div className="function_section" style={{ marginBottom: 50 }}>
                    <input type="search" placeholder="SEARCH" id='searchField' value={search} onChange={(e) => setSearch(e.target.value)} />
                    <section id="category_box">
                        <h2>Category</h2>
                        <Btn1 onClick={() => seprateProduct('mobile accessories')}>mobile accessories</Btn1>
                        <Btn1 onClick={() => seprateProduct('electronic devices')}>electronic devices</Btn1>
                        <Btn1 onClick={() => seprateProduct('laptop & home appliances')}>laptop & home appliances</Btn1>
                        <Btn1 onClick={() => setPrice(productItem)}>All</Btn1>
                        <Btn1 onClick={() => seprateProduct('toys & sport')}>toys & sport</Btn1>
                        <Btn1 onClick={() => seprateProduct('watch & lifestyle')}>watch & lifestyle</Btn1>
                        <Btn1 onClick={() => seprateProduct('cameras')}>cameras</Btn1>
                    </section>

                    <div className='category'>
                        <h2>Campany</h2>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                style={{
                                    margin: 0,
                                    minHeight: 0,
                                }}
                            >
                                <Typography style={{ margin: '0 auto' }}>Brand</Typography>
                            </AccordionSummary>
                            <AccordionDetails className="Brand">
                                <p onClick={() => setPrice(productItem)}>all</p>
                                <p onClick={() => handleBrand('OPPO')}>oppo</p>
                                <p onClick={() => handleBrand('apple')}>apple</p>
                                <p onClick={() => handleBrand('Levis')}>levi's</p>
                                <p onClick={() => handleBrand('rolex')}>rolex</p>
                                <p onClick={() => handleBrand('HP')}>hp</p>

                            </AccordionDetails>
                        </Accordion>

                        <Button variant="contained" size='size' id='clear_btn' onClick={() => setPrice(productItem)}>
                            clear filter
                        </Button>
                    </div>

                    <hr />
                    
                </div>



                <div style={{ marginBottom: 40 }}>
                    <div className="title_components" >
                        <div className='btn_container'>
                            <button onClick={handleStore} className={view ? "active btn_section" : 'btn_section'} style={{ marginRight: 30 }}>
                                <AiFillAppstore id="toggle_sign" />
                            </button>

                            <button onClick={handleList} className={!view ? 'btn_section active' : 'btn_section'}>
                                <AiOutlineMenu id="toggle_sign" />
                            </button>
                        </div>

                        <p id='twelve_product'>12 Product Available</p>


                        {/* Price to high  */}
                        <div>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    style={{
                                        margin: 0,
                                        minHeight: 0,
                                    }}
                                >
                                    <Typography style={{ textTransform: 'uppercase' }}>Price</Typography>
                                </AccordionSummary>
                                <AccordionDetails className='Menu_price'>
                                    <Btn variant="outlined" size="small" onClick={() => handlePrice('price')}>Low_Price</Btn>
                                    <Btn variant="outlined" size="small" onClick={() => handlePrice('highRange')}>High_price</Btn>
                                    <Btn variant="outlined" size="small" onClick={() => setPrice(productItem)}>All_Product</Btn>
                                </AccordionDetails>
                            </Accordion>
                        </div>


                    </div>


                    {/* Use ternary operator  */}

                    {view === true ?
                        <Amazon searchItem={searchItem} />

                        :

                        <ListView />

                    }

                </div>

            </div>

        </div>
    )
};

export default AllProduct;