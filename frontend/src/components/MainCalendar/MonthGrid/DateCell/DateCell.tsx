import style from "./DateCell.module.scss";
import { isToday } from "../../../../scripts/myFunctions";

interface DateCellProps {
  date: "" | Date;
}

const DateCell: React.FC<DateCellProps> = ({ date }) => {
  const dayOfWeek = date ? date.getDay() : undefined;

  return (
    <div
      className={`
      ${style["date-cell"]} 
      ${
        dayOfWeek === 0 || dayOfWeek === 6 ? style["weekend"] : style["weekday"]
      }
       `}
    >
      <p className={date && isToday(date) ? style["today"] : ""}>
        {date && date.getDate()}
      </p>
    </div>
  );
};

export default DateCell;
