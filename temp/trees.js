let expect = require("chai").expect;

function sortByHeight(line) {
  let arr = line.filter((height) => {
    return height !== -1;
  });
  return arr;
}

describe('sortByHeight', () => {
  it('should not move the trees', () => {
    let line = [-1, -1, 120, -1, 150];
    expect(sortByHeight(line)).to.deep.equal([-1, -1, 120, -1, 150]);
  });

  it('should move higher person to the end', () => {
    let line = [-1, -1, 150, -1, 120];
    expect(sortByHeight(line)).to.deep.equal([-1, -1, 120, -1, 150]);
  });

  it('should move higher person to the end', () => {
    let line = [150, -1, 150, -1, 120];
    expect(sortByHeight(line)).to.deep.equal([120, -1, 120, -1, 150]);
  });
})