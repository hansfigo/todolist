import React from "react";

const TodoList = (props) => {

    const date = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);
    return ( 
    <div className="card-container">
        <div className="card-item">
        <li className="list-item">
        {props.item}
        
    </li>

    <span className='icons'>
        <i className="fa-solid fa-trash-can icon-delete" 
        onClick={e=>{
            props.deleteItem(props.index)
        }}></i>
        </span>
    
    </div>
    <div className="date">
      <h1> {formattedDate}</h1>
    </div>
  </div>
     );
}
 
export default TodoList;