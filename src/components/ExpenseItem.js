import './ExpenseItem.css';

function ExpenseItem() {
    const expenseDate = new Date(2022, 4, 16);
    const expenseTitle = 'Car insurance';
    const expenseAmount = 28.0;

    return (
        <div className="expense-item">
            <div>{expenseDate.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">${expenseAmount}</div>
            </div>
        </div>)
}

export default ExpenseItem;