let expect = require("chai").expect;

let Gspare, Gstrike = false;

function countScore(game) {
  Gspare = Gstrike = false;
  let turns = game.split(' ');
  return turns.reduce((sum, turn) => sum + getTurnScore(turn, Gstrike, Gspare), 0);
}

function getTurnScore(turn, strike, spare) {
  Gspare = Gstrike = false;
  let thisTurnSpare = false;
  return turn.split('').reduce((sum, a) => {
    let throwScore = parseInt(a) || 0;
    if (a === '/') {
      Gspare = true;
      throwScore = (thisTurnSpare || strike) ? 10 - (sum / 2) : 10 - sum;
    }
    if (a === 'X') {
      Gstrike = true;
      throwScore = 10;
    }
    if (spare) {
      spare = false;
      thisTurnSpare = true;
      throwScore = 2 * throwScore;
    }
    if (strike) {
      throwScore = 2 * throwScore;
    }
    return sum + throwScore;
  }, 0);
}

describe('Single turn score', () => {
  it('should count turn score', () => {
    expect(getTurnScore('81', false, false)).to.equal(9);
  });

  it('9/', () => {
    expect(getTurnScore('9/', false, false)).to.equal(10);
  })

  it('should count turn score if previous was strike', () => {
    expect(getTurnScore('81', true, false)).to.equal(18);
  });

  it('should count turn score if previous was spare', () => {
    expect(getTurnScore('81', false, true)).to.equal(17);
  });

  it('should count turn score X after spare', () => {
    expect(getTurnScore('X', false, true)).to.equal(20);
  });

  it('should count turn score X after strike', () => {
    expect(getTurnScore('X', true, false)).to.equal(20);
  });

  it('should count turn score 80 after strike', () => {
    expect(getTurnScore('80', true, false)).to.equal(16);
  });

  it('should count turn score 63 after spare', () => {
    expect(getTurnScore('63', false, true)).to.equal(15);
  });

  it('should count turn score 9/ after spare', () => {
    expect(getTurnScore('9/', false, true)).to.equal(19);
  });

  it('should count turn score 9/ after spare', () => {
    expect(getTurnScore('3/', false, true)).to.equal(13);
  });

  it('should count turn score 33 after spare', () => {
    expect(getTurnScore('33', false, true)).to.equal(9);
  });
});

describe('bowling score', () => {
  it('should count sum good', () => {
    expect(countScore('90 90 13 05 31 08 13 71 41 12')).to.equal(59);
    expect(countScore('01 81 31 90 45 23 X 03 36 12')).to.equal(65);
    expect(countScore('90 9/ 33 05 31 08 13 71 41 12')).to.equal(65);
    expect(countScore('9/ 90 13 05 31 08 13 71 41 12')).to.equal(69);
    expect(countScore('X 7/ 4/ 81 23 52 02 31 18 12')).to.equal(91);
    expect(countScore('60 23 07 62 X 18 X 52 52 34')).to.equal(92);
    expect(countScore('8/ X 80 70 72 63 5/ 63 81 12')).to.equal(108);
    expect(countScore('7/ 9/ 43 50 61 72 X X 25 53')).to.equal(113);
    expect(countScore('60 18 45 9/ X 60 27 9/ X 34')).to.equal(119);
    expect(countScore('X X X 00 00 00 00 00 00 00')).to.equal(50);
  });

  describe('custom last', () => {
    it('should count good', () => {
      expect(countScore('90 90 13 05 31 08 13 71 41 1/2')).to.equal(68);
      expect(countScore('90 90 13 05 31 08 13 71 41 X72')).to.equal(75);
      expect(countScore('9/ 53 33 7/ 23 80 02 40 03 XX1')).to.equal(84);
      expect(countScore('61 22 33 15 X 03 11 4/ 2/ 1/X')).to.equal(84);
      expect(countScore('90 41 71 40 90 41 1/ X 90 1/X')).to.equal(108);
      expect(countScore('81 21 8/ X 53 30 05 35 X XX1')).to.equal(125);
      expect(countScore('X X X X X X X X X XXX')).to.equal(300);
    })
  });
});
