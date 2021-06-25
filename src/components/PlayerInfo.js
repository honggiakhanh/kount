import React from "react";

const PlayerInfo = ({ player }) => {
  return (
    <div>
      <div> {player.name}</div>
      Score
      <div className="player-score">{player.score.map((point) => <div key={Math.random()*100000}>{point}</div>)}</div>
    </div>
  );
};

export default PlayerInfo;
