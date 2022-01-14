import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

function Expenses({ items }) {

    const [filter, setFilter] = useState('2022')

    const handleFilterChange = (event) => {
        setFilter(event.target.value)
        console.log(event.target.value)
    }

    return (
        <Card className="expenses">
            <ExpensesFilter value={filter} onChange={handleFilterChange} />
            {items.map((expense, index) => (
                <ExpenseItem
                    key={index}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </Card>
    );
}

export default Expenses;