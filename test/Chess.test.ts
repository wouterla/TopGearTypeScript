import "jest";
import Chess from "../src/Chess";

// board is an 8x8 map of squares/tiles
// each tile may contain a piece (For example P for Pawn, R for Rook, N for Knight, B for Bishop, Q for Queen, K for King)
// P1 for player 1 pawn, P2 for player 2 pawn, etc.

describe("Chess test", () => {
  /**
   * Given a new game of chess
   * When the user creates a new board
   * Then the board is an 8x8 map of empty squares/tiles
   */
  it("Starts a game with an empty board", () => {
    const game = new Chess();
    const board = game.createBoard();

    const expectedBoard = [
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
    ];

    expect(board).toStrictEqual<string[][]>(expectedBoard);
  });

  it("Starts a game and sets up a board", () => {
    const game = new Chess();
    const board = game.setUpGame();

    const expectedBoard = [
      ["R1", "N1", "B1", "Q1", "K1", "B1", "N1", "R1"],
      ["P1", "P1", "P1", "P1", "P1", "P1", "P1", "P1"],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["P2", "P2", "P2", "P2", "P2", "P2", "P2", "P2"],
      ["R2", "N2", "B2", "Q2", "K2", "B2", "N2", "R2"],
    ];

    expect(board).toStrictEqual<string[][]>(expectedBoard);
  });

  it("Player 1 makes a move", () => {
    const game = new Chess();
    game.setUpGame();
    const newBoard = game.move("D2", "D3");

    const expectedBoard = [
      ["R1", "N1", "B1", "Q1", "K1", "B1", "N1", "R1"],
      ["P1", "P1", "P1", "", "P1", "P1", "P1", "P1"],
      ["", "", "", "P1", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["P2", "P2", "P2", "P2", "P2", "P2", "P2", "P2"],
      ["R2", "N2", "B2", "Q2", "K2", "B2", "N2", "R2"],
    ];

    expect(newBoard).toStrictEqual<string[][]>(expectedBoard);
  });

  //should have no moves at the start of the game
  it("Should have no moves at the start of the game", () => {
    const game = new Chess();
    game.setUpGame();
    expect(game.getMoves().length).toBe(0);
    expect(game.isWhitesTurn).toBe(true);
  });

  // should show the last move
  it("Should show the previous move", () => {
    
    const game = new Chess();
    game.setUpGame();

    game.move("D2", "D3");
    expect(game.getMoves().at(-1)).toBe("D2-D3");
    game.move("D7", "D6");
    expect(game.getMoves().at(-1)).toBe("D7-D6");
  });

  it('should not allow one player two consecutive moves', () => {
    const game = new Chess();
    game.setUpGame();

    game.move("D2", "D3");
    game.move("D3", "D4");
    expect(game.getMoves().at(-1)).toBe("D2-D3");
    expect(game.getMoves().length).toBe(1);
  });

  it('should not allow a move from an empty square', () => {
    const game = new Chess();
    game.setUpGame();

    game.move("D3", "D4");
    expect(game.getMoves().length).toBe(0)
  });

  it('should report error if player tries to move from an empty square', () => {
    const game = new Chess();
    game.setUpGame();

    game.move("A5", "A4");
    expect(game.error).toBe("You must select a piece to move.");
  });

  it('should report error if player tries to move twice', () => {
    const game = new Chess();
    game.setUpGame();

    game.move("D2", "D3");
    game.move("D3", "D4");
    expect(game.error).toBe("You cannot move twice");
  });

  it('should not report error if move was successful', () => {
    const game = new Chess();
    game.setUpGame();

    game.move("D2", "D3");
    game.move("D3", "D4");
    game.move("D7", "D6");
    expect(game.error).toBe("");
  });

   




  // A piece cannot move into a space occupied by its color
  // A piece can only make a move according to its type
  // A pawn can be promoted when it reaches a square at the edge of the other player's side

  // TODO
  // A piece can only make a move according to its type
  // continue on tests
});

describe("Pawn movement", () => {
  it('should allow a pawn to move one space forward', () => {
    const game = new Chess();
    game.setUpGame();

    game.move("D2", "D3");

    expect(game.error).toBe("");
    expect(game.getMoves().length).toBe(1);
    expect(game.board[2][3]).toBe("P1");
  });

  it('should not be able to move backward', () => {
    const game = new Chess();
    game.setUpGame();

    game.move("D2", "D3");
    game.move("D7", "D6");
    game.move("D3", "D2");
    

    expect(game.error).toBe("Illegal move for a pawn");
    expect(game.getMoves().length).toBe(2);
    expect(game.board[2][3]).toBe("P1");
  });
  

});
