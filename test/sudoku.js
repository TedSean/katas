let expect = require("chai").expect;

function validSolution(board) {
  let all = board.concat(getColumns(board), getBlocks(board))
  return all.filter(line => isLineValid(line)).length === 27;
}

function isLineSumValid(line) {
  return line.reduce((a, b) => a + b) === 45;
}

function isLineValid(line) {
  line = line.filter(num => num >= 1 && num <= 9);
  return line.length === 9 ? isLineSumValid(line) : false;
}

function getColumns(board) {
  let columns = [];
  for (let i = 0; i < board.length; i++) {
    let column = [];
    for (let j = 0; j < board.length; j++) {
      column.push(board[j][i]);
    }
    columns.push(column);
  }
  return columns;
}

function getBlocks(board) {
  let blocks = [];
  for (let i = 0; i < 7; i += 3) {
    for (let j = 0; j < 7; j += 3) {
      blocks.push(getBlock(board, i, j));
    }
  }
  return blocks;
}

function getBlock(board, offset1, offset2) {
  let block = [];
  for (let j = offset1; j < offset1 + 3; j++) {
    for (let k = offset2; k < offset2 + 3; k++) {
      block.push(board[j][k]);
    }
  }
  return block;
}

const validBoard1 = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
];
const validBoard2 = [[5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]];

const invalidBoard1 = [[5, 3, 4, 6, 7, 8, 9, 1, 25],
  [6, 7, 2, 1, 9, 0, 3, 4, 8],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9]];
const invalidBoard2 = [[1, 2, 3, 4, 5, 6, 7, 8, 9],
  [2, 3, 1, 5, 6, 4, 8, 9, 7],
  [3, 1, 2, 6, 4, 5, 9, 7, 8],
  [4, 5, 6, 7, 8, 9, 1, 2, 3],
  [5, 6, 4, 8, 9, 7, 2, 3, 1],
  [6, 4, 5, 9, 7, 8, 3, 1, 2],
  [7, 8, 9, 1, 2, 3, 4, 5, 6],
  [8, 9, 7, 2, 3, 1, 5, 6, 4],
  [9, 7, 8, 3, 1, 2, 6, 4, 5]];
const invalidBoard3 = [[1, 2, 6, 3, 4, 7, 5, 9, 8],
  [7, 3, 5, 8, 1, 9, 6, 4, 2],
  [1, 9, 4, 2, 7, 5, 8, 6, 3],
  [3, 1, 7, 5, 8, 4, 2, 6, 9],
  [7, 5, 9, 1, 6, 2, 4, 3, 8],
  [4, 8, 2, 9, 3, 6, 7, 1, 5],
  [1, 4, 8, 7, 5, 9, 3, 2, 6],
  [5, 6, 1, 4, 2, 3, 9, 8, 7],
  [2, 7, 3, 6, 9, 1, 8, 5, 4]]

describe('Sudoku', () => {

  it('Solution should be valid', () => {
    expect(validSolution(validBoard1)).to.equal(true);
    expect(validSolution(validBoard2)).to.equal(true);
  });

  it('Solution should be invalid', () => {
    expect(validSolution(invalidBoard1)).to.equal(false);
    expect(validSolution(invalidBoard2)).to.equal(false);
    expect(validSolution(invalidBoard3)).to.equal(false);
  });

  describe('columns', () => {
    it('should return colums', () => {
      expect(getColumns(validBoard1)).to.deep.equal(
        [
          [5, 6, 1, 8, 4, 7, 9, 2, 3],
          [3, 7, 9, 5, 2, 1, 6, 8, 4],
          [4, 2, 8, 9, 6, 3, 1, 7, 5],
          [6, 1, 3, 7, 8, 9, 5, 4, 2],
          [7, 9, 4, 6, 5, 2, 3, 1, 8],
          [8, 5, 2, 1, 3, 4, 7, 9, 6],
          [9, 3, 5, 4, 7, 8, 2, 6, 1],
          [1, 4, 6, 2, 9, 5, 8, 3, 7],
          [2, 8, 7, 3, 1, 6, 4, 5, 9]
        ]);
    });
  });

  describe('blocks', () => {
    it('should return one block', () => {
      expect(getBlock(validBoard1, 0, 0)).to.deep.equal([5, 3, 4, 6, 7, 2, 1, 9, 8]);
      expect(getBlock(validBoard1, 0, 3)).to.deep.equal([6, 7, 8, 1, 9, 5, 3, 4, 2]);
      expect(getBlock(validBoard1, 0, 6)).to.deep.equal([9, 1, 2, 3, 4, 8, 5, 6, 7]);
      expect(getBlock(validBoard1, 6, 6)).to.deep.equal([2, 8, 4, 6, 3, 5, 1, 7, 9]);
    });

    it('should return blocks', () => {
      expect(getBlocks(validBoard1)).to.deep.equal(
        [
          [5, 3, 4, 6, 7, 2, 1, 9, 8],
          [6, 7, 8, 1, 9, 5, 3, 4, 2],
          [9, 1, 2, 3, 4, 8, 5, 6, 7],
          [8, 5, 9, 4, 2, 6, 7, 1, 3],
          [7, 6, 1, 8, 5, 3, 9, 2, 4],
          [4, 2, 3, 7, 9, 1, 8, 5, 6],
          [9, 6, 1, 2, 8, 7, 3, 4, 5],
          [5, 3, 7, 4, 1, 9, 2, 8, 6],
          [2, 8, 4, 6, 3, 5, 1, 7, 9]
        ]
      );
    });
  });

  describe('line', () => {
    it('should be valid', () => {
      expect(isLineValid([5, 3, 4, 6, 7, 2, 1, 9, 8])).to.equal(true);
    });

    it('should be invalid', () => {
      expect(isLineValid([5, 3, 4, 6, 7, 2, 2, 8, 8])).to.equal(false);
    });
  })
});
