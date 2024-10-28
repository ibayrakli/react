import { stringify } from "querystring";
import "./App.css";
import Home from "./components/Home";
import Instructor from "./components/Instructor";
import InstructorList from "./components/InstructorList";

function App() {
  const instructor = {
    firstName: "Jane",
    lastName: "Doe",
  };

  const instructorList = [
    {
      firstName: "Jane",
      lastName: "Doe",
    },
    {
      firstName: "John",
      lastName: "Doe",
    },
    {
      firstName: "Jack",
      lastName: "Doe",
    },
  ];

  return (
    <div className="App">
      <Home name="Welcome" courseNumber={13} isBest={true} />
      <Instructor instructorNameLastName={instructor} />
      <InstructorList instructorNameLastNameList={instructorList} />
    </div>
  );
}

export default App;
