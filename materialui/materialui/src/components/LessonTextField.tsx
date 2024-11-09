import { Stack, TextField, InputAdornment } from "@mui/material";
import { useState } from "react";

export const LessonTextField = () => {
  const [value, setValue] = useState("");

  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" />
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
        <TextField label="Name" variant="outlined" size="small" color="error" />
        <TextField
          label="Name"
          variant="outlined"
          helperText="Please enter your name"
        />
        <TextField
          type="password"
          label="Password"
          variant="outlined"
          helperText="Please enter your password"
        />
        <TextField
          disabled
          label="Name"
          variant="outlined"
          helperText="Please enter your name"
        />
        <TextField
          label="Name"
          variant="outlined"
          helperText="Please enter your name"
          slotProps={{
            input: {
              readOnly: true,
            },
          }}
        />
        <TextField
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">TL</InputAdornment>
              ),
            },
          }}
          label="Total"
          variant="outlined"
        />
        <TextField
          slotProps={{
            input: {
              endAdornment: <InputAdornment position="end">TL</InputAdornment>,
            },
          }}
          label="Total"
          variant="outlined"
        />
      </Stack>
      <Stack direction="row">
        <TextField
          onChange={(e) => setValue(e.target.value)}
          value={value}
          type="password"
          label="Password"
          variant="outlined"
          helperText={
            !value ? "Please enter your password" : "Do not share your password"
          }
        />
      </Stack>
    </Stack>
  );
};
