import React from "react";
import ViewDate from "../../../scripts/ViewDateClass";
import DateCell from "./DateCell/DateCell";
import styles from "./MonthGrid.module.scss";

interface MonthGridProps {
  viewDate: ViewDate;
}

const MonthGrid: React.FC<MonthGridProps> = ({ viewDate }) => {
  const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // create 2d array datesArr = [weekindex][dateindex]
  
  return (
    <div className="month-grid">
      <div className={styles["weekdays"]}>
        {weekdays.map((weekday, index) => (
          <div key={index} className={styles["weekday"]}>
            {weekday}
          </div>
        ))}
      </div>

      <DateCell />
    </div>
  );
};

export default MonthGrid;
