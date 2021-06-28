import React from "react";

const PlayerInfo = ({ player }) => {
  return (
    <div className="PlayerInfo">
      <div className="PlayerInfo-name">{player.name !== "" ? player.name : "?"}</div>
      <div className="PlayerInfo-text">Score</div>
      <div className="PlayerInfo-score">{player.score.map((point) => <div key={Math.random()*100000}>{point}</div>)}</div>
    </div>
  );
};

export default PlayerInfo;
