function DragAndDrop({ data }) {
  return (
    <header className="appHeader">
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
    </header>
  );
}

export default DragAndDrop;
