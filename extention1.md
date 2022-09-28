Extension program= A programe that take a start year and an end year and returns and array of all the leap years between. 

eg (2000, 2009)-->leapArray--> 2000, 2004, 2008, 

## Input/ output table

| input| output |
| -----|------- |
|2000,2009|2000,2004,2008|

## What is the logic 
- need to take the first number and each subsequent number all the way up to the second number and check each of them to see if they satisfy the leap year criteria. 
-if a number does satisfy the leap year criteria then is should be pushed into the leapyearArray.
-this leap year array should then be displayed. 
- How are we going to do this?
-- we need the program to take the first year- loop through the criteria, push it to the array or not and then add +1 to the year and then do go again. 
- This is going to require two functions the first whether to see if each year is or is not a leap year and the second to loop through each year to decided based on outcome of first function if it is or is not a leap year. 

