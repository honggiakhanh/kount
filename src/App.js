import Scoreboard from "./components/Scoreboard";
import InputTable from "./components/InputTable";
import EditTable from "./components/EditTable";
import IncrementEdit from "./components/IncrementEdit";
import React, { useState, useEffect } from "react";
import "./App.css";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import AddBoxIcon from "@material-ui/icons/AddBox";
import Container from "@material-ui/core/Container";

function App() {
  const [game, setGame] = useState([]);
  //------------------------------
  const [matchcount, setMatchcount] = useState(0);
  //------------------------------
  const [playername, setPlayername] = useState("");
  const handleOnChange = (event) => {
    setPlayername(event.target.value);
  };
  useEffect(() => {
    if(game.length === 0){
      setMatchcount(0);
    }
  }, [game.length])
  const onAddPlayer = (event) => {
    event.preventDefault();
    const newscore = new Array(matchcount).fill(0);
    const newPlayer = {
      id: game.length + 1,
      name: playername,
      score: newscore,
      input: Number(0),
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
        input: player.score[game[0].score.length - index - 1],
      };
    });
    const newState = {
      state: !editstate.state,
      round: game[0].score.length - index - 1,
    };
    setGame(newGame);
    console.log("edit", game);
    setEditstate(newState);
  };
  //------------------------------
  const [increment, setIncrement] = useState(Number(1));
  //------------------------------
  return (
    <Container disableGutters={true} className="app-container">
      <Container>
        <p className="title">Kount</p>
        <p className="subtitle">add a player and start counting</p>
      </Container>
      <form className="app-addplayer-form" onSubmit={onAddPlayer}>
        <TextField
          variant="outlined"
          color="primary"
          type="text"
          label="Add player"
          value={playername}
          onChange={handleOnChange}
          className="app-addplayer-input"
          size="small"
        />
        <IconButton size="small" className="app-addplayer-button" type="submit">
          <AddBoxIcon size="small" />
        </IconButton>
      </form>
      <Container className="app-main">
        {game.length === 0 ? null : <IncrementEdit increment={increment} setIncrement={setIncrement} />}
        {game.length === 0 ? null : editstate.state ? (
          <EditTable
            game={game}
            setGame={setGame}
            editstate={editstate}
            setEditstate={setEditstate}
            increment={increment}
            setIncrement={setIncrement}
          />
        ) : (
          <InputTable
            game={game}
            setGame={setGame}
            matchcount={matchcount}
            setMatchcount={setMatchcount}
            increment={increment}
            setIncrement={setIncrement}
          />
        )}
        {game.length === 0 ? null : (
          <Scoreboard
            game={game}
            setGame={setGame}
            matchcount={matchcount}
            setMatchcount={setMatchcount}
            editstate={editstate}
            setEditstate={setEditstate}
            editRound={editRound}
          />
        )}
      </Container>
    </Container>
  );
}

export default App;
