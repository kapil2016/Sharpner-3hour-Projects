import classes from './ProductItem.module.css'
import { useContext } from 'react';
import CartContext from '../Contexts/Cartcontext';

function updateCartAndOrders (orderList , quantityType , props , callback){
                const n = orderList.length
                for (let i = 0 ; i <= n ; i++){
                    if (i<n && props.item.id === orderList[i].id){
                        orderList[i].count += quantityType ;
                        callback(orderList)
                        break ;
                    }else if (i===n){
                        const obj ={id : props.item.id  , name : props.item.name , price:props.item.price , count: quantityType}
                        orderList.push( obj);
                        callback(orderList)
                       break ;
                    } 
            }  
        }

const ProductItem = (props)=>{
    const ctx = useContext(CartContext) ;
    const orderList = [...ctx.orderList] ;

    const buyOneClicked = ()=>{      
          updateCartAndOrders(orderList , 1 , props , ctx.setOrderList) ;  
          console.log(orderList);    
    }
    const buyTwoClicked = ()=>{
          updateCartAndOrders(orderList , 2, props , ctx.setOrderList) ; 
          console.log(orderList); 
    }
    const buyThreeCicked = ()=>{
          updateCartAndOrders(orderList , 3 , props , ctx.setOrderList) ; 
          console.log(orderList); 
    }


    return (
        <div className={classes.product}>
            <p>{`${props.item.name} -${props.item.description}  Rs. ${props.item.price} `}</p>
            <button onClick={buyOneClicked}>Buy One</button>
            <button onClick={buyTwoClicked}>Buy Two</button>
            <button onClick={buyThreeCicked}>Buy Three</button>
        </div>
    )
}
export default ProductItem ;