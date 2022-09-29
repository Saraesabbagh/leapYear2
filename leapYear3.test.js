const leapYear3 = require('./leapYear3');
const rangeYears3 = require('./rangeYears3')

describe('leapYear3', () => {
  it('returns true when given a number that is divisible by 400', () =>{
    expect(leapYear3(2000)).toBe(true);
    expect(leapYear3(2001)).toBe(false);
  });
  it('return true when given a number that is divisible by 4 but not 100', () => {
    expect(leapYear3(2004)).toBe(true);
    expect(leapYear3(2003)).toBe(false);
    expect(leapYear3(2008)).toBe(true);
    expect(leapYear3(2012)).toBe(true);
  });
  it('return false when given a number divisible by 100 but not 400', ()=>{
    expect(leapYear3(1700)).toBe(false);
    expect(leapYear3(1800)).toBe(false);
    expect(leapYear3(1900)).toBe(false);
  });
  it('returns false when given a number not divisible by 4',  ()=>{
    expect(leapYear3(2009)).toBe(false);
    expect(leapYear3(2010)).toBe(false);
    expect(leapYear3(2011)).toBe(false);
  });
});

