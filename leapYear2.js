const leapYear2 = (year) => {
  if(year % 400 == 0) {
    return "true";
  } else if ( year % 4 == 0 && year % 100 != 0) {
    return "true";
  } else if (year % 100 == 0 && year % 400 != 0) {
    return "false";
  }
};

module.exports = leapYear2;

console.log(leapYear2(2000));
console.log(leapYear2(2004));
console.log(leapYear2(1700));
