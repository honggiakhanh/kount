import React from "react";

const ScoreboardRound = ({ game, setGame }) => {
  return (
    <div>
      <div>Name</div>
      <div>Round</div>
      <div className="player-score">
        {game[0] &&
          game[0].score.map((a, index) => {
            return (
              <div style={{display: "flex"}}>
                <div key={Math.random() * 100000}>{index + 1}</div>
                <div
                  onClick={() => {
                    const newGame = game.map((player) => {
                      return {
                        ...player,
                        score: player.score.filter((a, i) => i !== index),
                      };
                    });
                    setGame(newGame);
                  }}
                >
                  (del)
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ScoreboardRound;
