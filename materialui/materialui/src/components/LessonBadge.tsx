import React from "react";
import { Stack, Badge } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

export const LessonBadge = () => {
  return (
    <Stack direction="row" spacing={4}>
      <Badge badgeContent={13} color="primary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={41} max={40} color="primary">
        <MailIcon />
      </Badge>
      <Badge
        badgeContent={41}
        color="primary"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <MailIcon />
      </Badge>
      <Badge
        badgeContent={41}
        color="primary"
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <MailIcon />
      </Badge>
    </Stack>
  );
};
