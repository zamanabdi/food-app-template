import React from "react";
import { BiShareAlt } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { BsFillStarFill } from "react-icons/bs";
import { BsDot } from "react-icons/bs";
import {GoDotFill} from "react-icons/go";
import {IoRibbonSharp} from "react-icons/io5"
import "./heroBanner.css";

const HeroBanner = () => {
  return (
    <div className="hero-wrapper">
      <div className="hero-banner-main-image">
        <img
          src="https://media-cdn.tripadvisor.com/media/photo-s/11/d3/fe/10/20180108153503-largejpg.jpg"
          alt="starbucks"
        />

        <div className="info-card">
          <div className="top-div">
            {/* Logo container */}
            <div className="logo-wrapper">
              {/* Logo */}
              <div className="logo-div">
                <img
                  src="https://pngimg.com/uploads/starbucks/starbucks_PNG5.png"
                  alt="starbucks"
                />
              </div>

              {/* Logo info */}
              <div className="logo-info">
                <span className="logo-heading">Starbucks</span>
                <span className="logo-subheading">Coffee</span>
              </div>
            </div>

            <div className="share-icon">
              <BiShareAlt style={{ marginLeft: "15px" }} />
              <AiFillHeart color="red" style={{ margin: "0px 15px" }} />
            </div>
          </div>

          <div className="bottom-div">
            <div className="star-data">
              <div className="star-1">
                <span className="green-star">
                  <BsFillStarFill color="white" fontSize={12} />
                </span>
                <span>3.7</span>
                <span>(1k + reviews)</span>
              </div>

              {/* horizontal line */}
              <div className="line-div"></div>

              <div className="star-2">
                <span>
                  <b>4 km</b>
                </span>
                <span>Free Delivery</span>
              </div>
            </div>

            <div className="distance-info">
              <span>1 km</span>
              <span>15 km</span>
            </div>
          </div>
        </div>

        <div className="offer-cards">
          <span className="offer-1">First Card</span>
          <span className="offer-2">Second Card</span>
        </div>

        <div className="dish-type">
          <div className="veg">
          <span className="veg-symbol"><GoDotFill color='green'/></span>
          Veg
          </div>
          <div className="nonveg">
          <span className="nonveg-symbol"><GoDotFill color="red"/></span>
          Non Veg</div>
          <div className="best-seller">
          <span className="seller-symbol"><IoRibbonSharp color="blue"/></span>
          Best Seller</div>
        </div>
      </div>

      <div className="hr-line"></div>
    </div>
  );
};

export default HeroBanner;
