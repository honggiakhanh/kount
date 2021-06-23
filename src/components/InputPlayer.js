import React, { useState } from "react";

const InputPlayer = ({ player }) => {
  const [score, setScore] = useState(0);
  const handleOnChange = (event) => {
    setScore(event.target.value);
  };
  return (
    <div>
      {player && <div>{player.name}</div>}
      <input type="text" value={score} onChange={handleOnChange}></input>
    </div>
  );
};

export default InputPlayer;
