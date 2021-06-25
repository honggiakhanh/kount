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
            const newPlayerInputIncrement = { ...player, input: (player.input += 1) };
            const updatedGame = game.map((player) =>
              player.id === newPlayerInputIncrement.id ? newPlayerInputIncrement : player
            );
            setGame(updatedGame);
          }}
        >
          +1
        </div>
        <input
          type="number"
          value={player.input}
          onChange={(e) => {
            const newPlayerInput = { ...player, input: e.target.value };
            const updatedGame = game.map((player) =>
              player.id === newPlayerInput.id ? newPlayerInput : player
            );
            return setGame(updatedGame);
          }}
        />
        <div
          className="increment-button"
          onClick={() => {
            const newPlayerInputIncrement = { ...player, input: (player.input -= 1) };
            const updatedGame = game.map((player) =>
              player.id === newPlayerInputIncrement.id ? newPlayerInputIncrement : player
            );
            setGame(updatedGame);
          }}
        >
          -1
        </div>
      </div>
    </div>
  );
};

export default InputPlayer;
