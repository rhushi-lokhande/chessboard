import { ChessBoard } from './chessboard';

describe('chessboard', () => {
	let chessboard: ChessBoard;
	beforeEach(() => {
		chessboard = new ChessBoard();
	});
	it('should initialize the chessboard with 8*8 size', () => {
		expect(chessboard.chessboard).toBeTruthy();
		expect(chessboard.chessboard.length).toEqual(8);
		expect(chessboard.chessboard[0].length).toEqual(8);
	});

	it('getClass should return alternate class', () => {
		expect(chessboard.chessboard[0][0].class).toEqual('black');
		expect(chessboard.chessboard[0][1].class).toEqual('white');
		expect(chessboard.chessboard[1][0].class).toEqual('white');
		expect(chessboard.chessboard[1][1].class).toEqual('black');
	});

	it('clearHightLightChessboard should clear the all highlighted cell', () => {
		chessboard.chessboard[0][1].highlight = true;
		chessboard.chessboard[1][1].highlight = true;
		chessboard.chessboard[1][2].highlight = true;
		chessboard.chessboard[2][3].highlight = true;
		chessboard.clearHightLightChessboard();
		for (let row = 0; row < 8; row++) {
			for (let col = 0; col < 8; col++) {
				expect(chessboard.chessboard[row][col].highlight).toBeFalsy();
			}
		}
	});


	it('getHighLightedCells should get the all highlighted cell in board', () => {
		chessboard.chessboard[0][1].highlight = true;
		chessboard.chessboard[1][1].highlight = true;
		chessboard.chessboard[1][2].highlight = true;
		chessboard.chessboard[2][3].highlight = true;
		expect(chessboard.getHighLightedCells()).toEqual(['B8', 'B7', 'C7', 'D6']);

	});
});
