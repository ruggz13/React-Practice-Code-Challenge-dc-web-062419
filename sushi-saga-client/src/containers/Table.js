import React, { Fragment } from "react";

const Table = props => {
  // debugger;
  const renderPlates = array => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }} />;
    });
  };

  // let remainingBalance = props.budget

  return (
    <Fragment>
      <h1 className="remaining">You have: ${props.budget} remaining!</h1>
      <div className="table">
        <div className="stack">
          {/* 
               renderPlates takes an array 
               and renders an empty plate
               for every element in the array
            */
          renderPlates(props.eatenSushisArray)}
        </div>
      </div>
    </Fragment>
  );
};

export default Table;
