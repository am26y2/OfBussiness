import React, { useState } from "react";
import Layer3 from "./Layer3";
function Heading() {
  const [watch, setWatch] = useState(0);
  const [star, setStar] = useState(0);
  const [fork, setFork] = useState(0);
  const handleClick = (id) => {
    if (id === "watch") setWatch((prevVal) => prevVal + 1);
    if (id === "star") setStar((prevVal) => prevVal + 1);
    if (id === "fork") setFork((prevVal) => prevVal + 1);
  };
  return (
    <div className="heading">
      <div className="row">
        <div>Github/hub</div>
        <div className="buttonleft">
          <div>
            <button onClick={() => handleClick("watch")}>{watch} watch</button>
          </div>
          <div>
            <button onClick={() => handleClick("star")}>{star} star</button>
          </div>
          <div>
            <button onClick={() => handleClick("fork")}>{fork} fork</button>
          </div>
        </div>
      </div>
      <Layer3 />
    </div>
  );
}
export default Heading;
