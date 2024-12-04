import React from "react";
import Stack from "@mui/material/Stack";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TextField } from "@mui/material";
import { useState } from "react";
import { Dayjs } from "dayjs";
import { TimePicker } from "@mui/x-date-pickers";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";

export const LessonDateTime = () => {
  const [value, setValue] = useState<Dayjs | null>(null);
  console.log(value);
  return (
    <Stack>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {/* <DatePicker
          label="Date"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
        /> */}
        <TimePicker
          label="Time"
          viewRenderers={{
            hours: renderTimeViewClock,
            minutes: renderTimeViewClock,
            seconds: renderTimeViewClock,
          }}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
        />
      </LocalizationProvider>
    </Stack>
  );
};
