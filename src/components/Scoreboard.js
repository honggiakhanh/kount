import React from "react";
import PlayerInfo from "./PlayerInfo";
import ScoreboardRound from "./ScoreboardRound";

const Scoreboard = ({ game, setGame }) => {
  return (
    <div className="scoreboard-container">
      Scoreboard
      <div className="scoreboard">
        <ScoreboardRound game={game} setGame={setGame}/>
        {game.map((player) => (
          <PlayerInfo key={player.id} player={player} />
        ))}
      </div>
    </div>
  );
};

export default Scoreboard;
