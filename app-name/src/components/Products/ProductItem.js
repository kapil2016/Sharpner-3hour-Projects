import classes from './ProductItem.module.css'
import { useContext } from 'react';
import CartContext from '../Contexts/Cartcontext';

function updateCartAndOrders (productList , orderList , quantityType , props , callback){
    productList.forEach((item) =>{
        if(item.id === props.item.id){
            const quan = parseInt(item[quantityType])
            if (quan >= 1){
                item[quantityType] = quan - 1
                const n = orderList.length
                for (let i = 0 ; i <= n ; i++){
                    if (i<n && props.item.id === orderList[i].id){
                        orderList[i][quantityType] += 1 ;
                        callback(orderList)
                        break ;
                    }else if (i===n){
                        const obj ={id : props.item.id  , name : props.item.name , price:props.item.price , quantityL: 0 , quantityM: 0 , quantityS : 0 }
                        obj[quantityType] = 1 
                        orderList.push( obj);
                        callback(orderList)
                       break ;
                    }
                }
                return ;
            }  
        }
    })
    
  
    }

const ProductItem = (props)=>{
    const ctx = useContext(CartContext) ;
    const orderList = [...ctx.orderList] ;
    const productList = ctx.productList ;
   

    const largeClicked = ()=>{      
          updateCartAndOrders(productList , orderList , 'quantityL' , props , ctx.setOrderList) ;  
          console.log(orderList);    
    }
    const mediumClicked = ()=>{
          updateCartAndOrders(productList , orderList , 'quantityM' , props , ctx.setOrderList) ; 
          console.log(orderList); 
    }
    const smallClicked = ()=>{
          updateCartAndOrders(productList , orderList , 'quantityS' , props , ctx.setOrderList) ; 
          console.log(orderList); 
    }


    return (
        <div className={classes.product}>
            <p>{`${props.item.name} -${props.item.description} - ${props.item.price} `}</p>
            <button onClick={largeClicked}>{`Buy Large ( ${props.item.quantityL} )`}</button>
            <button onClick={mediumClicked}>{`Buy Medium ( ${props.item.quantityM} )`}</button>
            <button onClick={smallClicked}>{`Buy Small ( ${props.item.quantityS} )`}</button>
        </div>
    )
}
export default ProductItem ;