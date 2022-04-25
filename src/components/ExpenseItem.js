import './ExpenseItem.css';
import './ExpenseDate.js';

function ExpenseItem(props) {
    const day = props.date.toLocaleDateString("en-us", { day: "numeric" });
    const month = props.date.toLocaleDateString("en-us", { month: "long" });
    const year = props.date.getFullYear();

    return (
        <div className="expense-item">
            <ExpenseDate date={props.date} />

            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </div>)
}


export default ExpenseItem;