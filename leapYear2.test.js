const leapYear2 = require('./leapYear2');

describe('leapYear2', () => {
  it('returns true when given a number that is divisible by 400 eg 2000', () => {
    expect(leapYear2(2000)).toBe("true");
  });
  it('return true when given a number divisible by 4 but not 100 eg 2004', () => {
    expect(leapYear(2004)).toBe("true");
  });
});