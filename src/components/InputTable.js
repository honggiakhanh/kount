import React from "react";
import InputPlayer from "./InputPlayer";

const InputTable = ({ game, setGame, matchcount, setMatchcount }) => {
  const onScoreSubmit = (event) => {
    event.preventDefault();
    const newGame = game.map(player => {
      const newPlayer = {
        ...player, score: player.score.concat(player.input), input: 0
      }
      return newPlayer;
    })
    setGame(newGame);
    const newmatchcount = matchcount + 1;
    setMatchcount(newmatchcount)
  }
  return (
    <div className="input-table-container">
      Input Table
      <form className="input-table" onSubmit={onScoreSubmit}>
          {game && game.map((player) => <InputPlayer key={player.id} player={player} game={game} setGame={setGame}/>)}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InputTable;
