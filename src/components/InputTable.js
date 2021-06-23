import React from "react";
import InputPlayer from "./InputPlayer";

const InputTable = ({ game }) => {
  return (
    <div className="input-table-container">
      Input Table
      <form className="input-table">
        {game && game.map((player) => <InputPlayer player={player} />)}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InputTable;
