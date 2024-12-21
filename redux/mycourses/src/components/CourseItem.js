import React from "react";

import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";

import { removeItem, increase, decrease } from "../control/cardSlice";

function CourseItem({ id, title, price, img, quantity }) {
  const dispatch = useDispatch();

  return (
    <div className="cardItem">
      <img src={img} alt="" width={750} height={422} />
      <div className="cardInfo">
        <h4>{title}</h4>
        <h4>${price}</h4>
        <div>
          <button
            className="cardQuantityButton"
            onClick={() => dispatch(increase(id))}
          >
            <BsChevronUp />
          </button>
          <p className="cardQuantity">{quantity}</p>
          <button
            className="cardQuantityButton"
            onClick={() => dispatch(decrease(id))}
          >
            <BsChevronDown />
          </button>
        </div>
        <button
          className="cardDeleteButton"
          onClick={() => dispatch(removeItem(id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default CourseItem;
