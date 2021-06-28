import React from "react";

const InputPlayer = ({ player, game, setGame, increment }) => {
  const delRound = () => {
    setGame((prevState) => prevState.filter((n) => n.id !== player.id));
  };
  const incrementinput = (i) => {
    const newPlayerInputIncrement = {
      ...player,
      input: (player.input += i),
    };
    const updatedGame = game.map((player) =>
      player.id === newPlayerInputIncrement.id
        ? newPlayerInputIncrement
        : player
    );
    setGame(updatedGame);
  };
  const handleOnChange = (e) => {
    const newPlayerInput = { ...player, input: e.target.value };
    const updatedGame = game.map((player) =>
      player.id === newPlayerInput.id ? newPlayerInput : player
    );
    return setGame(updatedGame);
  };
  return (
    <div className="input-player-container">
      <div className="input-player-delete">
        {player && <div>{player.name}</div>}
        <div onClick={() => delRound()}>(del)</div>
      </div>
      <div className="input-player">
        <div
          className="increment-button"
          onClick={() => incrementinput(-increment)}
        >
          -{increment}
        </div>
        <input
          className="input-player-input"
          type="number"
          value={player.input}
          onChange={(e) => handleOnChange(e)}
        />
        <div
          className="increment-button"
          onClick={() => incrementinput(increment)}
        >
          +{increment}
        </div>
      </div>
    </div>
  );
};

export default InputPlayer;
