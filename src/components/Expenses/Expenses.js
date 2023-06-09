import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {

  const [filteredYear, setFilteredYear] =  useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  const selectedYearExpenses = props.items.filter(item => item.date.getFullYear() === Number(filteredYear));

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected = {filteredYear} onFilterChange = {filterChangeHandler} />
        <ExpensesChart expenses = {selectedYearExpenses} />
        <ExpensesList items = {selectedYearExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
