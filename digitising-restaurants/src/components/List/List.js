const List = (props) => {
  const deleteItemHandler =(e)=>{
    props.onDelete(e.target.id);
  }
  return (
    <>
      <h2>{props.title}</h2>
      <ul>
        {props.items.map((item) => {
          return (
            <div key={item.Id} style={{display:"flex"}}>
              <li >
               {`${item.Price} - ${item.Table} - ${item.Dish}`}
              </li>{" "}
              <button id={item.Id} onClick={deleteItemHandler}> Delete Order</button>
            </div>
          );
        })}
      </ul>
    </>
  );
};
export default List;
