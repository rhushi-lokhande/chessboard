import { Component, OnInit } from '@angular/core';
import { ChessBoard, pieces } from './chessboard';

@Component({
	selector: 'app-chessboard',
	templateUrl: './chessboard.component.html',
	styleUrls: ['./chessboard.component.scss']
})
export class ChessboardComponent implements OnInit {
	selectedPiece;
	chessboard: ChessBoard;
	pieces = pieces;
	constructor() {
	}

	ngOnInit() {
		this.chessboard = new ChessBoard();
		this.selectedPiece = this.pieces.King;
	}

	cellHover(cell) {
		this.chessboard.clearHightLightChessboard();
		this.selectedPiece = parseInt(this.selectedPiece, 10);
		switch (this.selectedPiece) {
			case this.pieces.King:
				this.chessboard.highlightKingMoves(cell.row, cell.col);
				break;
			case this.pieces.Queen:
				this.chessboard.highLightQueenMoves(cell.row, cell.col);
				break;
			case this.pieces.Bishop:
				this.chessboard.highLightBishopMoves(cell.row, cell.col);
				break;
			case this.pieces.Horse:
				this.chessboard.highLightHorseMoves(cell.row, cell.col);
				break;
			case this.pieces.Rook:
				this.chessboard.highLightRookMoves(cell.row, cell.col);
				break;
			case this.pieces.Pawn:
				this.chessboard.highLightPawnMoves(cell.row, cell.col);
				break;
		}

	}
}
