import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ChessboardComponent } from './chessboard.component';
import { pieces } from './chessboard';

describe('ChessboardComponent', () => {
	let component: ChessboardComponent;
	let fixture: ComponentFixture<ChessboardComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ChessboardComponent],
			imports: [FormsModule]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ChessboardComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should initialize the chessboard', () => {
		component.ngOnInit();
		expect(component.chessboard).toBeTruthy();
		expect(component.selectedPiece).toEqual(pieces.King);
	});


	it('on cellHover should high light the prediction for king', () => {
		component.selectedPiece = pieces.King;
		component.cellHover({ row: 1, col: 1 });
		expect(component.chessboard.highlightedCells).toEqual(['A8', 'B8', 'C8', 'A7', 'C7', 'A6', 'B6', 'C6']);
	});

	it('on cellHover should high light the prediction for king second row first column', () => {
		component.selectedPiece = pieces.King;
		component.cellHover({ row: 1, col: 0 });
		expect(component.chessboard.highlightedCells).toEqual(['A8', 'B8', 'B7', 'A6', 'B6']);
	});

	it('on cellHover should high light the prediction for king left top', () => {
		component.selectedPiece = pieces.King;
		component.cellHover({ row: 0, col: 0 });
		expect(component.chessboard.highlightedCells).toEqual(['B8', 'A7', 'B7']);
	});
	it('on cellHover should high light the prediction for king left bottom', () => {
		component.selectedPiece = pieces.King;
		component.cellHover({ row: 7, col: 0 });
		expect(component.chessboard.highlightedCells).toEqual(['A2', 'B2', 'B1']);
	});

	it('on cellHover should high light the prediction for king right bottom', () => {
		component.selectedPiece = pieces.King;
		component.cellHover({ row: 7, col: 7 });
		expect(component.chessboard.highlightedCells).toEqual(['G2', 'H2', 'G1']);
	});


	it('on cellHover should high light the prediction for Queen in center', () => {
		component.selectedPiece = pieces.Queen;
		component.cellHover({ row: 3, col: 3 });
		expect(component.chessboard.highlightedCells).toEqual(['A8', 'D8', 'G8', 'B7', 'D7', 'F7', 'C6', 'D6', 'E6', 'A5', 'B5', 'C5', 'E5', 'F5', 'G5', 'H5', 'C4', 'D4', 'E4', 'B3', 'D3', 'F3', 'A2', 'D2', 'G2', 'D1', 'H1']);
	});

	it('on cellHover should high light the prediction for Queen left top', () => {
		component.selectedPiece = pieces.Queen;
		component.cellHover({ row: 0, col: 0 });
		expect(component.chessboard.highlightedCells).toEqual(['B8', 'C8', 'D8', 'E8', 'F8', 'G8', 'H8', 'A7', 'B7', 'A6', 'C6', 'A5', 'D5', 'A4', 'E4', 'A3', 'F3', 'A2', 'G2', 'A1', 'H1']);
	});

	it('on cellHover should high light the prediction for Queen left bottom', () => {
		component.selectedPiece = pieces.Queen;
		component.cellHover({ row: 7, col: 0 });
		expect(component.chessboard.highlightedCells).toEqual(['A8', 'H8', 'A7', 'G7', 'A6', 'F6', 'A5', 'E5', 'A4', 'D4', 'A3', 'C3', 'A2', 'B2', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1', 'H1']);
	});

	it('on cellHover should high light the prediction for Queen right top', () => {
		component.selectedPiece = pieces.Queen;
		component.cellHover({ row: 0, col: 7 });
		expect(component.chessboard.highlightedCells).toEqual(['A8', 'B8', 'C8', 'D8', 'E8', 'F8', 'G8', 'G7', 'H7', 'F6', 'H6', 'E5', 'H5', 'D4', 'H4', 'C3', 'H3', 'B2', 'H2', 'A1', 'H1']);
	});

	it('on cellHover should high light the prediction for Queen right bottom', () => {
		component.selectedPiece = pieces.Queen;
		component.cellHover({ row: 7, col: 7 });

		expect(component.chessboard.highlightedCells).toEqual(['A8', 'H8', 'B7', 'H7', 'C6', 'H6', 'D5', 'H5', 'E4', 'H4', 'F3', 'H3', 'G2', 'H2', 'A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1']);
	});


	it('on cellHover should high light the prediction for Bishop in center', () => {
		component.selectedPiece = pieces.Bishop;
		component.cellHover({ row: 3, col: 3 });
		expect(component.chessboard.highlightedCells).toEqual(['A8', 'G8', 'B7', 'F7', 'C6', 'E6', 'C4', 'E4', 'B3', 'F3', 'A2', 'G2', 'H1']);
	});

	it('on cellHover should high light the prediction for Bishop left top', () => {
		component.selectedPiece = pieces.Bishop;
		component.cellHover({ row: 0, col: 0 });
		expect(component.chessboard.highlightedCells).toEqual(['B7', 'C6', 'D5', 'E4', 'F3', 'G2', 'H1']);
	});

	it('on cellHover should high light the prediction for Bishop left bottom', () => {
		component.selectedPiece = pieces.Bishop;
		component.cellHover({ row: 7, col: 0 });
		expect(component.chessboard.highlightedCells).toEqual(['H8', 'G7', 'F6', 'E5', 'D4', 'C3', 'B2']);
	});

	it('on cellHover should high light the prediction for Bishop right top', () => {
		component.selectedPiece = pieces.Bishop;
		component.cellHover({ row: 0, col: 7 });
		expect(component.chessboard.highlightedCells).toEqual(['G7', 'F6', 'E5', 'D4', 'C3', 'B2', 'A1']);
	});

	it('on cellHover should high light the prediction for Bishop right bottom', () => {
		component.selectedPiece = pieces.Bishop;
		component.cellHover({ row: 7, col: 7 });
		expect(component.chessboard.highlightedCells).toEqual(['A8', 'B7', 'C6', 'D5', 'E4', 'F3', 'G2']);
	});



	it('on cellHover should high light the prediction for Horse in center', () => {
		component.selectedPiece = pieces.Horse;
		component.cellHover({ row: 3, col: 3 });
		expect(component.chessboard.highlightedCells).toEqual(['C7', 'E7', 'B6', 'F6', 'B4', 'F4', 'C3', 'E3']);
	});

	it('on cellHover should high light the prediction for Horse left top', () => {
		component.selectedPiece = pieces.Horse;
		component.cellHover({ row: 0, col: 0 });
		expect(component.chessboard.highlightedCells).toEqual(['C7', 'B6']);
	});

	it('on cellHover should high light the prediction for Horse left bottom', () => {
		component.selectedPiece = pieces.Horse;
		component.cellHover({ row: 7, col: 0 });
		expect(component.chessboard.highlightedCells).toEqual(['B3', 'C2']);
	});

	it('on cellHover should high light the prediction for Horse right top', () => {
		component.selectedPiece = pieces.Horse;
		component.cellHover({ row: 0, col: 7 });
		expect(component.chessboard.highlightedCells).toEqual(['F7', 'G6']);
	});

	it('on cellHover should high light the prediction for Horse right bottom', () => {
		component.selectedPiece = pieces.Horse;
		component.cellHover({ row: 7, col: 7 });
		expect(component.chessboard.highlightedCells).toEqual(['G3', 'F2']);
	});



	it('on cellHover should high light the prediction for Rook in center', () => {
		component.selectedPiece = pieces.Rook;
		component.cellHover({ row: 3, col: 3 });
		expect(component.chessboard.highlightedCells).toEqual(['D8', 'D7', 'D6', 'A5', 'B5', 'C5', 'E5', 'F5', 'G5', 'H5', 'D4', 'D3', 'D2', 'D1']);
	});

	it('on cellHover should high light the prediction for Rook left top', () => {
		component.selectedPiece = pieces.Rook;
		component.cellHover({ row: 0, col: 0 });
		expect(component.chessboard.highlightedCells).toEqual(['B8', 'C8', 'D8', 'E8', 'F8', 'G8', 'H8', 'A7', 'A6', 'A5', 'A4', 'A3', 'A2', 'A1']);
	});

	it('on cellHover should high light the prediction for Rook left bottom', () => {
		component.selectedPiece = pieces.Rook;
		component.cellHover({ row: 7, col: 0 });
		expect(component.chessboard.highlightedCells).toEqual(['A8', 'A7', 'A6', 'A5', 'A4', 'A3', 'A2', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1', 'H1']);
	});

	it('on cellHover should high light the prediction for Rook right top', () => {
		component.selectedPiece = pieces.Rook;
		component.cellHover({ row: 0, col: 7 });
		expect(component.chessboard.highlightedCells).toEqual(['A8', 'B8', 'C8', 'D8', 'E8', 'F8', 'G8', 'H7', 'H6', 'H5', 'H4', 'H3', 'H2', 'H1']);
	});

	it('on cellHover should high light the prediction for Rook right bottom', () => {
		component.selectedPiece = pieces.Rook;
		component.cellHover({ row: 7, col: 7 });
		expect(component.chessboard.highlightedCells).toEqual(['H8', 'H7', 'H6', 'H5', 'H4', 'H3', 'H2', 'A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1']);
	});



	it('on cellHover should high light the prediction for Pawn first row fist column', () => {
		component.selectedPiece = pieces.Pawn;
		component.cellHover({ row: 0, col: 1 });
		expect(component.chessboard.highlightedCells).toEqual(['A7', 'B7', 'C7']);
	});

	it('on cellHover should high light the prediction for Pawn first row first column', () => {
		component.selectedPiece = pieces.Pawn;
		component.cellHover({ row: 0, col: 0 });
		expect(component.chessboard.highlightedCells).toEqual(['A7', 'B7']);
	});

	it('on cellHover should high light the prediction for Pawn first row last column', () => {
		component.selectedPiece = pieces.Pawn;
		component.cellHover({ row: 0, col: 7 });
		expect(component.chessboard.highlightedCells).toEqual(['G7', 'H7']);
	});
});
