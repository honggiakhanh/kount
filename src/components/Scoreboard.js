import React from "react";
import Container from "@material-ui/core/Container";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import useStyles from "./Scoreboard-style";

const Scoreboard = ({
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

  const classes = useStyles();

  return (
    <Container
      maxWidth="lg"
      disableGutters={true}
      className="scoreboard-container"
    >
      <div className="scoreboard-text">Scoreboard</div>
      <Paper elevation={0} style={{ overflowX: "auto" }}>
        <Table>
          <TableHead>
            <TableCell className={classes.roundname}>Round</TableCell>
            {game.map((player) => {
              return (
                <TableCell key={player.name} align="right">
                  {player.name}
                </TableCell>
              );
            })}
          </TableHead>
          {game[0].score.map((player, index) => {
            return (
              <TableRow>
                <TableCell>
                  <ButtonGroup variant="text">
                    <IconButton
                      className="Scoreboard-round-edit"
                      onClick={() => editRound(index)}
                      size="small"
                    >
                      <EditIcon fontSize="small" />
                    </IconButton>
                    <Button
                      size="small"
                      className="Scoreboard-round-number"
                      onClick={null}
                      className={classes.round}
                    >
                      {game[0].score.length - index}
                    </Button>
                    <IconButton
                      aria-label="delete"
                      className="Scoreboard-round-delete"
                      onClick={() => delRound(index)}
                      size="small"
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </ButtonGroup>
                </TableCell>
                {game.map((player) => {
                  return (
                    <TableCell align="right">
                      {player.score[game[0].score.length - index - 1]}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </Table>
      </Paper>
    </Container>
  );
};

export default Scoreboard;
