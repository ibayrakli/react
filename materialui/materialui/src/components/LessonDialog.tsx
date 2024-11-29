import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  DialogTitle,
} from "@mui/material";

import { useState } from "react";

export const LessonDialog = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      {" "}
      <Button onClick={() => setDialogOpen(true)}>Open Dialog</Button>
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Which one?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Which frontend framework do you like the most?
          </DialogContentText>
          <DialogActions>
            <Button onClick={() => setDialogOpen(false)}>Angular</Button>
            <Button onClick={() => setDialogOpen(false)}>React</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
};
