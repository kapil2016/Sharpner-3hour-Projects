import Input from "./Input";
import classes from "./Form.module.css";
import { useState } from "react";
const Form = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quanitityL, setQuanitityL] = useState("");
  const [quanitityM, setQuanitityM] = useState("");
  const [quanitityS, setQuanitityS] = useState("");

  const nameInputChangeHandler = (value) => {
    setName(value);
  };
  const descriptionInputChangeHandler = (value) => {
    setDescription(value);
  };
  const priceInputChangeHandler = (value) => {
    setPrice(value);
  };
  const quanitityLInputChangeHandler = (value) => {
    setQuanitityL(value);
  };
  const quanitityMInputChangeHandler = (value) => {
    setQuanitityM(value);
  };
  const quanititySInputChangeHandler = (value) => {
    setQuanitityS(value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault()
    const obj = {
      id : Date.now(),  
      name: name,
      description: description,
      price: price,
      quantityL: quanitityL,
      quantityM: quanitityM,
      quantityS: quanitityS,
    };
    setName('');
    setPrice('');
    setDescription('')
    setQuanitityL('')
    setQuanitityM('')
    setQuanitityS('')
    props.onSubmit(obj);
  };

  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <Input
        id="name"
        type="text"
        value={name}
        label="Shoe Name:"
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
      <Input
        id="L"
        type="number"
        value={quanitityL}
        label='Quantity "L":'
        onChange={quanitityLInputChangeHandler}
      ></Input>
      <Input
        id="M"
        type="number"
        value={quanitityM}
        label='Quantity "M" :'
        onChange={quanitityMInputChangeHandler}
      ></Input>
      <Input
        id="S"
        type="number"
        value={quanitityS}
        label='Quantity "S":'
        onChange={quanititySInputChangeHandler}
      ></Input>
      <button>Add Product</button>
    </form>
  );
};

export default Form;
