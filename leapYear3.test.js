const leapYear3 = require('./leapYear3');

describe('leapYear3', () => {
  it('returns true when given a number that is divisible by 400', () =>{
    expect(leapYear3(2000)).toBe(true);
    expect(leapYear3(2001)).toBe(false);
  });
});