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
  const [knowledge, setKnowledge] = useState<string[]>([]);

  const handleKnowledgeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const index = knowledge.indexOf(event.target.value);

    if (index == -1) {
      setKnowledge([...knowledge, event.target.value]);
    } else {
      setKnowledge(knowledge.filter((item) => item != event.target.value));
    }
  };

  // console.log(isAccept);
  console.log(knowledge);

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
      <Box>
        <FormControl>
          <FormLabel>Frontend Knowledge</FormLabel>
          <FormGroup row>
            <FormControlLabel
              value="react"
              control={
                <Checkbox
                  checked={knowledge.includes("react")}
                  onChange={handleKnowledgeChange}
                />
              }
              label="React Js"
            />
            <FormControlLabel
              value="angular"
              control={
                <Checkbox
                  checked={knowledge.includes("angular")}
                  onChange={handleKnowledgeChange}
                />
              }
              label="Angular"
            />
            <FormControlLabel
              value="vue"
              control={
                <Checkbox
                  checked={knowledge.includes("vue")}
                  onChange={handleKnowledgeChange}
                />
              }
              label="Vue Js"
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};
