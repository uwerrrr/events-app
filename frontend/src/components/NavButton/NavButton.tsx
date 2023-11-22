import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import style from "./NavButton.module.scss";

interface NavButtonProps {
  direction: "next" | "previous";
}

const NavButton: React.FC<NavButtonProps> = ({ direction }) => {
  return (
    <>
      {direction === "next" && (
        <button className={style.button} onClick={() => {}}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      )}

      {direction === "previous" && (
        <button className={style.button} onClick={() => {}}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      )}
    </>
  );
};

export default NavButton;
