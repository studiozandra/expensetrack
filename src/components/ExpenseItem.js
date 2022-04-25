import './ExpenseItem.css';

function ExpenseItem(props) {

    return (
        <div className="expense-item">
            <div>{formatDate(props.date)}</div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </div>)
}

// format the date object
function formatDate(date) {
    var cdate = new Date(date);
    var options = {
        year: "numeric",
        month: "short",
        day: "numeric"
    };
    date = cdate.toLocaleDateString("en-us", options);
    return date;
};

export default ExpenseItem;