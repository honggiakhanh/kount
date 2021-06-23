import Scoreboard from "./components/Scoreboard";
import InputTable from "./components/InputTable";
import React, { useState } from "react";

function App() {
  const [game, setGame] = useState([
    {
      name: "Khanh",
      score: [1, 2, 3, 4, 5],
    },
  ]);
  const [matchcount, setMatchcount] = useState(0);
  // const submitPoint = (event) => {
  //   event.preventDefault();
  //   const newmatchcount = matchcount++;
  //   console.log(newmatchcount);
  //   setMatchcount(newmatchcount);
  // };
  //----------------------------------------------------------------
  const [playername, setPlayername] = useState("");
  const handleOnChange = (event) => {
    setPlayername(event.target.value);
  };
  const onAddPlayer = (event) => {
    event.preventDefault();
    console.log("add");
    const newscore = new Array(matchcount).fill(0);
    const newPlayer = {
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
        <InputTable game={game} />
        <Scoreboard game={game} />
      </div>
    </div>
  );
}

export default App;
