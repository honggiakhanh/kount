import Scoreboard from "./components/Scoreboard";
import InputTable from "./components/InputTable";
import React, { useState, useEffect } from "react";

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
  return (
    <div className="container">
      <form className="form" onSubmit={onAddPlayer}>
        <input type="text" value={playername} onChange={handleOnChange}></input>
        <button type="submit">Add Player</button>
      </form>
      <div className="main">
        <InputTable game={game} setGame={setGame} matchcount={matchcount} setMatchcount={setMatchcount}/>
        <Scoreboard game={game} setGame={setGame} matchcount={matchcount}/>
      </div>
    </div>
  );
}

export default App;
