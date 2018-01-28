import React, { Fragment, Component } from 'react';
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

class Board extends Component {

  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null)
    }
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares});
  }

  renderSquare(i) {
    return (
      <Square 
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className={this.props.classes.row}>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className={this.props.classes.row}>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className={this.props.classes.row}>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(Board);