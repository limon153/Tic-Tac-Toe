import React from "react";
import Button from "material-ui/Button/Button";
import injectSheet from 'react-jss';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: 16
  },
  statistic: {   
    display: 'inline-block',
    padding: 20
  },
  button: {
    margin: 20
  }
};

const TopMenu = props => (
  <div className={props.classes.container}>
    <div className={props.classes.statistic}>
      <span>Player 1 : </span><br/>
      <span>Player 2 : </span>
    </div>
    <Button className={props.classes.button} color="primary" raised>
      Reset
    </Button>
  </div>
);

export default injectSheet(styles)(TopMenu);