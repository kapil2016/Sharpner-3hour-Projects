import Input from "../Inputs/Input";
import Table from "../Inputs/Table";
import { useState } from "react";
const Form = (props) => {
  const [orderId, setOrderId] = useState("");
  const [price, setPrice] = useState("");
  const [dish, setDish] = useState("");
  const [table, setTable] = useState("table1");
  const orderIdHandler = (value) => {
    setOrderId(value);
  };
  const priceHandler = (value) => {
    setPrice(value);
  };

  const dishHandler = (value) => {
    setDish(value);
  };
  const tableHandler = (value) => {
    setTable(value);
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (orderId !== '' && dish !=='' && price !== ''){
        props.onSubmit( { Id: orderId, Price: price, Dish: dish, Table: table })
        setOrderId("");
        setDish("");
        setPrice("");
        setTable("table1");
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
        title=" Unique OrderId:"
        onChange={orderIdHandler}
      ></Input>
      <Input
        id="orderid"
        type="number"
        value={price}
        title=" Choose Price: "
        onChange={priceHandler}
      ></Input>
      <Input
        id="orderid"
        type="text"
        value={dish}
        title=" Choose Dish: "
        onChange={dishHandler}
      ></Input>
      <Table selected={table} onChange={tableHandler}></Table>
      <button> ADD BILL </button>
    </form>
  );
};
export default Form;
