import { useEffect, useState } from "react";
import MainCalendar from "../../components/MainCalendar/MainCalendar";
import style from "./CalendarLoader.module.scss";

const CalendarLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  });

  return (
    <>
      {loading && <p className={style.loading}>Loading...</p>}
      {!loading && <MainCalendar />}
    </>
  );
};

export default CalendarLoader;
