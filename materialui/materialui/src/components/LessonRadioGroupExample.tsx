import {
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormHelperText,
  Button,
} from "@mui/material";

import React, { useState } from "react";

export const LessonRadioGroupExample = () => {
  const [value, setValue] = useState("");
  const [helperText, setHelperText] = useState("");
  const [error, setError] = useState(false);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (value === "react") {
      setHelperText("Congrats, right answer!");
      setError(false);
    } else if (value === "angular") {
      setHelperText("Right answer is React");
      setError(false);
    } else {
      setHelperText("Please make selection");
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl error={error}>
        <FormLabel>Best Frontend Course ?</FormLabel>
        <RadioGroup onChange={handleRadioChange}>
          <FormControlLabel value="react" label="React" control={<Radio />} />
          <FormControlLabel
            value="angular"
            label="Angular"
            control={<Radio />}
          />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <Button type="submit" variant="outlined">
          {" "}
          Send
        </Button>
      </FormControl>
    </form>
  );
};
