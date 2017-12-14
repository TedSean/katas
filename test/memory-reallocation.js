let expect = require("chai").expect;
let _ = require("lodash");

const data2 = [0, 2, 7, 0];
const data = [4,10,4,1,8,4,9,14,5,1,14,15,0,15,3,5];

const redistribution = (banks) => {

  const isHappenedBefore = occ =>
    occurencies.includes(occ);

  const getNextIndex = (index) =>
    banks.length - 1 === index ? 0 : index + 1;

  let occurencies = [];
  let currentIteration = [...banks];

  let index = 0;
  while (!isHappenedBefore(JSON.stringify(currentIteration))) {
    occurencies.push(JSON.stringify(currentIteration));

    let biggestBank = Math.max(...currentIteration);
    let startIndex = currentIteration.findIndex(number => number === biggestBank);
    currentIteration[startIndex] = 0;
    startIndex = getNextIndex(startIndex);

    while (biggestBank !== 0) {
      currentIteration[startIndex]++;
      startIndex = getNextIndex(startIndex);
      biggestBank--;
    }
    currentIteration = [...currentIteration];
    index++;
  }
  return {currentIteration, index};
}

describe('Memory Reallocation', () => {
  it('should be correct', () => {
    const {index, currentIteration} = redistribution(data2)
    expect(index).to.equal(5);
    expect(redistribution(currentIteration).index).to.equal(4);
  });

  it('should solve', () => {
    const {index, currentIteration} = redistribution(data)
    expect(index).to.equal(12841);
    expect(redistribution(currentIteration).index).to.equal(8038);
  });
});
