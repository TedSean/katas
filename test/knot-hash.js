let expect = require("chai").expect;
let _ = require("lodash");

const knotHash = (numbers, input, initialIndex, initialSkipSize) => {
  return input.reduce((data, length) => {
    const {index, skipSize, numbers} = data;
    const reversedArray = getReversedArray(numbers, length, index);

    const y = fillWithMissingAfterReverse(numbers, reversedArray, index);
    return {index: getArrayIndex(numbers.length, index + length + skipSize), numbers: y, skipSize: skipSize + 1};
  }, {index: initialIndex, numbers, skipSize: initialSkipSize});
}

const fillWithMissingAfterReverse = (origArray, reversedValues, index) => {
  const arr = new Array(origArray.length);
  for (let i = 0; i < origArray.length; i++) {
    arr[getArrayIndex(arr.length, index + i)] = (reversedValues[i] || reversedValues[i] === 0) ? reversedValues[i] : origArray[getArrayIndex(arr.length, index + i)]
  }
  return arr;
}

const getArrayIndex = (length, index) => {
  return index % length;
}

const getReversedArray = (origArray, length, start) => {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(origArray[getArrayIndex(origArray.length, start + i)]);
  }
  return arr.reverse();
}

const parsePart1Input = (input) =>
  input.split(',')
    .map(x => Number(x));

const getPart1Answer = (input) =>
  input.numbers[0] * input.numbers[1]

const parsePart2Input = (input) =>
  input.split('')
    .map(x =>
      x.charCodeAt(0))
    .concat([17, 31, 73, 47, 23]);

const getDenseHash = (sparseHash) =>
  _.chunk(sparseHash, 16)
    .map(chunk =>
      chunk
        .reduce((a, b) =>
          a ^ b, 0));

const getPart2Answer = (numbers, input) => {
  let data = {index: 0, skipSize: 0, numbers}
  for (let i = 0; i < 64; i++) {
    data = knotHash(data.numbers, input, data.index, data.skipSize)
  }

  return encode(getDenseHash(data.numbers));
}

const encode = denseHash =>
  denseHash
    .map(a =>
      a.toString(16))
    .map(x =>
      x.length === 1 ? `0${x}` : x)
    .join('')

describe('Knot Hash', () => {
  it('should solve ', () => {
    const numbers = [0, 1, 2, 3, 4];
    const input = `3,4,1,5`;
    expect(getPart1Answer(knotHash(numbers, parsePart1Input(input), 0, 0))).to.equal(12);
  });

  it('should solve ', () => {
    const numbers = new Array(256).fill(null).map((val, index) => index);
    const input = `206,63,255,131,65,80,238,157,254,24,133,2,16,0,1,3`;
    expect(getPart1Answer(knotHash(numbers, parsePart1Input(input), 0, 0))).to.equal(9656);
  });

  describe('second part', () => {
    it('should parse input', () => {
      expect(parsePart2Input('1,2,3').join(',')).to.equal('49,44,50,44,51,17,31,73,47,23')
    });

    it('should encode correctly', () => {
      expect(encode([64, 7, 255])).to.equal('4007ff')
    });

    it('should work with examples', () => {
      const numbers = new Array(256).fill(null).map((val, index) => index);
      expect(getPart2Answer(numbers, parsePart2Input(''))).to.equal('a2582a3a0e66e6e86e3812dcb672a272')
      expect(getPart2Answer(numbers, parsePart2Input(`1,2,4`))).to.equal('63960835bcdc130f0b66d7ff4f6a5a8e')
      expect(getPart2Answer(numbers, parsePart2Input(`206,63,255,131,65,80,238,157,254,24,133,2,16,0,1,3`))).to.equal('20b7b54c92bf73cf3e5631458a715149')
    });
  });
});



