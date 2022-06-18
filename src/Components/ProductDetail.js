import { Button } from "react-bootstrap";
import React,{useState} from "react";
import { useParams } from "react-router-dom";
import data from "../data";
import { useDispatch } from "react-redux";
import {addItem,delItem} from "../redux/actions/index"

export default function ProductDetail() {
  const proid = useParams();
  const dispatch = useDispatch()
  const [cartBtn, setCartBtn] = useState("Add to Cart")
  const ProDetail = data.filter((x) => x.id == proid.id);
  const product = ProDetail[0];
  console.log(product);
  const handleCart = () => {
    if(cartBtn === "Add to Cart") {
      dispatch(addItem(product))
      setCartBtn("Remove from Cart")
    }else {
      dispatch(delItem(product))
      setCartBtn("Add to Cart")
    }
  }
  return (
    <>
    {/* <img src={product.img} alt="hello" /> */}
      <div className="container mb-5 py-5">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center mx-auto product">
            <img src={product.img} alt={product.title} height="400px" />
          </div>
          <div className="col-md-6 d-flex flex-column">
            <h1 className="display-5 fw-bold">{product.title}</h1>
            <hr />
            <h2 className="my-4">
              ₹ {product.price}{" "}
              <strike className="fw-normal fs-6">₹ 1,789</strike>{" "}
              <span className="text-success fw-bold fs-6">60% Off</span>
            </h2>
            <p className="lead">{product.desc}</p>
            <div className="d-flex">
              <Button variant="outline-warning" className="btn me-2" onClick={() => handleCart(product)}>
                <i className="fa fa-shopping-cart"></i> {cartBtn}
              </Button>
              <Button variant="outline-primary" className="btn">
                <i className="fa fa-shopping-bag"></i> Buy Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
