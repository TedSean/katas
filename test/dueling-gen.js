let expect = require("chai").expect;

const toBinary = (n, pad = 4) =>
  parseInt(n, 10).toString(2).padStart(pad, '0')

const solve = (startA, startB) => {
  const genA = 16807;
  const genB = 48271;
  let pairs = 0;
  for (let i = 0; i < 5000000; i++) {
    startA = getNextVal(startA, genA, 4);
    startB = getNextVal(startB, genB, 8);
    if (toBinary(startA, 32).slice(16, 32) === toBinary(startB, 32).slice(16, 32)) {
      pairs++;
    }
  }
  return pairs;
}

const getNextVal = (current, multiplier, modVal) => {
  do {
    current = (current * multiplier) % 2147483647
  } while (current % modVal !== 0);
  return current;
}

describe('disk defragmentation', () => {

  it.only('should return how many used', () => {
    expect(solve(516, 190)).to.equal(303);
  });
});
