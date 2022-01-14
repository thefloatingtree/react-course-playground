import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

export default function NewExpense({ onAddExpense }) {

    const onFormSubmit = (data) => {
        const expenseData = {
            ...data,
            id: Math.random().toString()
        }
        onAddExpense(expenseData)
    }

    return <div className='new-expense'>
        <ExpenseForm onSubmit={onFormSubmit} />
    </div>
}