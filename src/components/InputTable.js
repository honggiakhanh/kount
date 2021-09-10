import React from "react";
import InputPlayer from "./InputPlayer";
import "./InputTable.css";
import Button from "@material-ui/core/Button";

const InputTable = ({
  game,
  setGame,
  matchcount,
  setMatchcount,
  increment,
  setIncrement,
}) => {
  const onScoreSubmit = (event) => {
    event.preventDefault();
    const newRound = game.map((player) => {
      const newPlayerScore = {
        ...player,
        score: player.score.concat(player.input),
        input: 0,
      };
      return newPlayerScore;
    });
    setGame(newRound);
    const newmatchcount = matchcount + 1;
    setMatchcount(newmatchcount);
  };
  return (
    <div className="input-table-container">
      <div className="input-table-title">Input Table</div>
      <form className="input-table-form" onSubmit={onScoreSubmit}>
        {game.map((player) => (
          <InputPlayer
            key={player.id}
            player={player}
            game={game}
            setGame={setGame}
            increment={increment}
          />
        ))}
        <Button className="input-table-button" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default InputTable;
