import React from "react";

const InputPlayer = ({ player, game, setGame }) => {
  return (
    <div className="input-player-container">
      <div className="input-player-info">
        {player && <div>{player.name}</div>}
        <div
          onClick={() => {
            setGame((prevState) => prevState.filter((n) => n.id !== player.id));
          }}
        >
          (del)
        </div>
      </div>
      <div className="input-player">
        <div
          className="increment-button"
          onClick={() => {
            const newScore = { ...player, input: (player.input += 1) };
            const newGame = game.map((player) =>
              player.id === newScore.id ? newScore : player
            );
            setGame(newGame);
          }}
        >
          +1
        </div>
        <input
          type="number"
          value={player.input}
          onChange={(e) => {
            const newPlayer = { ...player, input: e.target.value };
            const newGame = game.map((player) =>
              player.id === newPlayer.id ? newPlayer : player
            );
            return setGame(newGame);
          }}
        />
        <div
          className="increment-button"
          onClick={() => {
            const newScore = { ...player, input: (player.input -= 1) };
            const newGame = game.map((player) =>
              player.id === newScore.id ? newScore : player
            );
            setGame(newGame);
          }}
        >
          -1
        </div>
      </div>
    </div>
  );
};

export default InputPlayer;
