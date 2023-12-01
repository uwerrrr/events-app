import { useEffect, useState } from "react";
import ViewDate from "../../scripts/ViewDateClass";
import NavButton from "../NavButton/NavButton";
import MonthGrid from "./MonthGrid/MonthGrid";

const MainCalendar = () => {
  const [viewDate, setViewDate] = useState<ViewDate>(new ViewDate(new Date()));

  useEffect(() => {});

  return (
    <>
      <h2>
        <NavButton
          direction={"previous"}
          currViewDate={viewDate}
          setViewDate={setViewDate}
        />
        {viewDate.monthStr} {viewDate.year}
        <NavButton
          direction={"next"}
          currViewDate={viewDate}
          setViewDate={setViewDate}
        />
      </h2>
      <MonthGrid viewDate={viewDate} />
    </>
  );
};

export default MainCalendar;
