const Input = (props)=>{
   const inputValueHandler = (e)=>{
     props.onChange(e.target.value);
   } 

    return (
       <div>
        <label htmlFor={props.id} >{props.title}</label>
        <input id = {props.id} type={props.type} value = {props.value} name ={props.name} onChange={inputValueHandler}></input>
       </div>
    );
}

export default Input ;