const leapYearRange = require('./leapYearRange');

describe('leapYearRange',  () => {
  it('given 2 years it will return an array of leap years in between', () => {
    expect(leapYearRange(2000,2009)).toBe([2000,2004,2008]);
  });
});