const leapYears = function(numYear) {
    return numYear % 4 === 0 && (numYear % 100 !== 0 || numYear % 400 === 0);


};

// Do not edit below this line
module.exports = leapYears;
