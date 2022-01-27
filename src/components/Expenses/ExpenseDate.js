import './ExpenseDate.css';
const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" }); //normal js could also be used in JSX
  const year = props.date.toLocaleString("en-US", { year: "numeric" });
  const day = props.date.toLocaleString("en-US", { day: "numeric" });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}

export default ExpenseDate;
