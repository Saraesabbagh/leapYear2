const closestLeapYear = require('./closestLeapYear');

describe("closestLeapYear", () => {
  it("returns itself if itself is a Leapyears", () => {
    expect(closestLeapYear(2004)).toBe(2004);
  });
  it("checks whether either of the next 2 years are leaps years", ()=> {
    expect(closestLeapYear(2006)).toBe(2008);
  });
  it("if 2 years after doesn't contain a leap year it will return given year minus 1", () => {
    expect(closestLeapYear(2005)).toBe(2004);
  });
});