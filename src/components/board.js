import React, { Fragment } from 'react';
import styled from 'styled-components';
import Button from 'material-ui/Button';
import injectSheet from 'react-jss';
import Square from './square';

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center',
    '&:first-child button': {
      borderTop: 'none'
    },
    '&:first-child button:first-child, &:nth-child(2) button:first-child': {
      borderLeft: 'none'
    },
    '&:first-child button:last-child, &:nth-child(2) button:last-child': {
      borderRight: 'none'
    },
    '&:last-child button': {
      borderBottom: 'none'
    },
    '&:last-child button:first-child': {
      borderLeft: 'none'
    },
    '&:last-child button:last-child': {
      borderRight: 'none'
    }
  }
}


const Board = (props) => (
  <div>
    <div className={props.classes.row}>
      <Square>O</Square>
      <Square />
      <Square />
    </div>
    <div className={props.classes.row}>
      <Square />
      <Square>X</Square>
      <Square />
    </div>
    <div className={props.classes.row}>
      <Square />
      <Square />
      <Square />
    </div>
  </div>
);

export default injectSheet(styles)(Board);