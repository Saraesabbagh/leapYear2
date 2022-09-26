const leapYear2 = (year) => {
  if(year % 400 == 0) {
    return "true";
  } else if ( year % 4 == 0 && year % 100 != 0) {
    return "true";
  }
};

module.exports = leapYear2;

console.log(leapYear2(2000));
console.log(leapYear2(2004));
