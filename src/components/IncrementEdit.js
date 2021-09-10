import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const IncrementEdit = ({ increment, setIncrement }) => {
  const onIncrementChange = (event) => {
    setIncrement(event.target.value);
  };
  const onIncrementChangePre = (number) => {
    setIncrement(number);
  };
  return (
    <div className="increment-edit-container">
      <div className="increment-edit">Edit increment:</div>
      <TextField
        size="small"
        type="number"
        className="increment-edit-input"
        value={increment}
        onChange={onIncrementChange}
      />
      <ButtonGroup size="small" >
        <Button onClick={() => onIncrementChangePre(1)}>1</Button>
        <Button onClick={() => onIncrementChangePre(5)}>5</Button>
        <Button onClick={() => onIncrementChangePre(10)}>10</Button>
      </ButtonGroup>
    </div>
  );
};

export default IncrementEdit;
