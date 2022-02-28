import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  //useState return two elements in array
  //first is variable
  //second is function to set new value
  // const [title, setTitle] = useState(props.title);
  // console.log('ExpenseItem evaluated by React');
  // const clickHandler = () => {
  //   setTitle("Updated!!");
  //   //console.log(title);
  // };
  return (
    <div className="expense-item">
      
      <div><ExpenseDate date={props.date}/></div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">Rs{props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </div>
  );
}

export default ExpenseItem;
