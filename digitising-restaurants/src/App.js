import Form from "./components/Form/Form";
import { useState } from "react";

import List from "./components/List/List";
function App() {
  const orderlist =
    JSON.parse(localStorage.getItem("orders")) === null
      ? []
      : JSON.parse(localStorage.getItem("orders"));

  const [orders, setOrders] = useState(orderlist);

  function DeleteOrder(id) {
    setOrders((prevOrders) => {
      const arr = prevOrders.filter((item) => item.Id !== id);
      localStorage.setItem("orders", JSON.stringify(arr));
      return arr;
    });
  }
  const formSubmitHandler = (value) => {
    setOrders((prevOrders) => {
      const arr = [value,...prevOrders];
      localStorage.setItem("orders", JSON.stringify(arr));
      return arr;
    });
  };
  return (
    <>
      <Form onSubmit={formSubmitHandler}></Form>
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
