import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";

export const LessonSelect = () => {
  const [country, setCountry] = useState("");
  console.log(country);

  return (
    <Box width="250px">
      <TextField
        label="Select Country"
        select
        fullWidth
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      >
        <MenuItem value="TR">Türkiye</MenuItem>
        <MenuItem value="USA">USA</MenuItem>
        <MenuItem value="FR">France</MenuItem>
      </TextField>
    </Box>
  );
};
