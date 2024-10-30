import React from "react";
import { Data } from "./propstypes";

function Home(props: Data) {
  return (
    <div>
      {props.name} to lesson!!! Number of courses : {props.courseNumber}
      {props.isBest ? (
        <p>This is the best course</p>
      ) : (
        <p> It is not, but it will be</p>
      )}
    </div>
  );
}

export default Home;
