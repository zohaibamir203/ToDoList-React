import React from "react";
import List from "./List";

function UnOrderedList(props) {
  var items = props.list;
  return (
    <div>
      <ul>
        {items.map((listItem) => {
          return <List item={listItem} />;
        })}
      </ul>
    </div>
  );
}

export default UnOrderedList;
