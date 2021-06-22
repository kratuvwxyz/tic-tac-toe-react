/* import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './index.css'

/* class Square extends React.Component {
  // state = {
  //   value: null
  // }

  render() {
    return (
      // <button className="square" onClick={() => this.setState({value: 'X'})}>
      //   {this.state.value}
      // </button>
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
} */

// don't need a class component if no state change
function Square (props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  )
}

class Board extends React.Component {

  state = {
    squares: Array(9).fill(null),
    xIsNext: true,
  }

  handleClick = (i) => {
    // console.log(i);
    const squares = this.state.squares.slice();
    // console.log(squares);
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({squares: squares, xIsNext: !this.state.xIsNext})
  }

  /* 
  let a = Array(9)
  // [empty x 9]
  a[3] = 'apple'
  // [empty x 3, 'apple', empty x 5]
  a.fill(null)
  // [null, null, null, null, null, null, null, null, null]
  */

  renderSquare(i) {
    return <Square value={this.state.squares[i]} onClick={()=>this.handleClick(i)}/>;
  }

  /* 
  this.state.squares = null
  */

  render() {
    const status = `Next Player: ${this.state.xIsNext ? 'X' : 'O'}`;

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);