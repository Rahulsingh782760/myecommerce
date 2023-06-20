
import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarsRating = ({ stars, reviews }) => {
    const ratingStar = Array.from({ length: 5 }, (v, i) => {
        let rating = i + 0.5
        //    console.log(rating)


           return(
               <span key={i}>
                {
                   stars > i + 1 ? 
                   <FaStar/> : 
                   stars > rating ?
                   <FaStarHalfAlt/> : 
                   <FaRegStar/>
                }
               </span>
           )

    });

    return (
        <div className="star_container" style={{display: 'flex'}}>
            <span style={{fontSize: '1.5rem', marginRight: 6, color: '#FCE205'}}>{ratingStar }</span>
            <span style={{ fontSize: '1.1rem'}}>{`(${reviews}  customer reviews)`}</span>
        </div>

    )
};

export default StarsRating; 