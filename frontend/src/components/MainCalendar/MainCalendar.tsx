import { useEffect, useState } from "react";
import style from "./MainCalendar.module.scss";
import ViewDate from "../../scripts/ViewDateClass";
import NavButton from "../NavButton/NavButton";
import MonthGrid from "./MonthGrid/MonthGrid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const MainCalendar = () => {
  const [viewDate, setViewDate] = useState<ViewDate>(new ViewDate(new Date()));

  useEffect(() => {});

  return (
    <>
      <div className={style["calendar-head"]}>
        <section className={style["month-year-section"]}>
          <span className={style["month-text"]}>{viewDate.monthStr} </span>
          <span className={style["year-text"]}>{viewDate.year}</span>
          <button className={style["add-btn"]}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </section>

        <section className={style["selection-section"]}>
          <NavButton
            type={"previous"}
            currViewDate={viewDate}
            setViewDate={setViewDate}
          />
          <NavButton
            type={"today"}
            currViewDate={viewDate}
            setViewDate={setViewDate}
          />
          <NavButton
            type={"next"}
            currViewDate={viewDate}
            setViewDate={setViewDate}
          />
        </section>
      </div>
      <MonthGrid viewDate={viewDate} />
    </>
  );
};

export default MainCalendar;
