import { useEffect, useState } from "react";
import { SelectedDate } from "../../scripts/classes";
import NavButton from "../NavButton/NavButton";

const MainCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<SelectedDate>(
    new SelectedDate(new Date())
  );

  useEffect(() => {});

  return (
    <>
      <div>Main Calendar</div>
      <h2>
        <NavButton direction={"previous"} />
        {selectedDate.monthStr} {selectedDate.year}
        <NavButton direction={"next"} />
      </h2>
    </>
  );
};

export default MainCalendar;
