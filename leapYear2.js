const leapYear2 = (year) => {
  if(year % 400 == 0) {
    return "true";
  }
};

module.exports = leapYear2;

console.log(leapYear2(2000));