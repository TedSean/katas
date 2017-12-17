let expect = require("chai").expect;

const spinLock = (step) => {
  const arr = [];
  let currentPos = 0;
  for (let i = 0; i <= 2017; i++) {
    currentPos = (currentPos + step) % arr.length + 1 || 0;
    arr.splice(currentPos, 0, i);
  }
  return arr[arr.indexOf(2017) + 1];
}

const part2 = (step) => {
  let result = 0;
  let currentPos = 0;
  for (let i = 0; i <= 50000000; i++) {
    currentPos = ((currentPos + step) % i) + 1 || 0;
    if (currentPos === 1) {
      result = i;
    }
  }
  return result;
}

describe('Dance', () => {
  it('should be correct with input', () => {
    expect(spinLock(377)).to.equal(596);
    expect(part2(377)).to.equal(39051595);
  });
});
