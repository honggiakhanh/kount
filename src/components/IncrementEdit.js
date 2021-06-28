import React from "react";

const IncrementEdit = ({ increment, setIncrement }) => {
  const onIncrementChange = (event) => {
    setIncrement(event.target.value);
  };
  return (
    <div className="increment-edit-container">
      <div className="increment-edit">Edit increment:</div>
      <input
        className="increment-edit-input"
        value={increment}
        onChange={onIncrementChange}
      />
    </div>
  );
};

export default IncrementEdit;
