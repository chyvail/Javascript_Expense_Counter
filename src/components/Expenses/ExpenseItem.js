// this is our 1st component created. What to note; Its just a js function

import React, { useState } from "react"; // useState is a kind of React hook; these hooks tart with use keyword and must be called inside functions. Cant be calle outside
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {

  const [title, setTitle] = useState(props.title); //inorder to use it you just call it ; User state always stoes the value in an array 
  // the first value in the array is the original value, the second one is the updated one
  // this is the convention to use when using use state, the second value in the array should alwasy have state


  const clickHandler = () => { //this is an event listener ; On th button we are not using clickHandler() because we want it t run after displaying the card

    setTitle('Updated'); //by calling this, the component is reavaluated, draws any changes it detects, compare it to the last one and displays it 
    console.log(title); // thats because react renders once so with use state we can ask it to render the change
  };
  //4 props ; this can be used when getting data outside a component

  // N/B :==> you can only return one root element here not multiple

  
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem; //you need to export it to use it on another file
