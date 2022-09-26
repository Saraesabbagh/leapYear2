const leapYear2 = require('./leapYear2');

describe('leapYear2', () => {
  it('returns true when given a number that is divisible by 400 eg 2000', () => {
    expect(leapYear2(2000)).toBe("true");
  })
});