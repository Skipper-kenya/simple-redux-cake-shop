/**
 * PLEASE NOTE I HAVE IMPORTED THE WRAPPED THE PROVIDER IN THE index.js FILE CHECK IT OUT BEFORE PROCEEDING
 */
import React from "react";
//importing the buy cake action creator
import buyCake from "./redux/cake/cakeCreator";

import { useSelector, useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();
  const cakeNo = useSelector((state) => state.numOfCakes);

  return (
    <div style={{ textAlign: "center" }}>
      <br />
      <h2>Redux Cake Shop</h2>
      <br />
      <h3>No of cakes remaining: {cakeNo}</h3>
      <br />
      <button
        onClick={() => dispatch(buyCake())}
        style={{ width: "200px", padding: "10px" }}
      >
        Buy Cake
      </button>
    </div>
  );
}

export default App;
