import React from "react";
import { CircularProgress, LinearProgress, Stack } from "@mui/material";

export const LessonSpinner = () => {
  return (
    <Stack spacing={2}>
      <CircularProgress />
      <CircularProgress color="secondary" />
      <CircularProgress color="success" />
      <CircularProgress variant="determinate" value={25} />
      <CircularProgress variant="determinate" value={100} />
      <LinearProgress />
      <LinearProgress color="secondary" />
      <LinearProgress color="success" />
      <LinearProgress variant="determinate" value={25} />
      <LinearProgress variant="determinate" value={50} />
    </Stack>
  );
};
