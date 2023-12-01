import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import style from "./NavButton.module.scss";
import { ViewDate } from "../../scripts/classes";

interface NavButtonProps {
  direction: "next" | "previous";
  currViewDate: ViewDate;
  setViewDate: (newViewDate: ViewDate) => void;
}

const NavButton: React.FC<NavButtonProps> = ({
  direction,
  currViewDate,
  setViewDate,
}) => {
  // create newViewDate -> update newViewDate -> set viewDate state
  const handleButtonClick = () => {
    const newViewDate = new ViewDate(new Date(currViewDate.viewDate));
    if (direction === "next") {
      newViewDate.nextMonth();
    } else if (direction === "previous") {
      newViewDate.prevMonth();
    }

    setViewDate(newViewDate);
  };

  return (
    <>
      <button className={style.button} onClick={handleButtonClick}>
        {direction === "next" ? (
          <FontAwesomeIcon icon={faChevronRight} />
        ) : (
          <FontAwesomeIcon icon={faChevronLeft} />
        )}
      </button>
    </>
  );
};

export default NavButton;
