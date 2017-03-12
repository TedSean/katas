let expect = require("chai").expect;

function solution(number) {
  let roman = [];
  while (number !== 0) {
    Object.keys(romanNumbers).reverse().forEach((num) => {
      num = parseInt(num);
      while (number / num >= 1) {
        roman.push(romanNumbers[num]);
        number-= num;
      }
    });
  }
  return roman.join('');
}

const romanNumbers = {
  1: 'I',
  4: 'IV',
  5: 'V',
  9: 'IX',
  10: 'X',
  40: 'XL',
  50: 'L',
  90: 'XC',
  100: 'C',
  400: 'CD',
  500: 'D',
  900: 'CM',
  1000: 'M'
}


describe('Roman number Encoder', () => {
  it('should encode 1', () => {
    expect(solution(1)).to.equal('I');
  });

  it('should encode 5', () => {
    expect(solution(5)).to.equal('V');
  });

  it('should encode 10', () => {
    expect(solution(10)).to.equal('X');
  });

  it('should encode 50', () => {
    expect(solution(50)).to.equal('L');
  });

  it('should encode 100', () => {
    expect(solution(100)).to.equal('C');
  });

  it('should encode 500', () => {
    expect(solution(500)).to.equal('D');
  });

  it('should encode 1000', () => {
    expect(solution(1000)).to.equal('M');
  });

  it('should encode 1001', () => {
    expect(solution(1001)).to.equal('MI');
  });

  it('should encode 3', () => {
    expect(solution(3)).to.equal('III');
  });

  it('should encode  2008', () => {
    expect(solution(2008)).to.equal('MMVIII');
  });

  it('should encode 4', () => {
    expect(solution(4)).to.equal('IV');
  });

  it('should encode 9', () => {
    expect(solution(9)).to.equal('IX');
  });

  it('should encode 2007', () => {
    expect(solution(2007)).to.equal('MMVII');
  });

  it('should encode 1990', () => {
    expect(solution(1990)).to.equal('MCMXC');
  });
});
