import classes from "./CartItem.module.css";
const CartItem = (props) => {
  const { quantityL, quantityM, quantityS, name, price } = props.item;
  const totalprice = price * (quantityL + quantityM + quantityS);

  return (
    <div className={classes["cart-item"]}>
       <p>{name}</p> 
       <p>{`${quantityL > 0 ? `${quantityL} L` : ""}`}</p>
       <p>{`${quantityM > 0 ? `${quantityM} M` : ""}`}</p>
       <p>{`${quantityS > 0 ? `${quantityS} S` : ""}`}</p>
       <p>{`${totalprice}`}</p>
    </div>
  );
};
export default CartItem;
