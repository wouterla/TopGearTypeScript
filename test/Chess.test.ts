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
});
