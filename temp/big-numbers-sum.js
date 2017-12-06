let expect = require("chai").expect;

function sumStrings(a, b) {
  let longer = a.length >= b.length ? a.split('').reverse() : b.split('').reverse();
  let shorter = a.length >= b.length ? b.split('').reverse() : a.split('').reverse();
  let result = [];
  let rest = 0;

  longer.forEach((value, index) => {
    let anotherNumber = Number(shorter[index]) || 0;
    let sum = Number(value) + anotherNumber + rest;
    if (sum >= 10) {
      sum-= 10;
      rest = 1;
    } else {
      rest = 0;
    }
    result.push(sum);
  });
  if (rest === 1) {
    result.push(rest);
  }
  return removeLeadingZeros(result.reverse()).join('');
}

function removeLeadingZeros(array) {
  let zero = 0;
  while (zero === 0) {
    zero = array.shift()
  }
  array.unshift(zero);
  return array;
}

describe('Sum', () => {
  it('should return correct sum of two big numbers', () => {
    expect(sumStrings('99', '1')).to.equal('100');
    expect(sumStrings('1000000000000000000000', '1000000000000000000000')).to.equal('2000000000000000000000');
    expect(sumStrings('12', '12')).to.equal('24');
    expect(sumStrings('1', '199')).to.equal('200');
    expect(sumStrings('0001', '199')).to.equal('200');
  });
});

