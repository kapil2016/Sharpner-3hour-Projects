import classes from "./ProductItem.module.css";
import { useContext, useState } from "react";
import CartContext from "../Contexts/Cartcontext";

function updateCartAndOrders(orderList, quantity, props, callback) {
  const n = orderList.length;
  for (let i = 0; i <= n; i++) {
    if (i < n && props.item.id === orderList[i].id) {
      orderList[i].quantity += quantity;
      callback(orderList);
      break;
    } else if (i === n) {
      const obj = {
        id: props.item.id,
        name: props.item.name,
        price: props.item.price,
        quantity: quantity,
      };
      orderList.push(obj);
      callback(orderList);
      break;
    }
  }
  return;
}

const ProductItem = (props) => {
  const ctx = useContext(CartContext);
  const [inputValue, setInputValue] = useState(1);
  const orderList = [...ctx.orderList];

  const mediumClicked = () => {
    updateCartAndOrders(orderList, inputValue, props, ctx.setOrderList);
    console.log(orderList);
  };

  return (
    <div className={classes.product}>
      <p>{`${props.item.name} -  ${props.item.description} - RS. ${props.item.price} `}</p>
      <label htmlFor={props.item.id}  style={{
          margin: "0 0 0 50px",
        }} >{`  quantity`}</label>
      <input
        id={props.item.id}
        type="number"
        min={1}
        value={inputValue}
        onChange={(e) => {
          setInputValue(parseInt(e.target.value));
        }}
        style={{
          margin: "0 50px 0 10px",
          width: "40px",
          textAlign: "right",
        }}
      ></input>
      <button onClick={mediumClicked}>Add To Cart</button>
    </div>
  );
};
export default ProductItem;
