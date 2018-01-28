import React from 'react';
import Paper from 'material-ui/Paper';
import injectSheet from 'react-jss';

import TopMenu from './topMenu';
import Menu from './menu';
import Board from './board'

const styles = {
  container: {
    width: 330,
    height: 400,
    margin: '50px auto'
  }
}

const App = props => (
  <Paper className={props.classes.container}>
    <TopMenu />
    <Board />
    {/* <Menu /> */}
  </Paper>
);

export default injectSheet(styles)(App);