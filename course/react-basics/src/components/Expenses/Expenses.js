import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses({ items }) {

    const [filter, setFilter] = useState('2022')

    const handleFilterChange = (event) => {
        setFilter(event.target.value)
        console.log(event.target.value)
    }

    const filteredExpenses = items.filter(expense => new Date(expense.date).getFullYear().toString() === filter)

    return (
        <Card className="expenses">
            <ExpensesFilter value={filter} onChange={handleFilterChange} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList expenses={filteredExpenses} />
        </Card>
    );
}

export default Expenses;