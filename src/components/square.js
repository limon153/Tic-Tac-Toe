import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  square: {
    width: 100,
    fontSize: '5em',
    height: 100,
    color: 'inherit',
    backgroundColor: 'inherit',
    border: '1px solid black',
    outline: 'none'
  }
};

const Square = props => (
  <button className={props.classes.square}>
    {props.children}
  </button>
);

export default injectSheet(styles)(Square);