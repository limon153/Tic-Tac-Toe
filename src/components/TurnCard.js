import React from 'react';
import injectSheet from 'react-jss';
import Paper from 'material-ui/Paper/Paper';

const height = 40;
const gap = 20;

const styles = {
  turn: {
    width: 130,
    height,
    display: 'flex',
    position: 'absolute',
    right: gap,
    opacity: props => (props.hidden ? 0 : 1),
    zIndex: -1,
    top: props => (props.hidden ? 0 : 1 - height),
    transition: 'all .3s ease',
    '&:first-child': {
      left: gap,
    },
  },
  span: {
    margin: 'auto',
  },
};

const TurnCard = ({ classes, player }) => {
  return (
    <Paper className={classes.turn}>
      <span className={classes.span}>{player} turn</span>
    </Paper>
  );
};

export default injectSheet(styles)(TurnCard);
