import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CourseItem from "./CourseItem";
import { clearCard } from "../control/cardSlice";

function CourseList() {
  const { cardItems, quantity, total } = useSelector((store) => store.card);

  const dispatch = useDispatch();

  return (
    <>
      {quantity < 1 ? (
        <section className="card">
          <header>
            <h2>My Basket</h2>
            <h4>Empty</h4>
          </header>
        </section>
      ) : (
        <section className="card">
          <header>
            <h2>My Basket</h2>
          </header>
          <div>
            {cardItems.map((item) => {
              return <CourseItem key={item.id} {...item} />;
            })}
          </div>
          <footer>
            <hr />
            <h4>
              Total Price <span>${total}</span>
            </h4>
            <button className="cardClear" onClick={() => dispatch(clearCard())}>
              Clear
            </button>
          </footer>
        </section>
      )}
    </>
  );
}

export default CourseList;
