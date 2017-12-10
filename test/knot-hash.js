let expect = require("chai").expect;

const numbers = new Array(256).fill(null).map((val, index) => index);
const input = `206,63,255,131,65,80,238,157,254,24,133,2,16,0,1,3`;

const demoNumbers = [0, 1, 2, 3, 4];
const demoInput = `3,4,1,5`;

const knotHash = (numbers, input) => {
  const lengths = input.split(',').map(x => Number(x));
  const a = lengths.reduce((data, length, skipSize) => {
    const {index} = data;
    const reversedArray = getReversedArray(data.numbers, length, index);

    const y = fillWithMissingAfterReverse(data.numbers, reversedArray, index);
    return {index: getArrayIndex(data.numbers, index + length + skipSize), numbers: y};
  }, {index: 0, numbers});
  return a.numbers[0] * a.numbers[1];
}

const fillWithMissingAfterReverse = (origArray, reversedValues, index) => {
  const arr = new Array(origArray.length);
  for (let i = 0; i < origArray.length; i++) {
    arr[getArrayIndex(arr, index + i)] = (reversedValues[i] || reversedValues[i] === 0) ? reversedValues[i] : origArray[getArrayIndex(arr, index + i)]
  }
  return arr;
}

const getArrayIndex = (array, index) => {
  return index < array.length ? index : index - array.length;
}

const getReversedArray = (origArray, length, start) => {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(origArray[getArrayIndex(origArray, start + i)]);
  }
  return arr.reverse();
}

describe('Knot Hash', () => {
  it('should solve ', () => {
    expect(knotHash(demoNumbers, demoInput)).to.equal(12);
  });

  it('should solve ', () => {
    expect(knotHash(numbers, input)).to.equal(9656);
  });
});

