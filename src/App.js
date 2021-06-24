import Scoreboard from "./components/Scoreboard";
import InputTable from "./components/InputTable";
import React, { useState, useEffect } from "react";

function App() {
  const [game, setGame] = useState([
    {
      id: 1,
      name: "Khanh",
      score: [1, 2, 3, 4, 5],
      input: 0,
    },
  ]);

  useEffect(() => {
    console.log(game);
  }, [game]);

  //----------------------------------------------------------------
  const [playername, setPlayername] = useState("");
  const handleOnChange = (event) => {
    setPlayername(event.target.value);
  };
  const onAddPlayer = (event) => {
    event.preventDefault();
    console.log("add");
    const newscore = new Array(5).fill(0);
    const newPlayer = {
      id: game.length + 1,
      name: playername,
      score: newscore,
    };
    setGame(game.concat(newPlayer));
  };
  //--------------------------------------------------------
  return (
    <div className="container">
      <form className="form" onSubmit={onAddPlayer}>
        <input type="text" value={playername} onChange={handleOnChange}></input>
        <button type="submit">Add Player</button>
      </form>
      <div className="main">
        <InputTable game={game} setGame={setGame}/>
        <Scoreboard game={game} />
      </div>
    </div>
  );
}

export default App;
