import React, { useState } from "react";
import { Button, Snackbar, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export const LessonSnackbar = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleClick = () => {
    setOpenSnackbar(true);
  };

  const handleClose = () => {
    setOpenSnackbar(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        Undo
      </Button>
      <IconButton>
        <CloseIcon sx={{ color: "white" }} onClick={handleClose} />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Button onClick={handleClick}>Open Snackbar</Button>
      <Snackbar
        open={openSnackbar}
        message="An error occured"
        action={action}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      />
    </div>
  );
};
