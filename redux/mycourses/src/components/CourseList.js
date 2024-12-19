import React from "react";
import { useSelector } from "react-redux";
import CourseItem from "./CourseItem";

function CourseList() {
  const { cardItems, quantity, total } = useSelector((store) => store.card);

  return (
    <>
      {quantity < 1 ? (
        <section>
          <header>
            <h2>My Basket</h2>
            <h4>Empty</h4>
          </header>
        </section>
      ) : (
        <section>
          <header>
            <h2>My Basket</h2>
          </header>
          <div>
            {cardItems.map((item) => {
              return <CourseItem {...item} />;
            })}
          </div>
          <footer>
            <hr />
            <h4>
              Total Price <span>${total}</span>
            </h4>
            <button>Clear</button>
          </footer>
        </section>
      )}
    </>
  );
}

export default CourseList;
