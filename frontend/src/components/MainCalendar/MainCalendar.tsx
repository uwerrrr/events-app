import { useEffect, useState } from "react";
import style from "./MainCalendar.module.scss";
import ViewDate from "../../scripts/ViewDateClass";
import NavButton from "../NavButton/NavButton";
import MonthGrid from "./MonthGrid/MonthGrid";

const MainCalendar = () => {
  const [viewDate, setViewDate] = useState<ViewDate>(new ViewDate(new Date()));

  useEffect(() => {});

  return (
    <>
      <section className={style["selection-section"]}>
        <NavButton
          direction={"previous"}
          currViewDate={viewDate}
          setViewDate={setViewDate}
        />
        <span className={style["month-text"]}>{viewDate.monthStr} </span>
        <span className={style["year-text"]}>{viewDate.year}</span>
        <NavButton
          direction={"next"}
          currViewDate={viewDate}
          setViewDate={setViewDate}
        />
      </section>
      <MonthGrid viewDate={viewDate} />
    </>
  );
};

export default MainCalendar;
