class Minesweeper { 
  constructor(n = 10) {
    this.board = new Array(n);

    for (let i = 0; i < n; i += 1) {
      this.board[i] = new Array(n).fill(0);
    }
  }

  initMines(numMines = 10) {
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    let placedMines = 0;
    let length = this.board.length;
    while (placedMines < numMines) {
      let randI = getRandomInt(length);
      let randJ = getRandomInt(length);
      if (!this.checkIfMine(randI, randJ)) {
        this.board[randI][randJ] = 1;
        placedMines += 1;
      }
    }
  }

  checkIfMine(i, j) {
    let location = this.board[i][j];
    if (location !== 0) {
      return true;
    }
    return false;
  }

  print() {
    console.log(this.board);
  }
}

export default Minesweeper;
