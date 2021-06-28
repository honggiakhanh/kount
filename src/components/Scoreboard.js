import React from "react";
import PlayerInfo from "./PlayerInfo";
import ScoreboardRound from "./ScoreboardRound";

const Scoreboard = ({
  game,
  setGame,
  matchcount,
  setMatchcount,
  editRound,
}) => {
  return (
    <div className="scoreboard-container">
      Scoreboard
      <div className="scoreboard">
        {matchcount === 0 ? (
          "Add a round to see the scoreboard"
        ) : (
          <ScoreboardRound
            game={game}
            setGame={setGame}
            matchcount={matchcount}
            setMatchcount={setMatchcount}
            editRound={editRound}
          />
        )}
        {matchcount === 0
          ? null
          : game.map((player) => (
              <PlayerInfo key={player.id} player={player} />
            ))}
      </div>
    </div>
  );
};

export default Scoreboard;
