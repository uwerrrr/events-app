import React from "react";
import ViewDate from "../../../scripts/ViewDateClass";
import DateCell from "./DateCell/DateCell";
import styles from "./MonthGrid.module.scss";

interface MonthGridProps {
  viewDate: ViewDate;
}

const MonthGrid: React.FC<MonthGridProps> = ({ viewDate }) => {
  const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // create 2d array datesArr = [weekIndex][dayIndex]
  const daysInWeek = weekdays.length;
  const weeksInMonthFull = Math.ceil(
    (viewDate.daysInMonth + viewDate.monthFirstDay) / 7
  );

  let datesArr: ("" | Date)[][] = Array.from(
    { length: weeksInMonthFull },
    (_) => Array.from({ length: daysInWeek }, (_) => "")
  );

  let date = 1;
  datesArr = datesArr.map((week, weekIndex) =>
    week.map((_, dayIndex) => {
      if (weekIndex === 0 && dayIndex < viewDate.monthFirstDay) {
        return "";
      } else if (date > viewDate.monthLastDate) {
        return "";
      } else {
        const result = new Date(viewDate.year, viewDate.month, date);
        date++;
        return result;
      }
    })
  );
  /* datesArr of Nov 2023
  0 ["", "", 1, 2, 3, 4, 5] (7)
  1 [6, 7, 8, 9, 10, 11, 12] (7)
  2 [13, 14, 15, 16, 17, 18, 19] (7)
  3 [20, 21, 22, 23, 24, 25, 26] (7)
  4 [27, 28, 29, 30, "", "", ""] (7) 
  */

  return (
    <div className="month-grid">
      <div className={styles["weekdays"]}>
        {weekdays.map((weekday, index) => (
          <div key={index} className={styles["weekday"]}>
            <p>{weekday}</p>
          </div>
        ))}
      </div>
      <div>
        <div className={styles["date-grid"]}>
          {datesArr.map((week, weekIndex) => (
            <div key={weekIndex} className={styles["week-grid"]}>
              {week.map((date, dayIndex) => (
                <DateCell key={dayIndex} date={date} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MonthGrid;
