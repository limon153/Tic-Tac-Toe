import React from 'react';
import Button from 'material-ui/Button/Button';
import injectSheet from 'react-jss';

import TurnCard from './TurnCard';

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

  return (
    <div className={props.classes.container}>
      <TurnCard hidden={player1Hidden} player={'Player 1'} />
      <TurnCard
        hidden={player2Hidden}
        player={props.gameMode === 'single' ? 'Bot' : 'Player 2'}
      />
      <div className={props.classes.statistic}>
        <span>Player 1 : {props.stats.player1}</span>
        <br />
        <span>Player 2 : {props.stats.player2}</span>
      </div>
      <Button
        onClick={props.handleReset}
        className={props.classes.button}
        color="primary"
        variant="raised"
      >
        Reset
      </Button>
    </div>
  );
};

export default injectSheet(styles)(TopMenu);
