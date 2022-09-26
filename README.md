# leapYear2
-A simple tool that will tell you whether a year is a leap year, according to the following rules:
## Are leap years
-All years divisible by 400 ARE leap years (e.g. 2000 was a leap year)
-All years divisible by 4 and not by 100 ARE leap years (e.g. 2004, 2008 and 2012 were leap years)
## Are not leap years
-All years divisible by 100 but not by 400 are NOT leap years (e.g. 1700, 1800 and 1900 were not leap years)
-All years not divisible by 4 are NOT leap years (e.g. 2009, 2010 and 2011 were not leap years)

# Plan

## input/ output table

| input | Output |
| ------|--------|
|2000| true |
|2004| true|
|1700|false|
|2009| false| 

### How are we going to do this?
-class- Year- (probably don't need a class for the purpose of this small programe. )
- Method = leapYear2 - This will use conditionals to decide if a year is a leapyear or not

-input-->leapYear2-->output
- 2000 -->leapYear2---> "true" why (becuuase devisible by 400)
-2004-->leapYear2--> "true" why( divisble by 4 and NOT 100)
-1700-->leapYear2--> "false" why (divisible by 100 bu tNOT 400)
-2009 -->leapYear2 --> "false" (NOT divisible by 4)
