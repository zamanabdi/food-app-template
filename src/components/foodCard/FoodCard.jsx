import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import "./foodCard.css";

const FoodCard = ({ name, url, price }) => {
  return (
    <div className="food-card">

    {/* Food card info */}
      <div className="food-card-info">
        <img
          src="https://www.vhv.rs/dpng/d/437-4370761_non-veg-icon-non-veg-logo-png-transparent.png"
          alt="symbol"
          width={"15px"}
        />

        <div className="title">{name}</div>

        <div className="star-and-rating">
          <span>
            <BsFillStarFill color="gold" />
            <BsFillStarFill color="gold" />
            <BsFillStarFill color="gold" />
            <BsFillStarFill color="gold" />
            <BsFillStarFill color="gold" />
          </span>
          <span>1k + Rating</span>
        </div>

        <div className="price">₹ {price}</div>

        <div className="food-line-div"></div>

        <p className="desc">
          A super easy Mexican style shred beef cooked...Read More
        </p>
      </div>

      {/* Food pic */}

      <div className="food-pic-wrapper">
      <button className="add-btn">+ ADD</button>

          <img src={url} alt="food" /> 
        
        
      </div>
    </div>
  );
};

export default FoodCard;
