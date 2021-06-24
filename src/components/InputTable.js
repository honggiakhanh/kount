import React from "react";
import InputPlayer from "./InputPlayer";

const InputTable = ({ game, setGame }) => {
  return (
    <div className="input-table-container">
      Input Table
      <form className="input-table">
          {game && game.map((player) => <InputPlayer id={player.id} player={player} game={game} setGame={setGame}/>)}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InputTable;
