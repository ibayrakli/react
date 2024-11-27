import React from "react";
import { Tooltip, IconButton } from "@mui/material";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export const LessonToolTip = () => {
  return (
    <Tooltip title="Delete" placement="right">
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
};
