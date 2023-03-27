import React from 'react';

import classes from './CartModal.module.css';

function CartModal(props) {
  const handleClose = ()=>{
    props.onClose(false);
  }  
 
  return (
    <>
        <div className={classes['modal-wrapper']}>
          <div className={classes['modal-backdrop']}/>
          <div className={classes.modal}>
            <div className={classes["modal-header"]}>
              <h2>Place Order</h2>
              <button className={classes["modal-close-btn"]} onClick={handleClose}>
              </button>
            </div>
            <div className={classes["modal-body"]}>{props.children}</div>
          </div>
       </div>
    </>
  );
}

export default CartModal;
