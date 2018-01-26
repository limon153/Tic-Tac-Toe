import React from 'react';
import Button from 'material-ui/Button/Button';
import injectSheet from 'react-jss';

const styles = {
  container: {
    marginTop: 50,
    textAlign: 'center'
  },
  button: {
    color: 'inherit'
  }
};

const Menu = props => (
  <div className={props.classes.container}>
    <h2>Choose Game Mode</h2>
    <Button className={props.classes.button} >Single</Button>
    <Button className={props.classes.button} >Multiplayer</Button>
  </div>
);

export default injectSheet(styles)(Menu);