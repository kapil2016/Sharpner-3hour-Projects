import Form from "./components/Form/Form";
import { useEffect, useRef, useState } from "react";
import ProductItem from "./components/Products/ProductItem";
import CartContext from "./components/Contexts/Cartcontext";
import CartModal from "./components/Modal/CartModal";
import Cart from "./components/Cart/Cart";
const endpoint = '4f84159152ae454aad0ee5151f393cc3' ;
async function getOrderList(){
  const response = await fetch(`https://crudcrud.com/api/${endpoint}/mycart`)
  const data = await response.json()
  return data ;
}
async function createCart(){
  const response = await fetch(`https://crudcrud.com/api/${endpoint}/mycart`,{
    method:'POST',
    headers:{'Content-Type' : 'application/json'},
    body: JSON.stringify({orderList : []})
  })
  const data = await response.json()
  return data ;
}
async function updateCart(id , data){
 const resopnse = await fetch(`https://crudcrud.com/api/${endpoint}/mycart/${id}`,{
    method:'PUT',
    headers:{'Content-Type' : 'application/json'},
    body: JSON.stringify({orderList : data})
  })
  if(!resopnse.ok){
    console.log('error accoured')
  }
  const resdata = await resopnse.json();
  return resdata ;
}



function App() {
  const crudcrudUpdateID = useRef('')
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
  useEffect(()=>{
    getOrderList().then((data)=>{
      if(data[0]){
        crudcrudUpdateID.current = data[0]['_id']
        setOrderList(data[0].orderList)
        console.log(crudcrudUpdateID)
      }else{
        createCart().then(data=>{
          crudcrudUpdateID.current = data[0]['_id']
          console.log(crudcrudUpdateID)
        })
        console.log('no cart is avilable')
      }
      
      console.log(data)})
  },[])

  useEffect(()=>{
    if(orderList.length!==0)
    updateCart(crudcrudUpdateID.current ,orderList)
  },[orderList])


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
    cartItemCount += (item.quantity) 
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
