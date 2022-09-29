const rangeYears3 = require('./rangeYears3');

describe('rangeYears3', () => {
  it('takes all the leap years between two given years', () => {
    expect(rangeYears3(1998,2001)).toEqual([2000]);
    expect(rangeYears3(2000,2004)).toEqual([2000,2004]);
  });
  
});