import React,{useState} from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import data from "../data";
import { addItem, delItem } from "../redux/actions/index";

export default function Product() {
  const dispatch = useDispatch();
  const [click,setClick] = useState("")



  const cardItem = (item) => {
    
    const handleCart = (item) => {
      dispatch(addItem(item))
      // if(item == "ADDITEM"){
      // }else {
      //   dispatch(delItem(item))
      // }
    }
  const handleHeart = () =>  {
    if(click === click) {
      alert("jelo")
    }
  }
    return (
      <Card key={item.id} style={{ width: "18rem" }} className="py-2 mb-5">
        <Card.Img variant="top" src={item.img} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.desc}</Card.Text>
          <Card.Text><span className="btn btn-success" >{item.rate} <i class="fa fa-star"></i></span> <span> (1,789) <i className="fa fa-eye"></i></span></Card.Text>
          <Card.Subtitle><span>₹ {item.price}</span>  <strike className="" style={{fontSize:"12px"}}>₹ 1,766</strike>  <span className="text-success" style={{fontSize:"12px"}}>60% Off</span></Card.Subtitle>
          <div className="d-flex mt-2 justify-content-between">
          <Button variant="outline-success" onClick={() => handleCart(item.id)}><i className="fa fa-shopping-cart"></i></Button>
          <Button variant="outline-danger" onClick={handleHeart}>{!click ? <i className="fa fa-heart"></i> :<i class="fa-solid fa-heart-crack"></i>}</Button>
          <NavLink to={`/products/${item.id}`} className="btn btn-outline-primary"><i className='fa fa-shopping-bag'></i> Buy Now</NavLink>
          </div>
        </Card.Body>
      </Card>
    );
  };
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Product</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-around">{data.map(cardItem)}</div>
      </div>
    </>
  );
}
