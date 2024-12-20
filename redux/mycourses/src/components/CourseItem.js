import React from "react";

import { BsChevronUp, BsChevronDown } from "react-icons/bs";

function CourseItem({ id, title, price, img, quantity }) {
  return (
    <div className="cardItem">
      <img src={img} alt="" width={750} height={422} />
      <div class="cardInfo">
        <h4>{title}</h4>
        <h4>${price}</h4>
        <div>
          <button className="cardQuantityButton">
            <BsChevronUp />
          </button>
          <p className="cardQuantity">{quantity}</p>
          <button className="cardQuantityButton">
            <BsChevronDown />
          </button>
        </div>
        <button className="cardDeleteButton">Delete</button>
      </div>
    </div>
  );
}

export default CourseItem;
