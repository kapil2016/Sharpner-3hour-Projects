import classes from "./CartItem.module.css";
const CartItem = (props) => {
  const { name, price , count } = props.item;
  const totalprice = price * count

  return (
    <div className={classes["cart-item"]}>
       <p>{name}</p> 
       <p>{`Total Price Of ${count} Candy ( ${price}Rs. / candy) `}</p>
       <p>{`${totalprice}`}</p>
    </div>
  );
};
export default CartItem;
