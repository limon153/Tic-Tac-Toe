import React, { Fragment } from 'react';
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


const Menu = props => {
  const renderOptions = ({opt1, opt2}) => (
    <Fragment>
      <Button 
        onClick={props.changeMode('choosePlayer')}
        className={props.classes.button}
      >
        {opt1}
      </Button>
      {opt2 &&
        <Button className={props.classes.button}>
          {opt2}
        </Button>
      }
    </Fragment>
  );

  let options = null;
  let title = null;
  if (props.mode === 'chooseMode') {
    title = <h2>Choose Game Mode</h2>
    options = renderOptions('Single', 'Multi');
  } else if (props.mode === 'choosePlayer') {
    title = <h2>Choose Player</h2>
    options = renderOptions('X', 'O');
  } else if (props.mode === 'endGame') {
    title = <h2>Winner is</h2>
  }

  return (
    <div className={props.classes.container}>
      <h2>Choose Game Mode</h2>
      <Button className={props.classes.button}>
        Single
      </Button>
      <Button className={props.classes.button}>
        Multiplayer
      </Button>
    </div>
  );
};

export default injectSheet(styles)(Menu);