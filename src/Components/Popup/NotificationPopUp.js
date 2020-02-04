import React, { useState, useEffect } from "react";
import Popup from "./Index";

function NotificationPopUp() {
  const [notificationType, setNotificationType] = useState("");
  const [msgType, setMsgType] = useState("success");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const decideMsgType = (notificationType, msg) => {
    setNotificationType(notificationType);
    setMsgType(msg);
    setIsModalOpen(true);
  };
  const closeModalPopup = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const handleClick = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <button
        onClick={() => decideMsgType("success", "successfully added mesage")}
      >
        success modal
      </button>
      <button onClick={() => decideMsgType("error", "something went wrong")}>
        error modal
      </button>
      <button
        onClick={() =>
          decideMsgType("warning", "Write your warning message here")
        }
      >
        Warning modal
      </button>

      <Popup
        message={msgType}
        notificationType={notificationType}
        isModalOpen={isModalOpen}
        closeModalPopup={closeModalPopup}
      />
    </div>
  );
}
export default NotificationPopUp;
