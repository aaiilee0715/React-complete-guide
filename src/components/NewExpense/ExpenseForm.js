import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = () => {
  //Can have more then 1 state set per component
  const [enteredTitle, setEnteredTitle] = useState('') //sate variable
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')

  //useState once while passing in the object if they are under same div
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // })

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value)
    // console.log(event.target.value)
    // enteredTitle: event.target.value,
    //this is to ensure the other value does not go away
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // })

    //If your state update depends on the previous state,
    //use this function form below
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredTitle: event.target.value,
    //   }
    // })
  }

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // })
  }

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // })
  }

  const sumbitHandler = (event) => {
    //manually collect and combine data
    event.preventDefault() //stay on current page without reload

    const expenseData = {
      title: enteredTitle, //pointing to the state variables
      amount: enteredAmount,
      date: new Date(enteredDate),
    }
    console.log(expenseData)

    //two-way binding
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
  }

  return (
    <form onSubmit={sumbitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="sumbit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
