import React, { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const yearHandler = (selectedYear) => {
    // console.log("Selected Year" + selectedYear);
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.expenses.filter((x) => {
    return x.date.getFullYear().toString() === filteredYear;
  });
  return (
    <div className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={yearHandler} />

      <ExpensesList items={filteredExpenses} />
      {/* <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      /> */}
    </div>
  );
}
