import style from "./DateCell.module.scss";

interface DateCellProps {
  date: "" | Date;
}

const DateCell: React.FC<DateCellProps> = ({ date }) => {
  return (
    <div className={style["date-cell"]}>
      {date === "" ? "n/a" : date.getDate()}
    </div>
  );
};

export default DateCell;
