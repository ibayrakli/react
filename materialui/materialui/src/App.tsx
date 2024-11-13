import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { LessonTypography } from "./components/LessonTypography";
import LessonButton from "./components/LessonButton";
import { LessonButtonGroup } from "./components/LessonButtonGroup";
import { LessonTextField } from "./components/LessonTextField";
import { LessonRadioGroup } from "./components/LessonRadioGroup";
import { LessonRadioGroupExample } from "./components/LessonRadioGroupExample";
import { LessonSelect } from "./components/LessonSelect";
import { LessonCheckbox } from "./components/LessonCheckbox";
import { LessonAutoComplete } from "./components/LessonAutoComplete";

function App() {
  return (
    <div className="App">
      {/* <LessonTypography /> */}
      {/* <LessonButton /> */}
      {/* <LessonButtonGroup /> */}
      {/* <LessonTextField /> */}
      {/* <LessonRadioGroup /> */}
      {/* <LessonRadioGroupExample /> */}
      {/* <LessonSelect /> */}
      {/* <LessonCheckbox /> */}
      <LessonAutoComplete />
    </div>
  );
}

export default App;
