import React from "react";

function listItems(list) {
  return list.map((items) => {
    return <div>{items}</div>;
  });
}

export default listItems;
