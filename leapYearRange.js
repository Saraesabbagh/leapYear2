const leapYearRange = (start_year,end_year) => {
  const year_range =[];
  let leapYearArray = [];

  for(let i= start_year; i<= end_year; i++)
       {year_range.push(i);}
      
 
  year_range.forEach = (year) => {
      if(isLeapYear(year)=== true){
        leapYearArray.push(year);
      }
    }
   return leapYearArray; 
};

const isLeapYear = (year) => {
  if (( year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
    return true
  } else {
    return false;
  }
};
console.log(leapYearRange(2000,2009));

module.exports = leapYearRange;

