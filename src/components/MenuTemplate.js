import React from 'react';
import Button from 'material-ui/Button/Button';
import injectSheet from 'react-jss';

const styles = {
  container: {
    marginTop: 50,
    textAlign: 'center',
  },
  button: {
    color: 'inherit',
  },
};

const MenuTemplate = props => {
  let nextState = null;
  switch (props.title) {
    case 'Choose Mode':
      nextState = 'choosePlayer';
      break;
    case 'Choose Player':
      nextState = 'game';
      break;
    default:
      break;
  }

  return (
    <div className={props.classes.container}>
      <h2>{props.title}</h2>
      <Button
        className={props.classes.button}
        onClick={props.changeMode(props.options[0], nextState)}
      >
        {props.options[0]}
      </Button>
      <Button
        className={props.classes.button}
        onClick={props.changeMode(props.options[1], nextState)}
      >
        {props.options[1]}
      </Button>
    </div>
  );
};

export default injectSheet(styles)(MenuTemplate);
