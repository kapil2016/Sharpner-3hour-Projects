import React from "react"
const CartContext = React.createContext(
    {
        orderList : [] ,
        setOrderList: ()=>{} ,
        productList : [] ,
        cartVisibility : false ,
        setCartVisibility : ()=>{},
        setProductList : ()=>{} ,
    }
)
export default CartContext ;