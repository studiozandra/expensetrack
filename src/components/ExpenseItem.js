import './ExpenseItem.css';

function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>April 13, 2022</div>
            <div className="expense-item__description">
                <h2>Poke burrito</h2>
                <div className="expense-item__price">$29.98</div>
            </div>
        </div>)
}

export default ExpenseItem;