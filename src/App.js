import Scoreboard from "./components/Scoreboard";
import InputTable from "./components/InputTable";
import EditTable from "./components/EditTable";
import React, { useState } from "react";

function App() {
  const [game, setGame] = useState([]);
  //------------------------------
  const [matchcount, setMatchcount] = useState(0);
  //------------------------------
  const [playername, setPlayername] = useState("");
  const handleOnChange = (event) => {
    setPlayername(event.target.value);
  };
  const onAddPlayer = (event) => {
    event.preventDefault();
    console.log("add");
    const newscore = new Array(matchcount).fill(0);
    const newPlayer = {
      id: game.length + 1,
      name: playername,
      score: newscore,
      input: 0,
    };
    setGame(game.concat(newPlayer));
  };
  //------------------------------
  const [editstate, setEditstate] = useState({
    state: false,
    round: 0,
  });
  const editRound = (index) => {
    const newGame = game.map((player) => {
      return {
        ...player,
        input: player.score[index],
      };
    });
    const newState = {
      state: !editstate.state,
      round: index,
    };
    setGame(newGame);
    console.log("edit", game);
    setEditstate(newState);
  };
  //------------------------------
  return (
    <div className="app-container">
      <form className="app-addplayer-form" onSubmit={onAddPlayer}>
        <input
          className="app-addplayer-input"
          type="text"
          value={playername}
          onChange={handleOnChange}
        ></input>
        <button className="app-addplayer-button" type="submit">
          Add Player
        </button>
      </form>
      <div className="app-main">
        {editstate.state ? (
          <EditTable
            game={game}
            setGame={setGame}
            editstate={editstate}
            setEditstate={setEditstate}
          />
        ) : (
          <InputTable
            game={game}
            setGame={setGame}
            matchcount={matchcount}
            setMatchcount={setMatchcount}
          />
        )}
        <Scoreboard
          game={game}
          setGame={setGame}
          matchcount={matchcount}
          setMatchcount={setMatchcount}
          editstate={editstate}
          setEditstate={setEditstate}
          editRound={editRound}
        />
      </div>
    </div>
  );
}

export default App;
