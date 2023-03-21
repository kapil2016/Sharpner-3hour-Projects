const Table = (props) => {
    const tableChangeHandler = (e)=>{
      props.onChange(e.target.value);
    }
  return (
    <>
      <label htmlFor="tables">Select a table:</label>
      <select id="tables" onChange={tableChangeHandler}>
        <option value="table1">Table 1</option>
        <option value="table2">Table 2</option>
        <option value="table3">Table 3</option>
      </select>
    </>
  );
};
export default Table;
