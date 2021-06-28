import React from "react";
import InputPlayer from "./InputPlayer";

const EditTable = ({game, setGame, editstate, setEditstate}) => {
  console.log("edit table", game)
  const edit = (event) => {
    const newGame = game.map(player => {
      const newScore = player.score.map((score, index) => index === editstate.round ? player.input : score)
      return {...player, score: newScore, input: 0}
    })
    setGame(newGame)
    const newState = {
      state: !editstate.state,
      round: 0
    }
    setEditstate(newState)
  }
  return (
    <div className="input-table-container">
      Edit Table
      <form className="input-table">
        {game.length && game.map((player) => (
          <InputPlayer
            key={player.id}
            player={player}
            game={game}
            setGame={setGame}
          />
        ))}
        <button onClick={(event) => edit()} type="submit">Edit</button>
      </form>
    </div>
  );
};

export default EditTable;
