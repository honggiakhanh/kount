import React from "react";

const InputPlayer = ({ player, game, setGame }) => {
  return (
    <div>
      {player && <div>{player.name}</div>}
      <input
        value={player.input}
        onChange={(e) => {
          const newPlayer = {...player, input: e.target.value}
          const newGame = game.map(player => player.id === newPlayer.id ? newPlayer : player)
          return setGame(newGame)
        }}
      />
    </div>
  );
};

export default InputPlayer;
