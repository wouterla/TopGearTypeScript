/* tslint:disable */

class Chess {
  board: string[][];
  moves: string[];
  isWhitesTurn: boolean;
  error: string;

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
    this.isWhitesTurn = true;
    this.moves = [];

    return this.board;
  }

  public move(from: string, to: string): string[][] {
    const fromArray = this.mapToBoard(from);
    const toArray = this.mapToBoard(to);

    const piece = this.getPieceAtPosition(fromArray[0], fromArray[1]);
    this.error = this.errorFromInvalidMove(piece)
    if(this.error !== ""){
      return this.board
    }
    
    this.setSquareAt(fromArray[0],fromArray[1], "");
    this.setSquareAt(toArray[0],toArray[1], piece);

    this.moves.push(from + "-" + to);
    this.isWhitesTurn = !this.isWhitesTurn;
    return this.board;
  }

  private errorFromInvalidMove(piece: string) {
    if (piece === "") {
      return "You must select a piece to move."
    }

    const pieceColor = piece.charAt(1);
    if ((pieceColor === "2" && this.isWhitesTurn) || (pieceColor === "1" &&  !this.isWhitesTurn))  {
      return "You cannot move twice";
    } 
    return ""
  }

  private mapToBoard(position: string): [number, number] {
    const startingA = "A";

    const column = Number(position.charAt(1)) - 1;
    const row = position.charCodeAt(0) - startingA.charCodeAt(0);

    return [column, row];
  }

  private getPieceAtPosition(row, column): string{

    return this.board[row][column] 
  }

 private setSquareAt(row, column, input){
    this.board[row][column] = input
  }

  public getMoves(): string[]{
    return this.moves;
  } 
}

export default Chess;
