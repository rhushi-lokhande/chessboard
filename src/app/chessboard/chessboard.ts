import { IChessBoard } from './ichessboard';
export enum pieces { 'King', 'Queen', 'Bishop', 'Horse', 'Rook', 'Pawn' };

export class ChessBoard {

    chessboard: IChessBoard[][] = [];
    higlightedCells = [];
    pieces = ['King', 'Queen', 'Bishop', 'Horse', 'Rook', 'Pawn'];
    rowString = 'ABCDEFGH';

    initChessboard() {
        this.chessboard = [];
        for (let row = 0; row < 8; row++) {
            const chessRow: IChessBoard[] = [];
            for (let col = 0; col < 8; col++) {
                chessRow.push({
                    class: this.getClass(row, col),
                    row,
                    col,
                    highlight: false,
                    text: this.rowString[col] + (8 - row)
                });
            }
            this.chessboard.push(chessRow);
        }
    }
    private getClass(row: number, col: number) {
        return row % 2 === 0 ?
            col % 2 === 1 ? 'white' : 'black' :
            col % 2 === 0 ? 'white' : 'black';
    }
    clearHightLightChessboard() {
        this.higlightedCells = [];
        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                this.chessboard[row][col].highlight = false;
            }
        }
    }
    getHighLightedCells() {
        this.chessboard.forEach((row, i) => {
            row.forEach((col, j) => {
                if (col.highlight) {
                    this.higlightedCells.push(col.text);
                }
            });
        });
    }

    heightlightKingMoves(row, col) {
        console.log(row, col);
        if (row - 1 >= 0) {
            this.chessboard[row - 1][col].highlight = true;
            if (col - 1 >= 0) {
                this.chessboard[row - 1][col - 1].highlight = true;
            }
            if (col + 1 < 8) {
                this.chessboard[row - 1][col + 1].highlight = true;
            }
        }

        if (row + 1 < 8) {
            this.chessboard[row + 1][col].highlight = true;
            if (col - 1 >= 0) {
                this.chessboard[row + 1][col - 1].highlight = true;
            }
            if (col + 1 < 8) {
                this.chessboard[row + 1][col + 1].highlight = true;
            }
        }


        if (col - 1 >= 0) {
            this.chessboard[row][col - 1].highlight = true;
        }

        if (col + 1 < 8) {
            this.chessboard[row][col + 1].highlight = true;
        }
        this.getHighLightedCells();
    }

    heightLightQueenMoves(row, col) {
        this.moveAllDiagonally(row, col);
        this.moveVerticallyHorizontally(row, col);
        this.getHighLightedCells();

    }

    heightLightBishopMoves(row, col) {
        this.moveAllDiagonally(row, col);
        this.getHighLightedCells();

    }

    heightLightHorseMoves(row: number, col: number) {
        if (row - 2 >= 0) {
            if (col - 1 >= 0) {
                this.chessboard[row - 2][col - 1].highlight = true;
            }
            if (col + 1 < 8) {
                this.chessboard[row - 2][col + 1].highlight = true;
            }
        }

        if (row + 2 < 8) {
            if (col - 1 >= 0) {
                this.chessboard[row + 2][col - 1].highlight = true;
            }
            if (col + 1 < 8) {
                this.chessboard[row + 2][col + 1].highlight = true;
            }
        }


        if (col - 2 >= 0) {
            if (row - 1 >= 0) {
                this.chessboard[row - 1][col - 2].highlight = true;
            }
            if (row + 1 < 8) {
                this.chessboard[row + 1][col - 2].highlight = true;
            }
        }


        if (col + 2 < 8) {
            if (row - 1 >= 0) {
                this.chessboard[row - 1][col + 2].highlight = true;
            }
            if (row + 1 < 8) {
                this.chessboard[row + 1][col + 2].highlight = true;
            }
        }
        this.getHighLightedCells();

    }

    heightLightRookMoves(row, col) {
        this.moveVerticallyHorizontally(row, col);
        this.getHighLightedCells();

    }

    heightLightPawnMoves(row, col) {
        if (row + 1 < 8) {
            this.chessboard[row + 1][col].highlight = true;
            if (col - 1 >= 0) {
                this.chessboard[row + 1][col - 1].highlight = true;
            }
            if (col + 1 < 8) {
                this.chessboard[row + 1][col + 1].highlight = true;
            }
        }
        this.getHighLightedCells();
    }

    private moveAllDiagonally(row, col) {
        this.moveDiagonally(row, col, 1, 1);
        this.moveDiagonally(row, col, 1, -1);
        this.moveDiagonally(row, col, -1, 1);
        this.moveDiagonally(row, col, -1, -1);
    }

    private moveVerticallyHorizontally(row, col) {
        this.moveUpDown(row, col, -1);
        this.moveUpDown(row, col, 1);
        this.moveLeftRight(row, col, -1);
        this.moveLeftRight(row, col, 1);
    }

    private moveDiagonally(i, j, ii, ij) {
        while ((8 > (i + ii) && (i + ii) >= 0) && (8 > (j + ij) && (j + ij) >= 0)) {
            this.chessboard[i + ii][j + ij].highlight = true;
            i += ii;
            j += ij;
        }
    }

    private moveUpDown(i, j, dir) {
        while (8 > (i + dir) && (i + dir) >= 0) {
            this.chessboard[i + dir][j].highlight = true;
            i += dir;
        }
    }

    private moveLeftRight(i, j, dir) {
        while (8 > (j + dir) && (j + dir) >= 0) {
            this.chessboard[i][j + dir].highlight = true;
            j += dir;
        }
    }
}
