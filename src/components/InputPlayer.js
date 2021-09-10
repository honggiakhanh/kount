import React from "react";
import "./InputPlayer.css";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';

const InputPlayer = ({ player, game, setGame, increment, setMatchcount }) => {
  const delPlayer = () => {
    setGame((prevState) => prevState.filter((n) => n.id !== player.id));
  };
  const incrementinput = (i) => {
    const newPlayerInputIncrement = {
      ...player,
      input: (player.input += Number(i)),
    };
    const updatedGame = game.map((player) =>
      player.id === newPlayerInputIncrement.id
        ? newPlayerInputIncrement
        : player
    );
    setGame(updatedGame);
  };
  return (
    <Grid container className="input-player-container" direction="row" justify="space-between" alignItems="center">
      <Grid item className="input-player-info">
        <div className="input-player-name">
          {player && <div>{player.name}</div>}
        </div>
        <IconButton
          size="small"
          className="input-player-del-button"
          onClick={() => delPlayer()}
        >
          <DeleteIcon size="small" />
        </IconButton>
      </Grid>
      <Grid className="input-player">
        <IconButton
          size="small"
          className="input-player-increment-button"
          onClick={() => incrementinput(-increment)}
        >
          -{increment}
        </IconButton>
        <Button
          size="large"
          className="input-player-input"
          onClick={null}
          color="primary"
        >
          {player.input}
        </Button>
        <IconButton
          size="small"
          className="input-player-increment-button"
          onClick={() => incrementinput(increment)}
        >
          +{increment}
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default InputPlayer;
