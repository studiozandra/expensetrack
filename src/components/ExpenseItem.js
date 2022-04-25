import './ExpenseItem.css';

function ExpenseItem() {
    const expenseDate = new Date(2022, 4, 16);
    const expenseTitle = 'Car insurance';
    const expenseAmount = 28.0;

    return (
        <div className="expense-item">
            <div>{formatDate(expenseDate)}</div>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">${expenseAmount}</div>
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