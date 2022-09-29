const leapYear3 = require('./leapYear3')

const rangeYears3 = (firstYear, lastYear) => {
    let leapYears = []
    let allYears = []
    for (let i = firstYear; i <= lastYear; i++) {
        allYears.push(i)
    }
    allYears.forEach((year) => {
        if(leapYear3(year) === true){
            leapYears.push(year)
        }
    })
    return leapYears
}

module.exports = rangeYears3;

