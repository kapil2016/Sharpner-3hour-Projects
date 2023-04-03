import classes from "./CartItem.module.css";
const CartItem = (props) => {
  const { quantity, name, price } = props.item;
  const totalprice = price * (quantity);

  return (
    <div className={classes["cart-item"]}>
       <p>{name}</p> 
       <p>{quantity}</p>
       
       <p>{`${totalprice}`}</p>
    </div>
  );
};
export default CartItem;
