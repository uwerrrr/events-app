import { useState } from "react";
import { createPortal } from "react-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import style from "./AddButton.module.scss";
import CreateEventModal from "../CreateEventModal/CreateEventModal";

const AddButton = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <button className={style["add-btn"]} onClick={openModal}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
      {showModal && createPortal(<CreateEventModal />, document.body)}
    </>
  );
};

export default AddButton;
