import Form from "./components/Form/Form";
import { useState } from "react";
import ProductItem from "./components/Products/ProductItem";
import CartContext from "./components/Contexts/Cartcontext";
import CartModal from "./components/Modal/CartModal";
import Cart from "./components/Cart/Cart";

function App() {
  const[productList , setProductList] = useState([]);
  const [orderList , setOrderList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ctxObj = {
    orderList : orderList ,
    setOrderList: setOrderList ,
    productList : productList ,
    cartVisibility: isModalOpen,
    setCartVisibility: setIsModalOpen,
    setProductList : setProductList
  }
  const formSubmitHandler = (value) => {
    setProductList((prevList)=>{
      return [value , ...prevList]
    })
  } 
  
  const ShowProducts = productList.map((product)=>{
   return  <ProductItem key = {product.id} item ={product} ></ProductItem>
  })
  let cartItemCount = 0 ;
  orderList.forEach((item)=>{
    cartItemCount += (item.quantityL + item.quantityM + item.quantityS) 
  })
 
  return (
      <>
      <CartContext.Provider value = {ctxObj}>
      {isModalOpen && <CartModal>
      <Cart></Cart>
      </CartModal> } 
      <button style={{float:'right'}} onClick={()=>setIsModalOpen(true)}>{`My Cart ${cartItemCount}`} </button>
      <Form onSubmit = {formSubmitHandler}></Form>
      {ShowProducts}
      </CartContext.Provider>
      </>
       
  );
}

export default App;
