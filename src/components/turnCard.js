import React from 'react';
import injectSheet from 'react-jss';
import Paper from 'material-ui/Paper/Paper';

const height = 40,
      gap = 20;

const styles = {
  turn: {
    width: 130,
    height: height,
    display: 'flex',
    position: 'absolute',
    right: gap,
    opacity: props => props.hidden ? 0 : 1,
    zIndex: -1,
    top: props => props.hidden ? 0 : 1 - height,
    transition: 'all .3s ease',
    '&:first-child': {
      left: gap,
    }
  },
  span: {
    margin: 'auto',
  }
};

const TurnCard = props => (
  <Paper className={props.classes.turn} >
    <span className={props.classes.span} >Your turn</span>
  </Paper>
);

export default injectSheet(styles)(TurnCard);