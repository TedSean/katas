let expect = require("chai").expect;

const parse = (input) => {
  let maxIndex = 0;
  return {
    firewall: input.split('\n').map(layer => {
      const [index, depth] = layer.split(': ')
      maxIndex = Math.max(index, maxIndex);
      return {
        index: Number(index),
        depth: Number(depth),
        position: 0,
        reverse: false
      }
    }),
    maxIndex
  }
}

const getScannerAtNextPos = ({reverse, position, depth, index}) => {
  if (reverse) {
    if (position === 0) {
      position = 1;
      reverse = false;
    } else {
      position -= 1;
    }
  } else {
    if (position === depth - 1) {
      reverse = true;
      position -= 1;
    } else {
      position += 1
    }
  }
  return {reverse, position, depth, index};
}

const hack = ({firewall, maxIndex}, delay = 0) => {
  const getScanner = (i) => {
    return firewall.find(({index}) => index === i) || {}
  }

  for (let i = 0; i < delay; i++) {
    firewall = firewall.map(scanner => {
      return getScannerAtNextPos(scanner)
    })
  }

  let caughtIndexes = [];
  for (let i = 0; i <= maxIndex; i++) {
    const scanner = getScanner(i);
    scanner.position === 0 ? caughtIndexes.push(scanner) : null;
    firewall = firewall.map(scanner => {
      return getScannerAtNextPos(scanner);
    })
  }
  return caughtIndexes;
}

const part2 = (input) => {
  let delay = 0;
  const x = parse(input);

  while (hack(x, delay).length !== 0) {
    delay++;
  }
  return delay
}

const part1 = (input) => {
  return hack(input).reduce((sum, ind) => (sum + (ind.index * ind.depth)), 0);
}

describe.only('firewall', () => {
  it('should parse', () => {
    const parsed = parse(input);
    expect(parsed.firewall.length).to.equal(4);
    expect(parsed.firewall[0]).to.deep.equal({index: 0, depth: 3, position: 0, reverse: false});
    expect(parsed.maxIndex).to.equal(6);
  });

  it('should get caught', () => {
    // expect(part1(parse(input))).to.equal(24);
    // expect(part1(parse(input2))).to.equal(1640);
    // expect(part1(parse(input3))).to.equal(1840);
    // expect(part2(input)).to.equal(10);
    expect(part2(input2)).to.equal(1640);
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

const input3 = `0: 5
1: 2
2: 3
4: 4
6: 6
8: 4
10: 8
12: 6
14: 6
16: 8
18: 6
20: 9
22: 8
24: 10
26: 8
28: 8
30: 12
32: 8
34: 12
36: 10
38: 12
40: 12
42: 12
44: 12
46: 12
48: 14
50: 12
52: 14
54: 12
56: 14
58: 12
60: 14
62: 14
64: 14
66: 14
68: 14
70: 14
72: 14
76: 14
80: 18
84: 14
90: 18
92: 17`
