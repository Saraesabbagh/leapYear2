const leapYearRange = (start_year, end_year) => {
  const year_range =[];
    
  for(let i= start_year; i<= end_year; i++)
       {year_range.push(i);}
      const leapYearArray = [];
 
  year_range.forEach = (year) => {
    if(isLeapYear(year))
    leapYearArray.push(year);
  }
  return leapYearArray;
};


const isLeapYear = (year) => {
  if (( year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
    return year
  } else {
    return false;
  }
};

console.log(leapYearRange(2000, 2009));