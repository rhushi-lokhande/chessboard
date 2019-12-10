import { Component, OnInit } from '@angular/core';
import { ChessBoard } from './chessboard';

@Component({
  selector: 'app-chessboard',
  templateUrl: './chessboard.component.html',
  styleUrls: ['./chessboard.component.scss']
})
export class ChessboardComponent implements OnInit {

  pieces = ['King', 'Queen', 'Bishop', 'Horse', 'Rook', 'Pawn'];
  selectedPipiece;
  chessboard: ChessBoard;
  constructor() {
  }

  ngOnInit() {
    this.chessboard = new ChessBoard();
    this.chessboard.initChessboard();
    this.selectedPipiece = this.pieces[5];
  }

  cellHover(cell) {
    this.chessboard.clearHightLightChessboard();
    switch (this.selectedPipiece) {
      case this.pieces[0]:
        this.chessboard.heightlightKingMoves(cell.row, cell.col);
        break;
      case this.pieces[1]:
        this.chessboard.heightLightQueenMoves(cell.row, cell.col);
        break;
      case this.pieces[2]:
        this.chessboard.heightLightBishopMoves(cell.row, cell.col);
        break;
      case this.pieces[4]:
        this.chessboard.heightLightRookMoves(cell.row, cell.col);
        break;
      case this.pieces[5]:
        this.chessboard.heightLightPawnMoves(cell.row, cell.col);
        break;
    }
    this.chessboard.getHighLightedCells();
  }
}
