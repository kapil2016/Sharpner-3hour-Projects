import CartItem from "./CartItem";
import classes from './Cart.module.css'
import CartContext from "../Contexts/Cartcontext";
import { useContext } from "react";

const Cart = ()=>{
    const ctx = useContext(CartContext)
    const orderList = ctx.orderList;
    const list = orderList.map((product)=>{
        return <CartItem key = {product.id} item = {product}></CartItem>
    })

    const cancelOrder = ()=>{
        ctx.setCartVisibility(false)
    }
    const orderPalced = ()=>{
        ctx.setCartVisibility(false)
       ctx.setOrderList([])
    }
    let totalAmount = 0 ;
    orderList.forEach((item)=>{
        totalAmount += item.price * (item.quantityL + item.quantityM + item.quantityS)
    })

    return (
        <div>
            {list}

            <div className={classes['cart-buttons']} >
                {`Total Amount:  ${totalAmount}`}
            </div>
            <div className={classes['cart-buttons']}>
            <button className={classes.button} onClick={cancelOrder}>Cancel</button>
            <button className={classes.button} onClick={orderPalced}>Place Order</button>
            </div>
        </div>
    )
}
export default Cart ;