/* tslint:disable */

class Chess {
  board: string[][];

  constructor() {
    this.board = this.createBoard();
  }

  public createBoard(): string[][] {
    return [
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
    ];
  }

  public setUpGame(): string[][] {
    this.board = [
      ["R1", "N1", "B1", "Q1", "K1", "B1", "N1", "R1"],
      ["P1", "P1", "P1", "P1", "P1", "P1", "P1", "P1"],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["P2", "P2", "P2", "P2", "P2", "P2", "P2", "P2"],
      ["R2", "N2", "B2", "Q2", "K2", "B2", "N2", "R2"],
    ];

    return this.board;
  }

  public move(from: string, to: string): string[][] {
    const fromArray = this.mapToBoard(from);
    const toArray = this.mapToBoard(to);

    const piece = this.board[fromArray[0]][fromArray[1]];

    this.board[fromArray[0]][fromArray[1]] = "";
    this.board[toArray[0]][toArray[1]] = piece;

    return this.board;
  }

  private mapToBoard(position: string): [number, number] {
    const startingA = "A";

    const column = Number(position.charAt(1)) - 1;
    const row = position.charCodeAt(0) - startingA.charCodeAt(0);

    return [column, row];
  }
}

export default Chess;
