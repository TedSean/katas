let expect = require("chai").expect;
let {getPart2Answer, parsePart2Input} = require('./knot-hash');

const toBinary = n =>
  parseInt(n, 16).toString(2).padStart(4, '0')

const getGroups = (disk) => {
  let groups = 0

  const check = (x, y) =>
    disk[y] && disk[y][x] === '1'

  const group = (x, y) => {
    disk[y][x] = '0'
    check(x + 1, y) && group(x + 1, y)
    check(x - 1, y) && group(x - 1, y)
    check(x, y + 1) && group(x, y + 1)
    check(x, y - 1) && group(x, y - 1)
  }

  for (let y = 0; y < 128; y++) {
    for (let x = 0; x < 128; x++) {
      if (check(x, y)) {
        groups++
        group(x, y)
      }
    }
  }

  return groups;
}

const getAllUsed = disk =>
  disk.reduce((sum, part) =>
    part.split``
      .map(x => Number(x))
      .reduce((sum, n) =>
        sum + n, 0) + sum
    , 0)

const solve = input => {
  const numbers = [...Array(256)].map((val, index) => index);
  let disk = [...Array(128)];
  disk = disk.map((diskRow, index) =>
    getPart2Answer(numbers, parsePart2Input(`${input}-${index}`)).split``
      .map(n => toBinary(n)).join``);

  return {part1: getAllUsed(disk), part2: getGroups(disk.map(row => row.split``))};
}

describe('disk defragmentation', () => {

  it('should return how many used', () => {
    const {part1, part2} = solve('flqrgnkx');
    expect(part1).to.equal(8108);
    expect(part2).to.equal(1242);
  });

  it('should return how many used', () => {
    const {part1, part2} = solve('amgozmfv');
    expect(part1).to.equal(8222);
    expect(part2).to.equal(1086);
  });
});
