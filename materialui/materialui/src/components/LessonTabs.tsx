import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { TabList } from "@mui/lab";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import { useState } from "react";

export const LessonTabs = () => {
  const [value, setValue] = useState("0");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <TabList onChange={handleChange}>
        <Tab label="First" value="0" />
        <Tab label="Second" value="1" />
        <Tab label="Third" value="2" />
      </TabList>

      <TabPanel value="0">Firsttt</TabPanel>
      <TabPanel value="1">Secondd</TabPanel>
      <TabPanel value="2">Thirdd</TabPanel>
    </TabContext>
  );
};
