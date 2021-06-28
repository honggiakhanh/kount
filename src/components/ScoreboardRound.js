import React from "react";

const ScoreboardRound = ({
  game,
  setGame,
  matchcount,
  setMatchcount,
  editRound,
}) => {
  const delRound = (index) => {
    const newGame = game.map((player) => {
      return {
        ...player,
        score: player.score.filter((a, i) => i !== index),
      };
    });
    const newMatchcount = matchcount - 1;
    setGame(newGame);
    setMatchcount(newMatchcount);
  };
  return (
    <div>
      <div className="Scoreboard-text">Name</div>
      <div className="Scoreboard-text">Round</div>
      <div className="Scoreboard-round-container">
        {game[0] &&
          game[0].score.map((a, index) => {
            return (
              <div className="Scoreboard-round" style={{ display: "flex" }}>
                <div className="Scoreboard-round-delete" onClick={() => delRound(index)}>(del)</div>
                <div className="Scoreboard-round-single" key={Math.random() * 100000}>{index + 1}</div>
                <div className="Scoreboard-round-edit" onClick={() => editRound(index)}>(edit)</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ScoreboardRound;
