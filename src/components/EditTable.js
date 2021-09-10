import React from "react";
import InputPlayer from "./InputPlayer";
import Button from "@material-ui/core/Button";

const EditTable = ({ game, setGame, editstate, setEditstate, increment, setIncrement }) => {
  const edit = (event) => {
    const newGame = game.map((player) => {
      const newScore = player.score.map((score, index) =>
        index === editstate.round ? player.input : score
      );
      return { ...player, score: newScore, input: 0 };
    });
    setGame(newGame);
    const newState = {
      state: !editstate.state,
      round: 0,
    };
    setEditstate(newState);
  };
  return (
    <div className="input-table-container">
      <div className="input-table">Edit Table</div>
      <form className="input-table-form">
        {game.length &&
          game.map((player) => (
            <InputPlayer
              key={player.id}
              player={player}
              game={game}
              setGame={setGame}
              increment={increment}
            />
          ))}
        <Button className="input-table-button" onClick={() => edit()}>
          Edit
        </Button>
      </form>
    </div>
  );
};

export default EditTable;
