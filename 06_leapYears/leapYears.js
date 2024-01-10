// const leapYears = function (year) {
//     let result
//     if ((year % 100 && 400 === 0) || (year % 4 === 0)) {
//         result = true
//     } else {
//         result = false
//     }
//     return result
// };

// const leapYears = function (year) {
//     let isLeapYear = false
//     if (year % 4 === 0) {
//         isLeapYear = true
//     } else if (year % 100 === 0 && year % 400 === 0) {
//         isLeapYear = true
//     }
//     return isLeapYear
// };

const leapYears = function (year) {
    let isLeapYear = false
    if (year % 4 === 0 && year % 100 !== 0) {
        isLeapYear = true
    } else if (year % 400 === 0) {
        isLeapYear = true
    }
    return isLeapYear
};

// console.log(leapYears(1900))

// Do not edit below this line
module.exports = leapYears;
