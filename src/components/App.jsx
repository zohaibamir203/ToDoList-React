import React from "react";
import Heading from "./Heading";
import UnOrderedList from "./UnOrderedList";

function App() {
  const [items, setItem] = React.useState({
    item: "",
    itemList: []
  });

  function itemHandler(event) {
    let newItem = event.target.value;
    setItem((prevState) => {
      return {
        item: newItem,
        itemList: prevState.itemList
      };
    });
  }
  function addItem() {
    setItem((prevState) => {
      return {
        item: prevState.item,
        itemList: [...prevState.itemList, prevState.item]
      };
    });
  }

  return (
    <div className="container">
      <Heading />
      <div className="form">
        <input type="text" onChange={itemHandler} value={items.item} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <UnOrderedList list={items.itemList} />
    </div>
  );
}

export default App;
