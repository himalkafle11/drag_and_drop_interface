import { useRef, useState } from "react";

function DragAndDrop({ data }) {
  const [list, setList] = useState();
  const [isDragging, setDragging] = useState(false);
  const draggedItem = useRef();

  const dragNode = useRef();

  const dragStartHandler = (e, params) => {
    console.log("drag starting", params);
    draggedItem.current = params;
    dragNode.current = e.target;
    dragNode.current.addEventListener("dragend", dragEndHandler);
    setTimeout(() => {
      setDragging(true);
    }, 0);
  };

  const dragEnterHandler = (e, params) => {
    console.log("drag enter", params);
    const currentItem = draggedItem.current;
    if (e.target !== dragNode.current) {
      console.log("same");
      setList((oldList) => {
        let newList = JSON.parse(JSON.stringify(oldList));
        let targetItem = draggedItem.current;
        newList[currentItem.groupIndex].items.splice(
          currentItem.itemIndex,
          0,
          newList[draggedItem.current.groupIndex].items.splice(
            draggedItem.current.itemIndex,
            1
          )[0]
        );
        localStorage.setItem("List", JSON.stringify(newList));
        return newList;
      });
    }
  };

  const dragEndHandler = () => {
    console.log("ending drag");
    setDragging(false);
    dragNode.current.removeEventListener("dragend", dragEndHandler);
    draggedItem.current = null;
    dragNode.current = null;
  };

  const getStyles = (params) => {
    const currentItem = draggedItem.current;
    if (
      currentItem.groupIndex === params.groupIndex &&
      currentItem.itemIndex === params.itemIndex
    ) {
      return "current dragItem";
    }
    return "dragItem";
  };

  return (
    <header className="appHeader">
      <div className="dragDrop">
        {data.map((firstSet, groupIndex) => {
          return (
            <div
              onDragEnter={
                isDragging && !firstSet.items.length
                  ? (e) => dragEnterHandler(e, { groupIndex, itemIndex: 0 })
                  : null
              }
              className="dragGroup"
            >
              <div key={groupIndex}>
                <div className="groupTitle">{firstSet.title}</div>
                {firstSet.childs.map((item, itemIndex) => {
                  return (
                    <div
                      draggable
                      onDragStart={(e) => {
                        dragStartHandler(e, { groupIndex, itemIndex });
                      }}
                      onDragEnter={
                        isDragging
                          ? (e) => {
                              dragEnterHandler(e, { groupIndex, itemIndex });
                            }
                          : null
                      }
                      className={
                        isDragging
                          ? getStyles({ groupIndex, itemIndex })
                          : "dragItem"
                      }
                      key={itemIndex}
                    >
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
