import ExpenseItem from "./ExpenseItem"
import './ExpensesList.css'

export default function ExpensesList({ expenses }) {

    if (!expenses.length) {
        return <h2 className="expenses-list__fallback">No expenses found.</h2>
    }

    return (
        <ul className="expenses-list">
            {expenses.map(expense => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </ul>
    )
}