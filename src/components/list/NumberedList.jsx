import React from "react";

export function NumberedList({
  items,
  resourceName,
  itemComponent: ItemComponent
}) {
  return (
    <>
      {items.map((item, i) => (
        <React.Fragment key={i}>
          <h3>{i + 1}</h3>
          <ItemComponent {...{ [resourceName]: item }} />
        </React.Fragment>
      ))}
    </>
  );
}
