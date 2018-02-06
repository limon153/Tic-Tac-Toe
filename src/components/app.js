import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import injectSheet from 'react-jss';

import TopMenu from './topMenu';
import {ModeMenu, PlayerMenu} from './menus';
import Board from './board';
import {checkWinner} from './game';

const styles = {
  container: {
    width: 330,
    height: 400,
    margin: '50px auto'
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      squares: Array(9).fill(null),
      isPlayer1Next: true,
      stats: {
        player1: 0,
        player2: 0
      },
      gameState: 'chooseMode'
    }
  }

  changeMode(player, mode, state) {
    this.setState({
      gameState: state
    });
  }

  handleMove(i) {
    const squares = this.state.squares.slice();
    if(!squares[i]) {
      squares[i] = this.state.isPlayer1Next ? 'X' : 'O';
      this.setState({
          squares: squares,
          isPlayer1Next: !this.state.isPlayer1Next
        },
        () => this.addStat()
      );
    }
  }

  addStat() {
    const winner = checkWinner(this.state.squares);
    // if winner === player1Sign
    if(winner) {
      console.log(winner);
      this.setState(prevState => ({
        stats: {
          player1: prevState.stats.player1 + 1,
          player2: prevState.stats.player2
        }
      }));
    }
  }

  endGame() {

  }


  render() {

    let content = null;
    if (this.state.gameState === 'game') {
      content = <Board 
        handleClick={i => this.handleMove(i)}
        squares={this.state.squares}
        isPlayer1Next={this.state.isPlayer1Next} />
    } else if (this.state.gameState === 'chooseMode') {
      console.log(this.state.gameState);
      content = <ModeMenu
        changeMode={(player, mode) => this.changeMode(player, mode, 'choosePlayer')}
      />
    } else if (this.state.gameState === 'choosePlayer') {
      content = <PlayerMenu
        changeMode={() => this.changeMode('game') }
      />
    }


    return (
      <Paper className={this.props.classes.container}>
        <TopMenu stats={this.state.stats} />
        {content}
      </Paper>
    );
  }
}


export default injectSheet(styles)(App);