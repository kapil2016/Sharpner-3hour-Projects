import Input from "./Input";
import classes from "./Form.module.css";
import { useState } from "react";
const Form = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");


  const nameInputChangeHandler = (value) => {
    setName(value);
  };
  const descriptionInputChangeHandler = (value) => {
    setDescription(value);
  };
  const priceInputChangeHandler = (value) => {
    setPrice(value);
  };


  const formSubmitHandler = (e) => {
    e.preventDefault()
    const obj = {
      id : Date.now(),  
      name: name,
      description: description,
      price: price,

    };
    setName('');
    setPrice('');
    setDescription('')

    props.onSubmit(obj);
  };

  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <Input
        id="name"
        type="text"
        value={name}
        label="Medicine Name:"
        onChange={nameInputChangeHandler}
      ></Input>
      <Input
        id="description"
        type="text"
        value={description}
        label="Description:"
        onChange={descriptionInputChangeHandler}
      ></Input>
      <Input
        id="price"
        type="number"
        value={price}
        label="Price:"
        onChange={priceInputChangeHandler}
      ></Input>



      <button>Add Product</button>
    </form>
  );
};

export default Form;
