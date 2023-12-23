import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./cakeSlice";

const CakeView = () => {
  const noOfCakes = useSelector((state) => state.cake.noOfCake);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of cakes - {noOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>Order Cake</button>
      <button onClick={() => dispatch(restocked(5))}>Restock Cakes</button>
    </div>
  );
};

export default CakeView;
