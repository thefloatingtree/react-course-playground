import './Expenses.css';
import ExpenseItem from './ExpenseItem';

function Expenses({ items }) {
    return (
        <div className="expenses">
            {items.map(expense => (
                <ExpenseItem
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </div>
    );
}

export default Expenses;