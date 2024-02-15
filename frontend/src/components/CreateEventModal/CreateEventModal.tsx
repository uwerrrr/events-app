import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import style from "./CreateEventModal.module.scss";

interface CreateEventModalProps {
  setShowModal: (arg0: boolean) => void;
}

const CreateEventModal: React.FC<CreateEventModalProps> = ({
  setShowModal,
}) => {
  return (
    <div className={style["modal-background"]}>
      <div className={style.close_btn}>
        <button
          onClick={() => {
            setShowModal(false);
          }}
        >
          <FontAwesomeIcon icon={faCircleXmark} size="lg" />
        </button>
      </div>
      CreateEventModal
    </div>
  );
};

export default CreateEventModal;
