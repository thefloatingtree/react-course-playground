import { useState } from 'react'
import './ExpenseForm.css'

export default function ExpenseForm({ onSubmit }) {

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')

    const titleChangeHandler = (event) => {
        setTitle(event.target.value)
    }
    
    const amountChangeHandler = (event) => {
        setAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()

        const formData = {
            title,
            amount,
            date: new Date(date)
        }

        setTitle('')
        setAmount('')
        setDate('')

        onSubmit(formData)
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input onChange={titleChangeHandler} value={title} type="text" />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input onChange={amountChangeHandler} value={amount} type="number" min="0.01" step="0.01" />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input onChange={dateChangeHandler} value={date} type="date" min="2019-01-01" step="2022-12-31" />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}