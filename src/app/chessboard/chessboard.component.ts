import { Component, OnInit } from '@angular/core';
import { ChessBoard, pieces } from './chessboard';

@Component({
  selector: 'app-chessboard',
  templateUrl: './chessboard.component.html',
  styleUrls: ['./chessboard.component.scss']
})
export class ChessboardComponent implements OnInit {
  selectedPipiece;
  chessboard: ChessBoard;
  pieces = pieces;
  constructor() {
  }

  ngOnInit() {
    this.chessboard = new ChessBoard();
    this.chessboard.initChessboard();
    this.selectedPipiece = this.pieces.King;
  }

  cellHover(cell) {
    this.chessboard.clearHightLightChessboard();
    this.selectedPipiece = parseInt(this.selectedPipiece, 10);
    switch (this.selectedPipiece) {
      case this.pieces.King:
        this.chessboard.heightlightKingMoves(cell.row, cell.col);
        break;
      case this.pieces.Queen:
        this.chessboard.heightLightQueenMoves(cell.row, cell.col);
        break;
      case this.pieces.Bishop:
        this.chessboard.heightLightBishopMoves(cell.row, cell.col);
        break;
      case this.pieces.Horse:
        this.chessboard.heightLightHorseMoves(cell.row, cell.col);
        break;
      case this.pieces.Rook:
        this.chessboard.heightLightRookMoves(cell.row, cell.col);
        break;
      case this.pieces.Pawn:
        this.chessboard.heightLightPawnMoves(cell.row, cell.col);
        break;
    }

  }
}
