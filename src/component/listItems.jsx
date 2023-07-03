import React from "react";

function ListItems(props) {
  return props.list ? (
    props.list.map((item) => {
      return (
        <div key={item.id}>
          <h1>{`${item.first_name} ${item.last_name}`}</h1>
        </div>
      );
    })
  ) : (
    <h1>Loading...</h1>
  );
}

export default ListItems;
