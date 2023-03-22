import Form from "./components/Form/Form";
import { useState } from "react";

import List from "./components/List/List";
function App() {
  const totalworth =
    localStorage.getItem("totalWorth") !== null
      ? parseInt(localStorage.getItem("totalWorth"))
      : 0;
  const orderlist =
    JSON.parse(localStorage.getItem("orders")) === null
      ? []
      : JSON.parse(localStorage.getItem("orders"));

  const [orders, setOrders] = useState(orderlist);
  const [totalWorth, setTotalWorth] = useState(totalworth);

  function DeleteOrder(id) {
    let deletedItem = orders.filter((item) => item.Id === id)[0];
    setOrders((prevOrders) => {
      const arr = prevOrders.filter((item) => item.Id !== id);
      localStorage.setItem("orders", JSON.stringify(arr));
      return arr;
    });
    setTotalWorth((prev) => {
      const total = prev - parseInt(deletedItem.Price) ;
      localStorage.setItem("totalWorth", `${total}`);
      return total;
    });
  }
  const formSubmitHandler = (value) => {
    setOrders((prevOrders) => {
      const arr = [value, ...prevOrders];
      localStorage.setItem("orders", JSON.stringify(arr));
      return arr;
    });
    setTotalWorth((prev) => {
      const total = prev + parseInt(value.Price);
      localStorage.setItem("totalWorth", `${total}`);
      return total;
    });
  };
  return (
    <>
      <Form onSubmit={formSubmitHandler}></Form>
      <List title="Products" items={orders} onDelete={DeleteOrder}></List>
      <h2>Total Value Worth Of Products: {`Rs ${totalWorth}`}</h2>
    </>
  );
}

export default App;
