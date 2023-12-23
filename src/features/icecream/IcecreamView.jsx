import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";

const IcecreamView = () => {
    const noOfIcecreams = useSelector((state)=>state.icecream.noOfIcecreams)
    const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of ice creams - {noOfIcecreams}</h2>
      <button onClick={()=> dispatch(ordered())}>Order Ice creams</button>
      <button onClick={()=> dispatch(restocked(2))}>Restock Ice creams</button>
    </div>
  );
};

export default IcecreamView;
