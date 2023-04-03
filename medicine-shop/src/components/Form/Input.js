import classes from './Input.module.css'
const Input = (props)=>{
    const iputChangeHandler = (e)=>{
        props.onChange(e.target.value);
    }

    return (
        <div className={classes['input-box']}>
            <label htmlFor={props.id}>{props.label}</label>
            <input id = {props.id} value={props.value} onChange={iputChangeHandler} type={props.type} name={props.name} ></input>
        </div>
    )
}

export default Input ;