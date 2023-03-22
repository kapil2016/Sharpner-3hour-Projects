import Input from "../Inputs/Input";

import { useState } from "react";
const Form = (props) => {
  const [orderId, setOrderId] = useState("");
  const [price, setPrice] = useState("");
  const [productName, setProductName] = useState("");
  
  const orderIdHandler = (value) => {
    setOrderId(value);
  };
  const priceHandler = (value) => {
    setPrice(value);
  };

  const dishHandler = (value) => {
    setProductName(value);
  };
  
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (orderId !== '' && productName !=='' && price !== ''){
        props.onSubmit( { Id: orderId, Price: price, ProductName: productName })
        setOrderId("");
        setProductName("");
        setPrice("");
    
    }else{
        alert("please fill the form completely")
    }
    
  };

  return (
    <form onSubmit={formSubmitHandler} style={{ display: "flex" }}>
      <Input
        id="orderid"
        type="text"
        value={orderId}
        title=" Product ID:"
        onChange={orderIdHandler}
      ></Input>
      <Input
        id="orderid"
        type="number"
        value={price}
        title=" Selling Price: "
        onChange={priceHandler}
      ></Input>
      <Input
        id="orderid"
        type="text"
        value={productName}
        title=" Product Name : "
        onChange={dishHandler}
      ></Input>
      
      <button> Add Products </button>
    </form>
  );
};
export default Form;
