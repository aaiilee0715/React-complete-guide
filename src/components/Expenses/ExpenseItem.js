import React from 'react'

import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

const ExpenseItem = (props) => {
  //function clickHandler(){}

  //must be called inside component function
  //First state is the value, section state is setting a new state
  // const [title, setTitle] = useState(props.title)
  console.log('ExpenseItem evaluated by React')

  // let title = props.title

  // const clickHandler = () => {
  //   setTitle('Updated!')
  //   console.log(title)
  // }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        {/* <h2>{title}</h2> */}
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  )
}

export default ExpenseItem
