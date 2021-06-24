import React from "react";
import PlayerInfo from "./PlayerInfo";

const Scoreboard = ({ game }) => {
  return (
    <div className="scoreboard-container">
      Scoreboard
      <div className="scoreboard">
        {game.map((player) => (
          <PlayerInfo id={player.id} player={player} />
        ))}
      </div>
    </div>
  );
};

export default Scoreboard;
