interface DateCellProps {
  date: "" | Date;
}

const DateCell: React.FC<DateCellProps> = ({ date }) => {
  return <div>{date === "" ? "n/a" : date.getDate()}</div>;
};

export default DateCell;
