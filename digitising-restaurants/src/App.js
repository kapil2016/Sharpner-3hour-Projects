import Input from "./components/Inputs/Input";
import { useState } from "react";
import Table from "./components/Inputs/Table";
import List from "./components/List/List";
function App() {
  const orderlist = JSON.parse(localStorage.getItem('orders')) === null ? [] : JSON.parse(localStorage.getItem('orders'));
  const [orderId, setOrderId] = useState("");
  const [price, setPrice] = useState("");
  const [dish, setDish] = useState("");
  const [table, setTable] = useState("table1");
  const [orders, setOrders] = useState(orderlist)
  
  const orderIdHandler = (value) => {
    setOrderId(value);
    console.log(value);
  };
  const priceHandler = (value) => {
    setPrice(value);
    console.log(value);
  };

  const dishHandler = (value) => {
    setDish(value);
    console.log(value);
  };
  const tableHandler = (value) => {
    setTable(value);
    console.log(value);
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    setOrders((prevOrders) => {
      const arr = [
        { Id: orderId, Price: price, Dish: dish, Table: table },
        ...prevOrders,
      ];
      localStorage.setItem("orders", JSON.stringify(arr));
      return arr;
    });
    setOrderId('');
    setDish('');
    setPrice('');
    setTable('table1');
  };
  function DeleteOrder(id) {
    setOrders((prevOrders) => {
      const arr = prevOrders.filter((item) => item.Id !== id);
      localStorage.setItem("orders", JSON.stringify(arr));
      return arr;
    });
  }

  return (
    <>
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
        <Table onChange={tableHandler}></Table>
        <button> ADD BILL </button>
      </form>
      <List
        key="table1"
        title="TABLE 1"
        items={orders.filter((item) => item.Table === "table1")}
        onDelete={DeleteOrder}
      ></List>
      <List
        key="table2"
        title="TABLE 2"
        items={orders.filter((item) => item.Table === "table2")}
        onDelete={DeleteOrder}
      ></List>
      <List
        key="table3"
        title="TABLE 3"
        items={orders.filter((item) => item.Table === "table3")}
        onDelete={DeleteOrder}
      ></List>
    </>
  );
}

export default App;
