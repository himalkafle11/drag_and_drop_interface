import { useState, useEffect } from "react";
import "./App.css";
import DragAndDrop from "./components/dragAndDrop";

const givenData = [
  { title: "Column A", childs: ["A1", "A2", "A3"] },
  { title: "Column B", childs: ["B1", "B2", "B3"] },
  { title: "Column C", childs: ["C1", "C2", "C3"] },
];

function App() {
  const [data, setData] = useState();
  useEffect(() => {
    if (localStorage.getItem("List")) {
      console.log(localStorage.getItem("List"));
      setData(JSON.parse(localStorage.getItem("List")));
    } else {
      setData(givenData);
    }
  }, [setData]);
  return (
    <div className="App">
      <DragAndDrop data={data} />
    </div>
  );
}

export default App;
