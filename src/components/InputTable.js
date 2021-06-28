import React, {useState} from "react";
import InputPlayer from "./InputPlayer";
import IncrementEdit from "./IncrementEdit";

const InputTable = ({ game, setGame, matchcount, setMatchcount }) => {
  const [increment, setIncrement] = useState(1)
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
      <div className="input-table">Input Table</div>
      <form className="input-table-form" onSubmit={onScoreSubmit}>
        {game &&
          game.map((player) => (
            <InputPlayer
              key={player.id}
              player={player}
              game={game}
              setGame={setGame}
              increment={increment}
            />
          ))}
        {game.length === 0 ? (
          "Add a player to add scores"
        ) : (
          <button className="input-table-button" type="submit">Submit</button>
        )}
      </form>
      <IncrementEdit increment={increment} setIncrement={setIncrement}/>
    </div>
  );
};

export default InputTable;
