let expect = require("chai").expect;

const spiralMemory = input => {
  let part1 = 0, part2 = 0;

  const size = Math.ceil(Math.sqrt(input));

  const arr = Array.from({length: size+100}, () => Array.from({length: size+100}));

  const start = {x: Math.trunc(size / 2), y: Math.trunc(size / 2)}
  let current = {x: Math.trunc(size / 2), y: Math.trunc(size / 2)};

  console.log(start);
  console.log(current);


  const directions = {
    down: 'down',
    right: 'right',
    up: 'up',
    left: 'left',
    downRight: 'downRight',
    downLeft: 'downLeft',
    upLeft: 'upLeft',
    upRight: 'upRight'
  }

  let currentDirection = directions.down;

  const shouldSwitchDir = ({x, y}) => {
    return !arr[current.x + x][current.y + y];
  }

  const move = ({x, y}) => {
    current.x = current.x + x
    current.y = current.y + y
  }

  const changeDir = (dir) => {
    currentDirection = dir;
    move(moves[currentDirection])
  }

  const moves = {
    down: {x: -1, y: 0},
    right: {x: 0, y: 1},
    up: {x: 1, y: 0},
    left: {x: 0, y: -1},
    downRight: {x: -1, y: 1},
    downLeft: {x: -1, y: -1},
    upLeft: {x: 1, y: -1},
    upRight: {x: 1, y: 1},
  }

  const getValue = ({x, y}) => {
    return (arr[current.x + x] && arr[current.x + x][current.y + y]) || 0;
  }

  const getAllNeighboursSum = () => {
    return Object.keys(directions).reduce((sum, dir) => {
      return sum + getValue(moves[dir]);
    }, 0) || 1;
  }

  getNextValue = () => {
    let sum = 1;
    if (!part2) {
      sum = getAllNeighboursSum();
      if (sum > input) {
        part2 = sum;
      }
    }
    return sum;
  }

  for (let i = 0; i < input; i++) {
    arr[current.x][current.y] = getNextValue();
    switch (currentDirection) {
      case directions.down:
        shouldSwitchDir(moves.right) ? changeDir(directions.right) : move(moves.down)
        break;
      case directions.right:
        shouldSwitchDir(moves.up) ? changeDir(directions.up) : move(moves.right)
        break;
      case directions.up:
        shouldSwitchDir(moves.left) ? changeDir(directions.left) : move(moves.up)
        break;
      case directions.left:
        shouldSwitchDir(moves.down) ? changeDir(directions.down) : move(moves.left)
        break;
    }
  }

  part1 = Math.abs(current.x - start.x) + Math.abs(current.y - start.y) - 1

  return {part1, part2};
}


describe('Spiral memory', () => {
  it('should be correct with input', () => {
    const {part1} = spiralMemory(1024);
    expect(part1).to.equal(31)
  });

  it('should be correct with input', () => {
    const {part1} = spiralMemory(23);
    expect(part1).to.equal(2)
  });

  it('should be correct with input', () => {
    const {part1, part2} = spiralMemory(361527);
    expect(part1).to.equal(326)
    expect(part2).to.equal(363010)
  });
});
