import { useEffect, useState } from "react";
import { ViewDate } from "../../scripts/classes";
import NavButton from "../NavButton/NavButton";

const MainCalendar = () => {
  const [viewDate, setViewDate] = useState<ViewDate>(new ViewDate(new Date()));

  useEffect(() => {});

  return (
    <>
      <div>Main Calendar</div>
      <h2>
        <NavButton direction={"previous"} />
        {viewDate.monthStr} {viewDate.year}
        <NavButton direction={"next"} />
      </h2>
      <div>{/* date cells */}</div>
    </>
  );
};

export default MainCalendar;