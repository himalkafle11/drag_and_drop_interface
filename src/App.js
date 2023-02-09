import "./App.css";
import DragAndDrop from "./components/dragAndDrop";

const data = [
  { title: "Column A", childs: ["A1", "A2", "A3"] },
  { title: "Column B", childs: ["B1", "B2", "B3"] },
  { title: "Column C", childs: ["C1", "C2", "C3"] },
];

function App() {
  return (
    <div className="App">
      <DragAndDrop data={data} />
      {/* <header className="appHeader">
        <div className="dragDrop">
          {data.map((firstSet) => {
            return (
              <div className="dragGroup">
                <div key={firstSet.title}>
                  <div className="groupTitle">{firstSet.title}</div>
                  {firstSet.childs.map((item, index) => {
                    return (
                      <div className="dragItem" key={index}>
                        {item}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </header> */}
    </div>
  );
}

export default App;
