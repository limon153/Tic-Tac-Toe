import React from 'react';
import Button from 'material-ui/Button/Button';
import injectSheet from 'react-jss';

import TurnCard from './TurnCard';
import ResetDialog from './ResetDialog';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: 16,
    position: 'relative',
  },
  statistic: {
    display: 'inline-block',
    padding: 20,
  },
  button: {
    margin: 20,
  },
};

const TopMenu = props => {
  let player1Hidden = true,
    player2Hidden = true;
  if (props.gameState === 'game') {
    player1Hidden = props.isPlayer1Next ? false : true;
    player2Hidden = props.isPlayer1Next ? true : false;
  }
  const player1Name = props.gameMode === 'single' ? 'Player' : 'Player 1';
  const player2Name = props.gameMode === 'single' ? 'Bot' : 'Player 2';

  return (
    <div className={props.classes.container}>
      <TurnCard hidden={player1Hidden} player={player1Name} />
      <TurnCard hidden={player2Hidden} player={player2Name} />
      <div className={props.classes.statistic}>
        <span>
          {player1Name} : {props.stats.player1}
        </span>
        <br />
        <span>
          {player2Name} : {props.stats.player2}
        </span>
      </div>
      <Button
        onClick={props.handleReset}
        className={props.classes.button}
        color="primary"
        variant="raised"
      >
        Reset
      </Button>
      <ResetDialog
        handleClose={props.handleCloseDialog}
        handleReset={props.resetAction}
        open={props.openResetDialog}
      />
    </div>
  );
};

export default injectSheet(styles)(TopMenu);
