let expect = require("chai").expect;

const parse = (input) =>
  input.split('\n')
    .map(layer => {
      const [index, depth] = layer.split(': ')
      return {
        index: Number(index),
        depth: Number(depth)
      }
    })

const isScannerAt0 = (depth, tick) =>
  tick % (depth + depth - 2) === 0;

const hack = (scanners, delay) =>
  scanners
    .reduce((goodScanners, scanner) => {
      return isScannerAt0(scanner.depth, scanner.index + delay) ? goodScanners.concat(scanner) : goodScanners;
    }, [])

const part2 = (input) => {
  let delay = 0;

  while (hack(input, delay).length !== 0) {
    delay++;
  }
  return delay
}

const part1 = (input) =>
  hack(input, 0)
    .reduce((sum, ind) => (sum + (ind.index * ind.depth)), 0)

describe('firewall', () => {
  it('should parse', () => {
    const parsed = parse(input);
    expect(parsed.length).to.equal(4);
    expect(parsed[0]).to.deep.equal({index: 0, depth: 3});
  });

  it('should get caught', () => {
    expect(part1(parse(input))).to.equal(24);
    expect(part1(parse(input2))).to.equal(1640);
    expect(part2(parse(input))).to.equal(10);
  });

  xit('takes time to calculate', () => {
    expect(part2(parse(input2))).to.equal(3960702);
  });
});

const input = `0: 3
1: 2
4: 4
6: 4`

const input2 = `0: 3
1: 2
2: 4
4: 4
6: 5
8: 8
10: 6
12: 6
14: 6
16: 6
18: 8
20: 8
22: 12
24: 10
26: 9
28: 8
30: 8
32: 12
34: 12
36: 12
38: 12
40: 8
42: 12
44: 14
46: 14
48: 10
50: 12
52: 12
54: 14
56: 14
58: 14
62: 12
64: 14
66: 14
68: 14
70: 12
74: 14
76: 14
78: 14
80: 18
82: 17
84: 30
88: 14`
