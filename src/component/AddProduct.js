
import React from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

const AddProduct = ({ data }) => {
    const [amount, setAmount] = React.useState(1);
 
    return (
        <div>

            <div className="card_wrapper" style={{ display: 'flex' }}>
                <button onClick={() => (amount < data.stock ) ? setAmount(amount + 1) : setAmount(amount)}><FaPlusCircle id='ctrl' /></button>
                <p>{amount}</p>
                <button onClick={() => (amount < 2) ? setAmount(amount) : setAmount(amount - 1)}><FaMinusCircle id='ctrl' /></button>
            </div>

        </div>
    )
};

export default AddProduct;