import React, { useRef, useEffect } from "react";
import "./style.scss";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
function Popup({ message, notificationType, isModalOpen, closeModalPopup }) {
  return (
    <div>
      <Dialog
        open={isModalOpen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className={notificationType}
      >
        <DialogTitle>{notificationType}</DialogTitle>
        <DialogContent>
          <DialogContentText>{message}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => closeModalPopup()}>OK</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default Popup;
