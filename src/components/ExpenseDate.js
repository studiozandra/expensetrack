import './ExpenseItem.css';

function ExpenseDate(props) {

    const day = props.date.toLocaleDateString("en-us", { day: "numeric" });
    const month = props.date.toLocaleDateString("en-us", { month: "long" });
    const year = props.date.getFullYear();


    return (
        <div>
            <div>{day}</div>
            <div>{month}</div>
            <div>{year}</div>
        </div>

    );

}