const leapYear3 = require("./leapYear3");

const closestLeapYear = (givenYear) => {
  if (leapYear3(givenYear) == true) {
    return givenYear;
  } else if(leapYear3(givenYear + 1) == true){
    return givenYear + 1
  } else if (leapYear3(givenYear + 2) == true) {
    return givenYear + 2
  } else {
    return givenYear - 1
  }
};

module.exports = closestLeapYear;


