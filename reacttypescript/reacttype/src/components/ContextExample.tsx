import React from "react";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ContextExample() {
  const theme = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme.primary.main,
        color: theme.secondary.text,
      }}
    >
      ContextExample
    </div>
  );
}

export default ContextExample;
