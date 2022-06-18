import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
export default function CartBtn() {
  const state = useSelector(state => state.addItem)
  return (
    <>
      <NavLink to="/cart" className="btn btn-outline-success">
    {/* <div style={{width:"5px",height:"5px",borderRadius:"10px",background:"red",marginLeft:"15px"}}></div> */}
        <i className="fa fa-shopping-cart"> {state.length}</i>
      </NavLink>
    </>
  );
}
