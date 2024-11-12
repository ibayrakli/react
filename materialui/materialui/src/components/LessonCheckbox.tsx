import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
  FormHelperText,
} from "@mui/material";
import { useState } from "react";

export const LessonCheckbox = () => {
  const [isAccept, setIsAccept] = useState(false);

  console.log(isAccept);

  return (
    <Box>
      <Box>
        <FormControl>
          <FormLabel>Education Status</FormLabel>
          <FormGroup row>
            <FormControlLabel
              disabled
              control={<Checkbox />}
              label="Primary School"
            />
            <FormControlLabel control={<Checkbox />} label="High School" />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="University"
            />
          </FormGroup>
        </FormControl>
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Accepted Terms</FormLabel>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={isAccept}
                  onChange={(e) => setIsAccept(e.target.checked)}
                />
              }
              label="By clicking, you agree to our terms and conditions."
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};
