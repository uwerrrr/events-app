import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import style from "./NavButton.module.scss";
import ViewDate from "../../scripts/ViewDateClass";

interface NavButtonProps {
  type: "next" | "previous" | "today";
  currViewDate: ViewDate;
  setViewDate: (newViewDate: ViewDate) => void;
}

const NavButton: React.FC<NavButtonProps> = ({
  type,
  currViewDate,
  setViewDate,
}) => {
  // create newViewDate -> update newViewDate -> set viewDate state
  const handleButtonClick = () => {
    let newViewDate = new ViewDate(new Date(currViewDate.date));
    if (type === "next") {
      newViewDate.nextMonth();
    } else if (type === "previous") {
      newViewDate.prevMonth();
    } else if (type === "today") {
      newViewDate.setToday();
    }
    setViewDate(newViewDate);
  };

  return (
    <>
      <button className={style.button} onClick={handleButtonClick}>
        {type === "next" && <FontAwesomeIcon icon={faChevronRight} />}
        {type === "previous" && <FontAwesomeIcon icon={faChevronLeft} />}
        {type === "today" && "Today"}
      </button>
    </>
  );
};

export default NavButton;
