import React, {useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState(""); // the array here is destructuring; a way to obtain the two values in array; "" is used since no value exists in form from the start
    const [enteredAmount, setEnteredAmount ] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    const titleChangeHandler = (event) =>{ // we get this event automatically because of the onchange listener created
        setEnteredTitle(event.target.value); // this is an object, when you console log only (event) on browser you can see  taget and value 
        //console.log(event.target.value);
    };

    const amountChangeHandler = (event) =>{
      setEnteredAmount(event.target.value);
      //console.log(event.target.value);
    };

    const dateChangeHandler = (event) =>{
      setEnteredDate(event.target.value);
      //console.log(event.target.value);
    }

    const SubmitHandler = (event) =>{
      event.preventDefault(); //normally when on submit button is clicked, page reloads bcoz browser automatically sends get request ; you can prevent it with this method

      //gather our expense data in key-value pairs
      const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate)
      };

      //console.log(expenseData);

      props.onSaveExpenseData(expenseData);

      //clear our forms 
      setEnteredTitle(""); // To set it back into an empty string; we want upon form submission for the form to return to its original structure without values
      setEnteredAmount("");
      setEnteredDate("");
    }

  return (
    <div>
      <form onSubmit={SubmitHandler}> 
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label> {/* onchange function is called when user types into the form */}
            <input type="text" value={enteredTitle} onChange={titleChangeHandler}/> 
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" value={enteredAmount} onChange={amountChangeHandler} min="0.01" steps="0.01"/>
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" value={enteredDate} onChange={dateChangeHandler}  min="2019-01-01" max="2022-12-31"/>
          </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
