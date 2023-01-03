import { Alert, AlertColor, Snackbar } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";

type NotificationProps = {
  open: boolean;
  msg: string;
  severity: AlertColor | undefined;
  handleClose: () => void;
};
export const Notification: React.FC<NotificationProps> = ({
  open,
  msg,
  severity,
  handleClose,
}) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      autoHideDuration={400}
      open={open}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={severity}>
        <Typography>{msg}</Typography>
      </Alert>
    </Snackbar>
  );
};
