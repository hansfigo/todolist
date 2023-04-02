import { } from 'react-icons/fa';
import Navbar from "./component/navbar";
import Section from "./component/section";
import TodoInput from './component/TodoInput';
import Todolist from './component/TodoList';


import React, {  useState } from 'react';


function App() {

  const [listTodo,setListTodo]=useState([]);

  // useEffect(()=>{
  //   const email = "amindailylife1976@gmail.com"
  //   const url = "https://todo.api.devcode.gethired.id/activity-groups?email="+email

  //   const getData = async ()=>{
  //    const data =  await fetch(url).then((res) => res.json())
  //         .then((data) => setListTodo(data["data"]))
  //   }

  //   getData()
    

    
  // },[])

  let addList = (inputText)=>{
    if(inputText!=='')
      setListTodo([...listTodo,inputText]);
  }
  
  const deleteListItem = (key)=>{
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }
    

  return (
   <div>
    <Navbar/>
    <div className="main-container">
      <div className="center-container">
        <TodoInput addList={addList}/>
       
       
        {listTodo.map((listItem,i)=>{
          return (
            <div>
            <p>{listItem.title}</p>
            <Todolist key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
            </div>
          )
        })}
      </div>
    </div>
    
    <Section/>
   

   </div>
  );
}

export default App;






