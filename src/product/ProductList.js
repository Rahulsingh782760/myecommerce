
import { useEffect, useState } from 'react';
import { productItem } from '../DataContainer/data';
import './ProductListStyle.css';
import { NavLink } from 'react-router-dom';

import FormatePrice from '../component/ConvertToPrice/FormatePrice';

const ProductList = () => {
    const [items, setItems] = useState(productItem);

    const filterImg = items.filter((ele) => {
        return ele.id < 5;
    });

    useEffect(() => {
        setItems(filterImg)
    }, []);

    return (
        <div className='Product_list_wrapper'>

            {
                items.map((ele) => {
                    const { id, img, price, productname } = ele;
                    return (

                        <NavLink to={`/SingleProduct/${id}`} key={id} className='containerList'>
                            <img src={img} alt='list' />

                            <div className='List_text'>
                                <p>{<FormatePrice price={price}/>}</p>
                                <p id='product_name'>{productname}</p>
                            </div>
                        </NavLink>


                    )
                })
            }

        </div>
    )
};

export default ProductList;