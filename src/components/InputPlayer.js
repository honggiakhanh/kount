import React from "react";

const InputPlayer = ({ player, game, setGame }) => {
  const delRound = () => {
    setGame((prevState) => prevState.filter((n) => n.id !== player.id));
  };
  const increment = (i) => {
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
  }
  return (
    <div className="input-player-container">
      <div className="input-player-info">
        {player && <div>{player.name}</div>}
        <div onClick={() => delRound()}>(del)</div>
      </div>
      <div className="input-player">
        <div className="increment-button" onClick={() => increment(-1)}>
          -1
        </div>
        <input
          type="number"
          value={player.input}
          onChange={(e) => handleOnChange(e)}
        />
        <div className="increment-button" onClick={() => increment(1)}>
          +1
        </div>
      </div>
    </div>
  );
};

export default InputPlayer;
