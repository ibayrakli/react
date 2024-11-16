import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

export const LessonAccordion = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      console.log(isExpanded);

      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      {/* <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>First Chapter</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          officiis molestias quis quod cumque sunt ad molestiae suscipit velit
          fuga ea ipsa vero nam delectus tenetur praesentium, culpa sit itaque.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Second Chapter</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          officiis molestias quis quod cumque sunt ad molestiae suscipit velit
          fuga ea ipsa vero nam delectus tenetur praesentium, culpa sit itaque.
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Third Chapter</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          officiis molestias quis quod cumque sunt ad molestiae suscipit velit
          fuga ea ipsa vero nam delectus tenetur praesentium, culpa sit itaque.
        </AccordionDetails>
      </Accordion> */}
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>First Chapter</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          officiis molestias quis quod cumque sunt ad molestiae suscipit velit
          fuga ea ipsa vero nam delectus tenetur praesentium, culpa sit itaque.
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Second Chapter</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          officiis molestias quis quod cumque sunt ad molestiae suscipit velit
          fuga ea ipsa vero nam delectus tenetur praesentium, culpa sit itaque.
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Third Chapter</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          officiis molestias quis quod cumque sunt ad molestiae suscipit velit
          fuga ea ipsa vero nam delectus tenetur praesentium, culpa sit itaque.
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
