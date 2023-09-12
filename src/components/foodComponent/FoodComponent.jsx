import React, { useEffect, useState } from "react";
import { BsArrowDownShort } from "react-icons/bs";
import { BsArrowUpShort } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

import CardsData from "../../data/CardsData";
import FoodCard from "../foodCard/FoodCard";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import "./foodComponent.css";

const FoodComponent = () => {
  const [showFood, setShowFood] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log(CardsData);
  }, []);

  return (
    <div className="food-comp-wrapper">
      {/* Food component heading */}
      <div className="food-heading">
        <span>
          <h4>Recommended</h4>
          <p>Featured Food (04)</p>
        </span>

        <span>
          {showFood ? (
            <Button
              onClick={() => {
                setOpen(!open);
                setShowFood(!showFood);
              }}
              aria-controls="example-collapse-text"
              aria-expanded={open}
              style={{ backgroundColor: "transparent", border: "none" }}
            >
              <IoIosArrowUp
                size={30}
                color="gray"
              />
            </Button>
          ) : (
            <Button
              onClick={() => {
                setOpen(!open);
                setShowFood(!showFood);
              }}
              aria-controls="example-collapse-text"
              aria-expanded={open}
              style={{ backgroundColor: "transparent", border: "none" }}
            >
              <IoIosArrowDown
                size={30}
                color="gray"
              />
            </Button>
          )}
        </span>
      </div>

      {/* food card */}

      <Collapse in={open}>
        <div className="food-card-wrapper" id="example-collapse-text" >
          {CardsData.map((item) => {
            return (
              <FoodCard
                key={item.id}
                name={item.rname}
                url={item.imgdata}
                price={item.price}
              />
            );
          })}
        </div>
      </Collapse>
    </div>
  );
};

export default FoodComponent;
