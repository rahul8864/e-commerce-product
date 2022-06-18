import { Button } from "react-bootstrap";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { delItem } from "../redux/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

export default function Cart() {
  const state = useSelector((state) => state.addItem);
  const dispatch = useDispatch();
  const cartItems = (cartItem) => {
    const handleClose = (item) => {
      dispatch(delItem(item));
    };
    return (
      <>
        <div
          className="container px-4 my-5 bg-light rounded-3"
          key={cartItem.id}
        >
          <div className="container-fluid py-4">
            <Button
              className="btn-close float-end"
              aria-label="Close"
              onClick={() => handleClose(cartItem)}
            ></Button>
            <div className="row justify-content-center">
              <div className="col-md-4">
                <img src={cartItem.img} alt={cartItem.title} height="200px" />
              </div>
              <div className="col-md-4">
                <h3 className="">{cartItem.title}</h3>
                <p className="lead">
                  ₹ {cartItem.price}{" "}
                  <strike className="fw-normal fs-6">₹ 1,789</strike>{" "}
                  <span className="text-success fw-bold fs-6">60% Off</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  const emptyCart = () => {
    return (
      <>
        <div className="px-4 my-5 bg-light rounded-3">
          <div className="container py-4">
            <div className="row align-content-center justify-content-center">
              <h3 className="text-center">
                <i class="fa-solid fa-heart-crack"></i> Sorry Go To Product{" "}
                <i class="fa-solid fa-face-sad-cry"></i>
              </h3>
            </div>
          </div>
        </div>
      </>
    );
  }
  const button = () => {
      return (
          <div className="container mt-4 mx-auto w-25">
          <div className="row">
              <NavLink to="/checkout" className="btn btn-outline-danger">Proceed to Checkout</NavLink>
          </div>
          </div>
      )
  }
  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && button()}
      {state.length !== 0 && state.map(cartItems)}
    </>
  );
}
