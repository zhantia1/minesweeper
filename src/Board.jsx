import React, { Component } from 'react';
import Minesweeper from './Minesweeper';
import Piece from './Piece';

class Board extends Component {
  constructor() {
    super();
    this.minesweeper = new Minesweeper;
    this.minesweeper.initMines();
  }

  render() {

    console.log(this.minesweeper.board);

    return (
      <>
        {
          this.minesweeper.board.map(row => row.map(piece => <Piece piece={piece}/>))
        }
      </>
    );
  }

}

export default Board;

// react-redux, redux, redux-logger,
// redux promise middleware (lets you make async calls with dispatch)
// import provider from react-redux
// create middleware (if you use it)
// create reducer
// create store
// pass middleware and reducer into the store
// wrap app in provider
// pass store into provider

// pull props from store
// 